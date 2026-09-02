'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import ScholarshipCard, { ScholarshipCardData } from '@/components/ui/ScholarshipCard';

const recommended: ScholarshipCardData[] = [
  { id: 'rec-001', title: 'Karnataka Rajyotsava Scholarship for SC/ST Students', provider: 'Dept. of Social Welfare, Karnataka', amount: '12,000', amountType: 'Annual', deadline: '30 Sep 2026', daysLeft: 29, educationLevel: 'Class 11-12 / UG', category: 'SC/ST', state: 'Karnataka', matchScore: 94, matchLabel: 'Excellent Match', isVerified: true },
  { id: 'rec-002', title: 'AICTE Pragati Scholarship for Girls in Technical Education', provider: 'AICTE', amount: '50,000', amountType: 'Annual', deadline: '15 Oct 2026', daysLeft: 44, educationLevel: 'B.E / B.Tech', category: 'Girl Child', state: 'All India', matchScore: 88, matchLabel: 'Excellent Match', isVerified: true, isSaved: true },
  { id: 'rec-003', title: 'Indira Gandhi Single Girl Child Scholarship', provider: 'UGC', amount: '36,200', amountType: 'Annual', deadline: '28 Sep 2026', daysLeft: 27, educationLevel: 'Post Graduate', category: 'Girl Child', state: 'All India', matchScore: 85, matchLabel: 'Excellent Match', isVerified: true },
  { id: 'rec-004', title: 'Vidyasiri Post-Matric Scholarship for OBC Students', provider: 'Backward Classes Welfare Dept., Karnataka', amount: '8,500', amountType: 'Annual', deadline: '05 Oct 2026', daysLeft: 34, educationLevel: 'UG / PG', category: 'OBC', state: 'Karnataka', matchScore: 76, matchLabel: 'Good Match', isVerified: true },
];

export default function RecommendedScholarships() {
  const [saved, setSaved] = useState<Set<string>>(new Set(['rec-002']));

  const handleSave = (id: string) => {
    setSaved((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id); else next.add(id);
      return next;
    });
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-base font-bold text-foreground">Recommended for You</h2>
          <p className="text-xs text-muted-foreground mt-0.5">Based on your profile — sorted by match score</p>
        </div>
        <Link href="/scholarship-search-discovery" className="flex items-center gap-1 text-xs font-semibold text-primary hover:underline">
          View all <ArrowRight size={12} />
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-4">
        {recommended.map((sch) => (
          <ScholarshipCard key={sch.id} data={{ ...sch, isSaved: saved.has(sch.id) }} onSave={handleSave} />
        ))}
      </div>
    </div>
  );
}