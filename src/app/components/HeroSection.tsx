'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { Search, Sparkles, ArrowRight, GraduationCap } from 'lucide-react';
import { useRouter } from 'next/navigation';

const popularSearches = [
  'SC/ST Post-Matric Scholarship', 'Karnataka Merit Scholarship', 'AICTE Pragati', 'OBC Scholarship', 'Girls Engineering Scholarship', 'Minority Scholarship'
];

export default function HeroSection() {
  const [query, setQuery] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('');
  const [selectedState, setSelectedState] = useState('Karnataka');
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/scholarship-search-discovery');
  };

  return (
    <section className="relative overflow-hidden gradient-hero pt-16 pb-20 lg:pt-24 lg:pb-28">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-16 -left-16 w-[400px] h-[400px] rounded-full bg-accent/8 blur-3xl" />
      </div>

      <div className="relative max-w-screen-2xl mx-auto px-6 lg:px-8 xl:px-10 2xl:px-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-6 animate-fade-in">
            <Sparkles size={14} />
            Karnataka&apos;s #1 Scholarship Discovery Platform
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight tracking-tight mb-6 animate-slide-up">
            Find Scholarships
            <br />
            <span className="text-gradient">You Actually Qualify For</span>
          </h1>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed animate-slide-up">
            Over 2,400 scholarships from Karnataka Government, Central Government, and private institutions — filtered to your exact profile in seconds.
          </p>

          {/* Search Box */}
          <div className="glass-card rounded-2xl p-2 shadow-card-hover max-w-3xl mx-auto animate-slide-up">
            <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-2">
              <div className="relative flex-1">
                <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search by scholarship name, category, or course..."
                  className="w-full pl-12 pr-4 py-3.5 bg-transparent text-sm font-medium text-foreground placeholder:text-muted-foreground focus:outline-none"
                />
              </div>
              <select
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
                className="px-4 py-3 rounded-xl bg-muted/50 border-0 text-sm font-semibold text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 min-w-[140px]"
              >
                <option value="">All Levels</option>
                <option value="class-10">Class 10</option>
                <option value="class-11-12">Class 11-12</option>
                <option value="diploma">Diploma</option>
                <option value="ug">Under Graduate</option>
                <option value="pg">Post Graduate</option>
              </select>
              <button type="submit" className="btn-primary px-6 py-3.5 rounded-xl text-sm font-bold">
                <Search size={16} />
                Find Scholarships
              </button>
            </form>
          </div>

          {/* Popular searches */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6 animate-fade-in">
            <span className="text-xs text-muted-foreground font-semibold">Popular:</span>
            {popularSearches.map((s) => (
              <button
                key={`search-${s}`}
                onClick={() => router.push('/scholarship-search-discovery')}
                className="text-xs px-3 py-1.5 rounded-full bg-card border border-border text-muted-foreground hover:text-primary hover:border-primary/30 hover:bg-primary/5 transition-all duration-150 font-medium"
              >
                {s}
              </button>
            ))}
          </div>

          {/* Quick eligibility CTA */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/scholarship-search-discovery" className="btn-primary px-8 py-3.5 text-base">
              <GraduationCap size={18} />
              Check My Eligibility
              <ArrowRight size={16} />
            </Link>
            <Link href="/scholarship-search-discovery" className="btn-outline px-8 py-3.5 text-base">
              Browse All Scholarships
            </Link>
          </div>
        </div>

        {/* Floating trust badges */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto">
          {[
            { label: '100% Free', sub: 'No charges ever' },
            { label: 'Direct Apply', sub: 'On-platform applications' },
            { label: 'Govt Verified', sub: 'Trusted providers only' },
            { label: 'Instant Match', sub: 'AI eligibility check' },
          ].map((badge) => (
            <div key={`badge-${badge.label}`} className="glass-card rounded-xl px-4 py-3 text-center">
              <p className="text-sm font-bold text-foreground">{badge.label}</p>
              <p className="text-xs text-muted-foreground mt-0.5">{badge.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}