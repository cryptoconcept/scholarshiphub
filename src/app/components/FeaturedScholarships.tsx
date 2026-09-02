'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import ScholarshipCard, { ScholarshipCardData } from '@/components/ui/ScholarshipCard';

const featured: ScholarshipCardData[] = [
  { id: 'sch-001', title: 'Karnataka Rajyotsava Scholarship for SC/ST Students', provider: 'Dept. of Social Welfare, Karnataka', amount: '12,000', amountType: 'Annual', deadline: '30 Sep 2026', daysLeft: 29, educationLevel: 'Class 11-12 / UG', category: 'SC/ST', state: 'Karnataka', matchScore: 94, matchLabel: 'Excellent Match', isVerified: true, isSaved: false, tags: ['Govt', 'Post-Matric'] },
  { id: 'sch-002', title: 'AICTE Pragati Scholarship for Girls in Technical Education', provider: 'AICTE — All India Council for Technical Education', amount: '50,000', amountType: 'Annual', deadline: '15 Oct 2026', daysLeft: 44, educationLevel: 'B.E / B.Tech', category: 'Girl Child', state: 'All India', matchScore: 88, matchLabel: 'Excellent Match', isVerified: true, isSaved: true, tags: ['Central Govt', 'Engineering'] },
  { id: 'sch-003', title: 'Vidyasiri Post-Matric Scholarship for OBC Students', provider: 'Backward Classes Welfare Dept., Karnataka', amount: '8,500', amountType: 'Annual', deadline: '05 Oct 2026', daysLeft: 34, educationLevel: 'UG / PG', category: 'OBC', state: 'Karnataka', matchScore: 76, matchLabel: 'Good Match', isVerified: true, isSaved: false, tags: ['Govt', 'OBC'] },
  { id: 'sch-004', title: 'National Means-cum-Merit Scholarship (NMMS)', provider: 'Ministry of Education, India', amount: '12,000', amountType: 'Annual', deadline: '20 Oct 2026', daysLeft: 49, educationLevel: 'Class 9-10', category: 'Merit + Income', state: 'All India', matchScore: 82, matchLabel: 'Good Match', isVerified: true, isSaved: false, tags: ['Central Govt', 'Merit'] },
  { id: 'sch-005', title: 'Maulana Azad National Fellowship for Minority Students', provider: 'Ministry of Minority Affairs, India', amount: '25,000', amountType: 'Annual', deadline: '12 Sep 2026', daysLeft: 11, educationLevel: 'M.Phil / PhD', category: 'Minority', state: 'All India', matchScore: 61, matchLabel: 'Possible Match', isVerified: true, isSaved: false, tags: ['Central Govt', 'Research'] },
  { id: 'sch-006', title: 'Rajiv Gandhi National Fellowship for SC/ST Research', provider: 'UGC — University Grants Commission', amount: '31,000', amountType: 'Monthly', deadline: '08 Sep 2026', daysLeft: 7, educationLevel: 'PhD', category: 'SC/ST', state: 'All India', matchScore: 55, matchLabel: 'Possible Match', isVerified: true, isSaved: false, tags: ['UGC', 'Research'] },
];

export default function FeaturedScholarships() {
  const [saved, setSaved] = useState<Set<string>>(new Set(['sch-002']));

  const handleSave = (id: string) => {
    setSaved((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id); else next.add(id);
      return next;
    });
  };

  const scholarships = featured.map((s) => ({ ...s, isSaved: saved.has(s.id) }));

  return (
    <section className="py-16 lg:py-20 bg-muted/40">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-8 xl:px-10 2xl:px-16">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-2">Featured Scholarships</p>
            <h2 className="section-header">Closing Soon — Apply Now</h2>
            <p className="text-muted-foreground mt-2 text-sm">These scholarships are closing within 50 days. Don&apos;t miss out.</p>
          </div>
          <Link href="/scholarship-search-discovery" className="hidden sm:flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
            View all <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-5">
          {scholarships.map((sch) => (
            <ScholarshipCard key={sch.id} data={sch} onSave={handleSave} />
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link href="/scholarship-search-discovery" className="btn-outline px-8 py-3.5">
            Browse All 2,400+ Scholarships <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}