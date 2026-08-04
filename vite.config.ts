import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { nodePolyfills } from 'vite-plugin-node-polyfills';
import fs from 'fs';
import path from 'path';

const PROJECT_DATA_DIR = path.resolve(__dirname, 'src/data/projects');
const OUT_DIR = path.resolve(__dirname, 'build');

/** 프로젝트 데이터 파일에서 slug 목록을 읽는다. */
function readProjectSlugs(): string[] {
  return fs
    .readdirSync(PROJECT_DATA_DIR)
    .filter((file) => file.endsWith('.ts') && file !== 'index.ts')
    .flatMap((file) => {
      const source = fs.readFileSync(path.join(PROJECT_DATA_DIR, file), 'utf-8');
      const match = source.match(/^\s*slug:\s*'([^']+)'/m);
      return match ? [match[1]] : [];
    });
}

/**
 * 프로젝트 상세 경로마다 index.html을 실제 파일로 만든다.
 *
 * 빌드 결과가 정적 파일로 서빙되기 때문에 `/projects/<slug>/` 요청이
 * 실제 파일에 대응되지 않으면 새로고침·직접 접속에서 404가 난다.
 * SPA fallback 설정을 호스트에 요구하는 대신 파일을 만들어 둔다.
 */
function emitProjectPages(): Plugin {
  return {
    name: 'emit-project-pages',
    apply: 'build',
    closeBundle() {
      const slugs = readProjectSlugs();
      if (slugs.length === 0) {
        throw new Error('프로젝트 slug를 찾지 못했습니다. src/data/projects 형식을 확인하세요.');
      }

      const template = fs.readFileSync(path.join(OUT_DIR, 'index.html'), 'utf-8');
      for (const slug of slugs) {
        const dir = path.join(OUT_DIR, 'projects', slug);
        fs.mkdirSync(dir, { recursive: true });
        fs.writeFileSync(path.join(dir, 'index.html'), template);
      }
      this.info(`프로젝트 상세 페이지 ${slugs.length}개 생성`);
    },
  };
}

export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    nodePolyfills({
      include: ['buffer', 'process'],
    }),
    emitProjectPages(),
  ],
  base: mode === 'production' ? (process.env.VITE_BASE_PATH ?? '/portfolio/') : '/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    target: 'esnext',
    outDir: 'build',
  },
  server: {
    port: 3000,
    open: true,
  },
}));
