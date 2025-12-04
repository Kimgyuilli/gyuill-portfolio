import { BlogPost } from '@/types';
import { Calendar, Clock, ExternalLink } from 'lucide-react';
import { ImageWithFallback } from './ImageWithFallback';

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <a
      href={post.link}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-slate-900/50 border border-slate-800 rounded-xl overflow-hidden hover:border-emerald-500/50 transition-all hover:transform hover:scale-[1.02] group"
    >
      <div className="aspect-video overflow-hidden bg-slate-800">
        <ImageWithFallback
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-4 text-slate-500 text-sm mb-3">
          <span className="flex items-center gap-1">
            <Calendar size={14} />
            {post.date}
          </span>
          <span className="flex items-center gap-1">
            <Clock size={14} />
            {post.readTime}
          </span>
        </div>
        <h3 className="text-xl font-semibold text-slate-100 mb-3 group-hover:text-emerald-400 transition-colors flex items-start justify-between gap-2">
          {post.title}
          <ExternalLink size={16} className="flex-shrink-0 mt-1" />
        </h3>
        <p className="text-slate-400 mb-4 line-clamp-2">{post.summary}</p>
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-slate-800 text-emerald-400 text-xs rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </a>
  );
}
