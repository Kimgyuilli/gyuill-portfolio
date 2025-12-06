import Parser from 'rss-parser';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const RSS_FEED_URL = 'https://imdeepskyblue.tistory.com/rss';
const OUTPUT_FILE = path.join(__dirname, '../src/data/blog.ts');
const MAX_POSTS = 3;

const parser = new Parser({
  customFields: {
    item: [
      ['media:thumbnail', 'mediaThumbnail'],
      ['content:encoded', 'contentEncoded'],
    ],
  },
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
    'Accept': 'application/rss+xml, application/xml, text/xml, */*',
  },
});

/**
 * URL 정규화 (프로토콜 상대 URL 처리)
 */
function normalizeUrl(url) {
  if (!url) return '';
  return url.startsWith('//') ? `https:${url}` : url;
}

/**
 * RSS 피드에서 썸네일 이미지 추출
 */
function extractThumbnail(item) {
  // 1. media:thumbnail 태그
  if (item.mediaThumbnail && item.mediaThumbnail.$ && item.mediaThumbnail.$.url) {
    return normalizeUrl(item.mediaThumbnail.$.url);
  }

  // 2. enclosure (이미지 타입)
  if (item.enclosure && item.enclosure.type && item.enclosure.type.startsWith('image/')) {
    return normalizeUrl(item.enclosure.url);
  }

  // 3. content:encoded 또는 content에서 img 태그 파싱 (Python 스크립트와 동일한 정규식)
  const content = item['content:encoded'] || item.content || '';
  const imgMatch = content.match(/<img[^>]+src="([^"]+)"/);
  if (imgMatch) {
    const url = imgMatch[1];
    // Tistory no-image 필터링
    if (!url.includes('no-image')) {
      return normalizeUrl(url);
    }
  }

  // 4. 기본 이미지
  return 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800';
}

/**
 * 설명 텍스트에서 HTML 태그 제거 및 길이 제한
 */
function cleanDescription(html, maxLength = 100) {
  if (!html) return '';

  // HTML 태그 제거
  const text = html
    .replace(/<[^>]+>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .trim();

  // 길이 제한
  if (text.length > maxLength) {
    return text.substring(0, maxLength) + '...';
  }

  return text;
}

/**
 * 날짜를 YYYY.MM.DD 형식으로 변환
 */
function formatDate(dateString) {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}.${month}.${day}`;
}

/**
 * 카테고리에서 태그 추출 (최대 3개)
 */
function extractTags(categories) {
  if (!categories || categories.length === 0) return undefined;

  const tags = categories.slice(0, 3);
  return tags.length > 0 ? tags : undefined;
}

/**
 * RSS 피드를 파싱하여 BlogPost 배열 생성
 */
async function fetchBlogPosts() {
  try {
    console.log(`📡 Fetching RSS feed from: ${RSS_FEED_URL}`);
    const feed = await parser.parseURL(RSS_FEED_URL);

    console.log(`📚 Found ${feed.items.length} posts in feed`);

    const posts = feed.items.slice(0, MAX_POSTS).map((item) => {
      const thumbnail = extractThumbnail(item);
      const summary = cleanDescription(item.contentSnippet || item.description);
      const date = formatDate(item.pubDate || item.isoDate);
      const tags = extractTags(item.categories);

      return {
        title: item.title,
        summary,
        date,
        image: thumbnail,
        link: item.link,
        ...(tags && { tags }),
      };
    });

    console.log(`✅ Successfully parsed ${posts.length} posts`);
    return posts;
  } catch (error) {
    console.error('❌ Error fetching RSS feed:', error);
    throw error;
  }
}

/**
 * TypeScript 파일로 저장
 */
function generateTypeScriptFile(posts) {
  const imports = `import { BlogPost } from '@/types';`;

  const postsArray = posts.map((post) => {
    const tagsLine = post.tags
      ? `    tags: ${JSON.stringify(post.tags)},`
      : '';

    return `  {
    title: ${JSON.stringify(post.title)},
    summary: ${JSON.stringify(post.summary)},
    date: '${post.date}',
    image: ${JSON.stringify(post.image)},
    link: ${JSON.stringify(post.link)},${tagsLine ? '\n' + tagsLine : ''}
  }`;
  }).join(',\n');

  const content = `${imports}

export const blogPosts: BlogPost[] = [
${postsArray}
];
`;

  return content;
}

/**
 * 메인 함수
 */
async function main() {
  try {
    console.log('🚀 Starting blog update script...\n');

    // RSS 피드 파싱
    const posts = await fetchBlogPosts();

    // TypeScript 파일 생성
    const fileContent = generateTypeScriptFile(posts);

    // 파일 저장
    fs.writeFileSync(OUTPUT_FILE, fileContent, 'utf-8');
    console.log(`\n💾 Blog posts saved to: ${OUTPUT_FILE}`);

    console.log('\n🎉 Blog update completed successfully!');
  } catch (error) {
    console.error('\n💥 Blog update failed:', error);
    process.exit(1);
  }
}

main();
