import React from 'react';
import Link from 'next/link';
import { Calendar, BookOpen, Heart, MapPin, IndianRupee } from 'lucide-react';
import AppImage from '@/components/ui/AppImage';

export interface ScholarshipCardData {
  id: string;
  title: string;
  provider: string;
  providerLogo?: string;
  amount: string;
  amountType: 'Annual' | 'Monthly' | 'One-time' | 'Up to';
  deadline: string;
  daysLeft: number;
  educationLevel: string;
  category: string;
  state: string;
  matchScore?: number;
  matchLabel?: 'Excellent Match' | 'Good Match' | 'Possible Match';
  isVerified: boolean;
  isSaved?: boolean;
  tags?: string[];
}

interface ScholarshipCardProps {
  data: ScholarshipCardData;
  onSave?: (id: string) => void;
  variant?: 'grid' | 'list';
}

function getMatchClass(label?: string) {
  if (!label) return '';
  if (label === 'Excellent Match') return 'match-excellent';
  if (label === 'Good Match') return 'match-good';
  return 'match-possible';
}

function getDeadlineClass(daysLeft: number) {
  if (daysLeft <= 7) return 'bg-danger/10 text-danger border-danger/20';
  if (daysLeft <= 21) return 'bg-warning/10 text-warning border-warning/20';
  return 'bg-success/10 text-success border-success/20';
}

export default function ScholarshipCard({ data, onSave, variant = 'grid' }: ScholarshipCardProps) {
  const deadlineClass = getDeadlineClass(data.daysLeft);
  const matchClass = getMatchClass(data.matchLabel);

  if (variant === 'list') {
    return (
      <div className="card-hover p-4 flex items-start gap-4">
        <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center shrink-0 overflow-hidden">
          {data.providerLogo ? (
            <AppImage src={data.providerLogo} alt={`${data.provider} logo`} width={48} height={48} className="w-full h-full object-contain" />
          ) : (
            <BookOpen size={20} className="text-primary" />
          )}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <div>
              <Link href="/scholarship-detail" className="font-semibold text-sm text-foreground hover:text-primary transition-colors line-clamp-1">{data.title}</Link>
              <p className="text-xs text-muted-foreground mt-0.5">{data.provider}</p>
            </div>
            {data.matchLabel && (
              <span className={`badge ${matchClass} shrink-0`}>{data.matchScore}% {data.matchLabel}</span>
            )}
          </div>
          <div className="flex flex-wrap items-center gap-2 mt-2">
            <span className={`badge ${deadlineClass}`}><Calendar size={10} />{data.daysLeft}d left</span>
            <span className="badge bg-muted text-muted-foreground border-border"><IndianRupee size={10} />₹{data.amount} / {data.amountType}</span>
            <span className="badge bg-secondary text-secondary-foreground border-secondary">{data.educationLevel}</span>
            <span className="badge bg-muted text-muted-foreground border-border"><MapPin size={10} />{data.state}</span>
          </div>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={() => onSave?.(data.id)}
            className={`p-2 rounded-xl transition-colors ${data.isSaved ? 'text-danger bg-danger/10' : 'text-muted-foreground hover:text-danger hover:bg-danger/5'}`}
            aria-label={data.isSaved ? 'Unsave scholarship' : 'Save scholarship'}
          >
            <Heart size={16} fill={data.isSaved ? 'currentColor' : 'none'} />
          </button>
          <Link href="/scholarship-detail" className="btn-primary text-xs px-3 py-1.5">Apply</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="card-hover p-5 flex flex-col gap-3 group relative">
      {/* Header */}
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center shrink-0 overflow-hidden">
            {data.providerLogo ? (
              <AppImage src={data.providerLogo} alt={`${data.provider} logo`} width={40} height={40} className="w-full h-full object-contain" />
            ) : (
              <BookOpen size={18} className="text-primary" />
            )}
          </div>
          <div>
            <p className="text-xs text-muted-foreground truncate max-w-[140px]">{data.provider}</p>
            {data.isVerified && (
              <span className="inline-flex items-center gap-1 text-xs text-success font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-success" /> Verified
              </span>
            )}
          </div>
        </div>
        <button
          onClick={() => onSave?.(data.id)}
          className={`p-1.5 rounded-lg transition-all duration-150 ${data.isSaved ? 'text-danger' : 'text-muted-foreground hover:text-danger opacity-0 group-hover:opacity-100'}`}
          aria-label={data.isSaved ? 'Unsave scholarship' : 'Save scholarship'}
        >
          <Heart size={15} fill={data.isSaved ? 'currentColor' : 'none'} />
        </button>
      </div>

      {/* Title */}
      <Link href="/scholarship-detail" className="font-semibold text-sm text-foreground hover:text-primary transition-colors line-clamp-2 leading-snug">
        {data.title}
      </Link>

      {/* Match Score */}
      {data.matchLabel && (
        <span className={`badge ${matchClass} self-start`}>
          {data.matchScore}% — {data.matchLabel}
        </span>
      )}

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5">
        <span className="badge bg-secondary text-secondary-foreground border-secondary text-xs">{data.educationLevel}</span>
        <span className="badge bg-muted text-muted-foreground border-border text-xs">{data.category}</span>
        {data.tags?.slice(0, 1).map((tag) => (
          <span key={`tag-${tag}`} className="badge bg-muted text-muted-foreground border-border text-xs">{tag}</span>
        ))}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between mt-auto pt-3 border-t border-border">
        <div>
          <p className="text-xs text-muted-foreground">Amount</p>
          <p className="text-sm font-bold text-foreground tabular-nums">₹{data.amount}<span className="text-xs font-normal text-muted-foreground">/{data.amountType}</span></p>
        </div>
        <span className={`badge ${deadlineClass} text-xs`}>
          <Calendar size={10} />
          {data.daysLeft <= 0 ? 'Closed' : `${data.daysLeft}d left`}
        </span>
      </div>

      <Link href="/scholarship-detail" className="btn-primary w-full justify-center text-xs">
        View & Apply
      </Link>
    </div>
  );
}