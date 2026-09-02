import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import ScholarshipCard, { ScholarshipCardData } from '@/components/ui/ScholarshipCard';

const related: ScholarshipCardData[] = [
  { id: 'rel-001', title: 'Vidyasiri Post-Matric Scholarship for OBC Students', provider: 'Backward Classes Welfare Dept., Karnataka', amount: '8,500', amountType: 'Annual', deadline: '05 Oct 2026', daysLeft: 34, educationLevel: 'UG / PG', category: 'OBC', state: 'Karnataka', matchScore: 76, matchLabel: 'Good Match', isVerified: true },
  { id: 'rel-002', title: 'Dr. Ambedkar Post-Matric Scholarship for EBC', provider: 'Dept. of Social Justice, Karnataka', amount: '15,000', amountType: 'Annual', deadline: '10 Oct 2026', daysLeft: 39, educationLevel: 'UG / PG', category: 'EWS', state: 'Karnataka', matchScore: 68, matchLabel: 'Good Match', isVerified: true },
  { id: 'rel-003', title: 'NMMS National Means-cum-Merit Scholarship', provider: 'Ministry of Education, India', amount: '12,000', amountType: 'Annual', deadline: '20 Oct 2026', daysLeft: 49, educationLevel: 'Class 9-10', category: 'Merit + Income', state: 'All India', matchScore: 82, matchLabel: 'Good Match', isVerified: true },
  { id: 'rel-004', title: 'Karnataka Minority Welfare Scholarship', provider: 'Minority Welfare Dept., Karnataka', amount: '10,000', amountType: 'Annual', deadline: '25 Oct 2026', daysLeft: 54, educationLevel: 'Class 11-12', category: 'Minority', state: 'Karnataka', matchScore: 55, matchLabel: 'Possible Match', isVerified: true },
];

export default function RelatedScholarships() {
  return (
    <section className="mt-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-bold text-foreground">Related Scholarships</h2>
        <Link href="/scholarship-search-discovery" className="flex items-center gap-1 text-sm font-semibold text-primary hover:underline">
          View all <ArrowRight size={14} />
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 gap-4">
        {related.map((sch) => (
          <ScholarshipCard key={sch.id} data={sch} />
        ))}
      </div>
    </section>
  );
}