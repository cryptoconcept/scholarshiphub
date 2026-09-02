import React from 'react';
import AppImage from '@/components/ui/AppImage';
import { Star } from 'lucide-react';

const testimonials = [
  { id: 'test-001', name: 'Kavya Reddy', role: 'B.Tech CSE, 2nd Year', college: 'RVCE Bangalore', avatar: 'https://i.pravatar.cc/80?img=44', text: 'ScholarshipHub showed me 14 scholarships I was eligible for. I applied for 3 and got the AICTE Pragati scholarship within 2 months. The match score feature is incredibly accurate.', amount: '₹50,000', scholarship: 'AICTE Pragati Scholarship', stars: 5 },
  { id: 'test-002', name: 'Mohammed Irfan', role: 'M.Com 1st Year', college: 'Mysore University', avatar: 'https://i.pravatar.cc/80?img=11', text: 'As a minority student from a low-income family, I had no idea so many scholarships existed. The eligibility wizard matched me with 9 scholarships in 3 minutes. Got 2 approved this year.', amount: '₹25,000', scholarship: 'Maulana Azad Fellowship', stars: 5 },
  { id: 'test-003', name: 'Sunitha Gowda', role: 'Class 12, Science', college: 'Govt PU College, Tumkur', avatar: 'https://i.pravatar.cc/80?img=36', text: 'I am an SC student from a rural background. Found the Karnataka Rajyotsava scholarship here that my school counsellor never told me about. The deadline reminder saved me from missing it.', amount: '₹12,000', scholarship: 'Karnataka Rajyotsava Scholarship', stars: 5 },
];

export default function TestimonialsSection() {
  return (
    <section className="py-16 lg:py-20 bg-muted/40">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-8 xl:px-10 2xl:px-16">
        <div className="text-center mb-12">
          <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-2">Student Success Stories</p>
          <h2 className="section-header">Real Students. Real Scholarships.</h2>
          <p className="text-muted-foreground mt-3 text-sm max-w-xl mx-auto">Over 2.4 lakh students across Karnataka have used ScholarshipHub to discover and apply for scholarships.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-6">
          {testimonials?.map((t) => (
            <div key={t?.id} className="card p-6 flex flex-col gap-4">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: t?.stars })?.map((_, si) => (
                  <Star key={`star-${t?.id}-${si}`} size={14} className="text-accent fill-accent" />
                ))}
              </div>
              <p className="text-sm text-foreground leading-relaxed flex-1">&ldquo;{t?.text}&rdquo;</p>
              <div className="px-3 py-2.5 rounded-xl bg-success/10 border border-success/20">
                <p className="text-xs text-success font-semibold">Won {t?.amount} — {t?.scholarship}</p>
              </div>
              <div className="flex items-center gap-3 pt-2 border-t border-border">
                <AppImage src={t?.avatar} alt={`${t?.name} photo`} width={40} height={40} className="w-10 h-10 rounded-full object-cover" />
                <div>
                  <p className="text-sm font-semibold text-foreground">{t?.name}</p>
                  <p className="text-xs text-muted-foreground">{t?.role} · {t?.college}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}