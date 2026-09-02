'use client';
import React from 'react';
import { Heart, Share2, Flag, ShieldCheck, Calendar, IndianRupee, Users, MapPin, Clock } from 'lucide-react';
import StatusBadge from '@/components/ui/StatusBadge';
import AppImage from '@/components/ui/AppImage';

interface DetailHeroProps {
  saved: boolean;
  onSave: () => void;
}

export default function DetailHero({ saved, onSave }: DetailHeroProps) {
  return (
    <div className="card p-6 lg:p-8 mb-6">
      <div className="flex items-start justify-between gap-4 flex-wrap mb-6">
        <div className="flex items-start gap-4">
          <div className="w-16 h-16 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center shrink-0 overflow-hidden">
            <AppImage
              src="https://i.pravatar.cc/64?img=50"
              alt="Dept. of Social Welfare Karnataka logo"
              width={64}
              height={64}
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
          <div>
            <div className="flex items-center gap-2 flex-wrap mb-1">
              <StatusBadge status="Published" />
              <span className="badge match-excellent">94% — Excellent Match</span>
            </div>
            <h1 className="text-xl lg:text-2xl font-extrabold text-foreground leading-snug mt-2">
              Karnataka Rajyotsava Scholarship for SC/ST Students
            </h1>
            <div className="flex items-center gap-2 mt-2">
              <ShieldCheck size={14} className="text-success" />
              <span className="text-sm text-muted-foreground">Dept. of Social Welfare, Government of Karnataka</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={onSave}
            className={`p-2.5 rounded-xl border transition-all duration-150 ${saved ? 'text-danger bg-danger/10 border-danger/20' : 'text-muted-foreground border-border hover:text-danger hover:bg-danger/5'}`}
            aria-label={saved ? 'Unsave scholarship' : 'Save scholarship'}
          >
            <Heart size={18} fill={saved ? 'currentColor' : 'none'} />
          </button>
          <button className="p-2.5 rounded-xl border border-border text-muted-foreground hover:bg-muted transition-colors" aria-label="Share scholarship">
            <Share2 size={18} />
          </button>
          <button className="p-2.5 rounded-xl border border-border text-muted-foreground hover:text-danger hover:bg-danger/5 transition-colors" aria-label="Report scholarship">
            <Flag size={16} />
          </button>
        </div>
      </div>

      {/* Quick stats row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {[
          { icon: <IndianRupee size={16} className="text-success" />, label: 'Annual Amount', value: '₹12,000', sub: 'Per year' },
          { icon: <Calendar size={16} className="text-danger" />, label: 'Application Deadline', value: '30 Sep 2026', sub: '29 days left' },
          { icon: <Users size={16} className="text-primary" />, label: 'Seats Available', value: '5,000+', sub: 'Karnataka-wide' },
          { icon: <MapPin size={16} className="text-accent" />, label: 'Eligibility', value: 'Karnataka', sub: 'SC/ST Only' },
        ].map((stat) => (
          <div key={`stat-${stat.label}`} className="flex items-start gap-3 p-3 rounded-xl bg-muted/50">
            <div className="w-8 h-8 rounded-lg bg-card flex items-center justify-center shrink-0">
              {stat.icon}
            </div>
            <div>
              <p className="text-xs text-muted-foreground font-medium">{stat.label}</p>
              <p className="text-sm font-bold text-foreground mt-0.5">{stat.value}</p>
              <p className="text-xs text-muted-foreground">{stat.sub}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Last verified */}
      <div className="flex items-center gap-2 mt-5 pt-5 border-t border-border">
        <Clock size={13} className="text-muted-foreground" />
        <p className="text-xs text-muted-foreground">Last verified by ScholarshipHub team on <span className="font-semibold text-foreground">18 Aug 2026</span></p>
        <span className="ml-auto text-xs text-muted-foreground">Scholarship ID: <span className="font-mono font-semibold text-foreground">SCH-KA-0042</span></span>
      </div>
    </div>
  );
}