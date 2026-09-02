import React from 'react';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';

interface MetricCardProps {
  label: string;
  value: string | number;
  subValue?: string;
  trend?: number;
  trendLabel?: string;
  icon: React.ReactNode;
  iconBg?: string;
  highlight?: 'positive' | 'negative' | 'warning' | 'neutral';
  className?: string;
}

export default function MetricCard({
  label, value, subValue, trend, trendLabel, icon, iconBg, highlight, className = ''
}: MetricCardProps) {
  const highlightClass = {
    positive: 'border-success/30 bg-success/5',
    negative: 'border-danger/30 bg-danger/5',
    warning: 'border-warning/30 bg-warning/5',
    neutral: '',
  }[highlight || 'neutral'];

  const trendColor = trend === undefined ? '' : trend > 0 ? 'text-success' : trend < 0 ? 'text-danger' : 'text-muted-foreground';
  const TrendIcon = trend === undefined ? null : trend > 0 ? TrendingUp : trend < 0 ? TrendingDown : Minus;

  return (
    <div className={`card p-5 flex flex-col gap-3 ${highlightClass} ${className}`}>
      <div className="flex items-start justify-between">
        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest leading-none">{label}</p>
        <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${iconBg || 'bg-primary/10'}`}>
          {icon}
        </div>
      </div>
      <div>
        <p className="metric-value font-tabular">{value}</p>
        {subValue && <p className="text-xs text-muted-foreground mt-1">{subValue}</p>}
      </div>
      {trend !== undefined && TrendIcon && (
        <div className={`flex items-center gap-1.5 text-xs font-semibold ${trendColor}`}>
          <TrendIcon size={13} />
          <span>{Math.abs(trend)}% {trendLabel || 'vs last month'}</span>
        </div>
      )}
    </div>
  );
}