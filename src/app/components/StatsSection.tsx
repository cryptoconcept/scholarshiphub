import React from 'react';

const stats = [
  { value: '2,47,000+', label: 'Students Helped', sub: 'Across Karnataka' },
  { value: '2,400+', label: 'Scholarships Listed', sub: 'Govt + Private' },
  { value: '₹342 Cr+', label: 'Disbursed Value', sub: 'Tracked on platform' },
  { value: '180+', label: 'Verified Providers', sub: 'Institutions & NGOs' },
];

export default function StatsSection() {
  return (
    <section className="py-12 bg-primary">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-8 xl:px-10 2xl:px-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats?.map((stat) => (
            <div key={`stat-${stat?.label}`} className="text-center">
              <p className="text-3xl lg:text-4xl font-extrabold text-white tabular-nums">{stat?.value}</p>
              <p className="text-sm font-semibold text-white/90 mt-1">{stat?.label}</p>
              <p className="text-xs text-white/60 mt-0.5">{stat?.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}