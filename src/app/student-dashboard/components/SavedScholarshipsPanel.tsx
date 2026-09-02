'use client';
import React from 'react';
import Link from 'next/link';
import { Heart, Calendar, ArrowRight } from 'lucide-react';

const saved = [
  { id: 'saved-001', title: 'AICTE Pragati Scholarship for Girls', amount: '₹50,000', daysLeft: 44, matchScore: 88 },
  { id: 'saved-002', title: 'National Scholarship for PwD Students', amount: '₹40,000', daysLeft: 65, matchScore: 33 },
  { id: 'saved-003', title: 'Sukanya Samriddhi Scholarship', amount: '₹20,000', daysLeft: 75, matchScore: 71 },
  { id: 'saved-004', title: 'Karnataka Minority Welfare Scholarship', amount: '₹10,000', daysLeft: 54, matchScore: 79 },
  { id: 'saved-005', title: 'PM Scholarship for CAPF Wards', amount: '₹36,000', daysLeft: 60, matchScore: 42 },
];

export default function SavedScholarshipsPanel() {
  return (
    <div className="card">
      <div className="flex items-center justify-between px-5 py-4 border-b border-border">
        <div className="flex items-center gap-2">
          <Heart size={16} className="text-danger" />
          <h2 className="text-sm font-bold text-foreground">Saved Scholarships</h2>
          <span className="badge bg-danger/10 text-danger border-danger/20 text-xs">{saved?.length}</span>
        </div>
        <Link href="/student-dashboard" className="text-xs font-semibold text-primary hover:underline flex items-center gap-1">
          View all <ArrowRight size={11} />
        </Link>
      </div>
      <div className="divide-y divide-border">
        {saved?.map((s) => (
          <div key={s?.id} className="flex items-center justify-between gap-3 px-5 py-3.5 hover:bg-muted/40 transition-colors group">
            <div className="min-w-0">
              <Link href="/scholarship-detail" className="text-sm font-semibold text-foreground hover:text-primary transition-colors line-clamp-1 group-hover:text-primary">
                {s?.title}
              </Link>
              <div className="flex items-center gap-3 mt-1">
                <span className="text-xs font-bold text-success">{s?.amount}</span>
                <span className={`text-xs font-semibold ${s?.daysLeft <= 14 ? 'text-danger' : 'text-muted-foreground'}`}>
                  <Calendar size={10} className="inline mr-0.5" />{s?.daysLeft}d left
                </span>
              </div>
            </div>
            <div className="shrink-0 text-right">
              <span className={`badge text-xs ${s?.matchScore >= 80 ? 'match-excellent' : s?.matchScore >= 60 ? 'match-good' : 'match-possible'}`}>
                {s?.matchScore}%
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}