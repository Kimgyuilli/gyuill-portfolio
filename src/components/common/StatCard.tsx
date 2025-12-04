import { Stat } from '@/types';

interface StatCardProps {
  stat: Stat;
}

export function StatCard({ stat }: StatCardProps) {
  return (
    <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-8 text-center hover:border-emerald-500/50 transition-colors">
      <div className="flex justify-center mb-4 text-emerald-400">{stat.icon}</div>
      <div className="text-4xl font-bold text-slate-100 mb-2">
        {stat.value}
        {stat.suffix && <span className="text-emerald-400">{stat.suffix}</span>}
      </div>
      <p className="text-slate-400">{stat.label}</p>
    </div>
  );
}
