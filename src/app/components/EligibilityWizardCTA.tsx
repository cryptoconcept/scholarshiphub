import React from 'react';
import Link from 'next/link';
import { Zap, CheckCircle, ArrowRight } from 'lucide-react';

const steps = [
  'Tell us your education level & stream',
  'Share your caste category & income',
  'Get matched scholarships with % scores',
  'Apply directly from your results',
];

export default function EligibilityWizardCTA() {
  return (
    <section id="eligibility-wizard" className="py-16 lg:py-24">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-8 xl:px-10 2xl:px-16">
        <div className="gradient-primary rounded-3xl p-8 lg:p-14 flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 text-white text-sm font-semibold mb-5">
              <Zap size={14} />
              2-minute Eligibility Check
            </div>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-white leading-tight mb-4">
              Find Scholarships Made For You
            </h2>
            <p className="text-white/80 text-base leading-relaxed mb-8 max-w-lg">
              Answer 8 quick questions about your profile. Our eligibility engine matches you with scholarships you actually qualify for — with a match score and explanation.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/scholarship-search-discovery" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white text-primary font-bold text-base hover:bg-white/90 active:scale-95 transition-all duration-150">
                Start Eligibility Check
                <ArrowRight size={18} />
              </Link>
              <Link href="/scholarship-search-discovery" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/15 text-white font-semibold text-base hover:bg-white/25 transition-all duration-150 border border-white/20">
                Browse Without Profile
              </Link>
            </div>
          </div>
          <div className="flex-1 w-full max-w-md">
            <div className="glass-card rounded-2xl p-6 bg-white/10 border-white/20 backdrop-blur-sm">
              <p className="text-white font-bold text-base mb-5">How it works</p>
              <div className="flex flex-col gap-4">
                {steps?.map((step, i) => (
                  <div key={`step-${i}`} className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center shrink-0 text-white text-xs font-bold">
                      {i + 1}
                    </div>
                    <p className="text-white/90 text-sm leading-relaxed">{step}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex items-center gap-2 px-4 py-3 rounded-xl bg-white/10 border border-white/20">
                <CheckCircle size={16} className="text-green-300 shrink-0" />
                <p className="text-xs text-white/80 font-medium">Your data is private and never shared with providers without your consent.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}