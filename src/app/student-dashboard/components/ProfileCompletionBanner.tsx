'use client';
import React from 'react';
import Link from 'next/link';
import { AlertCircle, ChevronRight } from 'lucide-react';

const completionItems = [
  { label: 'Personal Info', done: true },
  { label: 'Education Details', done: true },
  { label: 'Family Income', done: true },
  { label: 'Caste Certificate', done: false },
  { label: 'Bank Details', done: false },
];

const pct = Math.round((completionItems?.filter((i) => i?.done)?.length / completionItems?.length) * 100);

export default function ProfileCompletionBanner() {
  if (pct === 100) return null;

  return (
    <div className="card p-4 border-warning/30 bg-warning/5">
      <div className="flex items-start justify-between gap-4 flex-wrap">
        <div className="flex items-start gap-3">
          <AlertCircle size={18} className="text-warning shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-bold text-foreground">Complete your profile to unlock more scholarship matches</p>
            <p className="text-xs text-muted-foreground mt-1">Your profile is {pct}% complete. Missing info reduces your match accuracy.</p>
            <div className="flex flex-wrap gap-2 mt-3">
              {completionItems?.map((item) => (
                <span
                  key={`completion-${item?.label}`}
                  className={`badge text-xs ${item?.done ? 'bg-success/10 text-success border-success/20' : 'bg-warning/10 text-warning border-warning/20'}`}
                >
                  {item?.done ? '✓' : '○'} {item?.label}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4 shrink-0">
          <div className="text-right">
            <p className="text-2xl font-bold text-foreground tabular-nums">{pct}%</p>
            <p className="text-xs text-muted-foreground">Complete</p>
          </div>
          <div className="w-16 h-16 relative">
            <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
              <circle cx="18" cy="18" r="15.9" fill="none" stroke="var(--border)" strokeWidth="3" />
              <circle
                cx="18" cy="18" r="15.9" fill="none"
                stroke="var(--warning)" strokeWidth="3"
                strokeDasharray={`${pct} ${100 - pct}`}
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="mt-3 h-1.5 bg-border rounded-full overflow-hidden">
        <div className="h-full bg-warning rounded-full transition-all duration-500" style={{ width: `${pct}%` }} />
      </div>
      <div className="mt-3 flex justify-end">
        <Link href="/student-dashboard" className="flex items-center gap-1 text-xs font-bold text-warning hover:underline">
          Complete Profile <ChevronRight size={12} />
        </Link>
      </div>
    </div>
  );
}