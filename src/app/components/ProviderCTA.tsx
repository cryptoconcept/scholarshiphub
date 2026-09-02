import React from 'react';
import Link from 'next/link';
import { Building2, CheckCircle, ArrowRight } from 'lucide-react';

const benefits = [
  'Publish scholarships to 2.4L+ verified students',
  'Define granular eligibility criteria',
  'Receive and manage applications on-platform',
  'Built-in document collection and verification',
  'Analytics: views, applications, shortlists',
  'Verified provider badge for trust',
];

export default function ProviderCTA() {
  return (
    <section className="py-16 lg:py-20">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-8 xl:px-10 2xl:px-16">
        <div className="card p-8 lg:p-14 flex flex-col lg:flex-row items-center gap-10 border-primary/20">
          <div className="flex-1">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5">
              <Building2 size={26} className="text-primary" />
            </div>
            <h2 className="text-3xl font-extrabold text-foreground mb-3">Are You a Scholarship Provider?</h2>
            <p className="text-muted-foreground text-base leading-relaxed mb-8 max-w-lg">
              Colleges, NGOs, government departments, and private companies — publish your scholarship program and reach the right students automatically. Free to get started.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/provider-portal-dashboard" className="btn-primary px-8 py-3.5 text-base">
                Register as Provider <ArrowRight size={16} />
              </Link>
              <Link href="/provider-portal-dashboard" className="btn-outline px-8 py-3.5 text-base">
                View Provider Portal
              </Link>
            </div>
          </div>
          <div className="flex-1 w-full max-w-md">
            <div className="grid grid-cols-1 gap-3">
              {benefits?.map((b) => (
                <div key={`benefit-${b?.slice(0, 20)}`} className="flex items-start gap-3">
                  <CheckCircle size={16} className="text-success shrink-0 mt-0.5" />
                  <p className="text-sm text-foreground font-medium">{b}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}