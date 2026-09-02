import React from 'react';
import Link from 'next/link';
import { Users, Heart, Star, Accessibility, Baby, Home, Wallet, ArrowRight } from 'lucide-react';

const categories = [
  { id: 'merit', label: 'Merit-based', count: '342 scholarships', icon: <Star size={22} />, color: 'bg-amber-50 text-amber-600 border-amber-200', desc: 'For students with 60%+ marks' },
  { id: 'sc-st', label: 'SC / ST', count: '518 scholarships', icon: <Users size={22} />, color: 'bg-blue-50 text-blue-600 border-blue-200', desc: 'Scheduled Caste & Tribe' },
  { id: 'obc', label: 'OBC', count: '287 scholarships', icon: <Users size={22} />, color: 'bg-indigo-50 text-indigo-600 border-indigo-200', desc: 'Other Backward Classes' },
  { id: 'minority', label: 'Minority', count: '196 scholarships', icon: <Heart size={22} />, color: 'bg-rose-50 text-rose-600 border-rose-200', desc: 'Minority communities' },
  { id: 'girl-child', label: 'Girl Child', count: '231 scholarships', icon: <Baby size={22} />, color: 'bg-pink-50 text-pink-600 border-pink-200', desc: 'Exclusively for girls' },
  { id: 'disability', label: 'Disability', count: '124 scholarships', icon: <Accessibility size={22} />, color: 'bg-purple-50 text-purple-600 border-purple-200', desc: 'PwD category students' },
  { id: 'rural', label: 'Rural Students', count: '178 scholarships', icon: <Home size={22} />, color: 'bg-green-50 text-green-600 border-green-200', desc: 'From rural Karnataka' },
  { id: 'income', label: 'Income-based', count: '412 scholarships', icon: <Wallet size={22} />, color: 'bg-orange-50 text-orange-600 border-orange-200', desc: 'Family income below ₹2.5L' },
];

export default function CategoriesSection() {
  return (
    <section className="py-16 lg:py-20">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-8 xl:px-10 2xl:px-16">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-2">Scholarship Categories</p>
            <h2 className="section-header">Find Your Category</h2>
            <p className="text-muted-foreground mt-2 text-sm max-w-lg">Every student deserves support. Browse scholarships tailored to your background and eligibility.</p>
          </div>
          <Link href="/scholarship-search-discovery" className="hidden sm:flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
            View all <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 gap-4">
          {categories?.map((cat) => (
            <Link
              key={`cat-${cat?.id}`}
              href="/scholarship-search-discovery"
              className="card-hover p-5 flex flex-col gap-3 group cursor-pointer"
            >
              <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center ${cat?.color} group-hover:scale-110 transition-transform duration-200`}>
                {cat?.icon}
              </div>
              <div>
                <p className="font-bold text-sm text-foreground">{cat?.label}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{cat?.desc}</p>
              </div>
              <p className="text-xs font-semibold text-primary">{cat?.count}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}