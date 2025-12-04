import { Achievement } from '@/types';
import { ExternalLink } from 'lucide-react';

interface AchievementCardProps {
  achievement: Achievement;
}

export function AchievementCard({ achievement }: AchievementCardProps) {
  const CardContent = (
    <>
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center text-emerald-400">
          {achievement.icon}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="text-lg font-semibold text-slate-100">{achievement.title}</h3>
            {achievement.link && (
              <ExternalLink size={16} className="flex-shrink-0 text-slate-400" />
            )}
          </div>
          <p className="text-emerald-400 text-sm mb-1">{achievement.issuer}</p>
          <p className="text-slate-500 text-sm mb-2">{achievement.date}</p>
          {achievement.description && (
            <p className="text-slate-400 text-sm">{achievement.description}</p>
          )}
        </div>
      </div>
    </>
  );

  if (achievement.link) {
    return (
      <a
        href={achievement.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-emerald-500/50 transition-all hover:transform hover:scale-[1.02]"
      >
        {CardContent}
      </a>
    );
  }

  return (
    <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">{CardContent}</div>
  );
}
