'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { Heart, ExternalLink, ShieldCheck, Bell } from 'lucide-react';
import { toast } from 'sonner';

interface DetailSidebarProps {
  saved: boolean;
  onSave: () => void;
}

export default function DetailSidebar({ saved, onSave }: DetailSidebarProps) {
  const [reminderSet, setReminderSet] = useState(false);

  const handleReminder = () => {
    setReminderSet(true);
    toast.success('Deadline reminder set! We\'ll notify you 7 days before 30 Sep 2026.');
  };

  const handleApply = () => {
    toast.success('Redirecting to application form...');
  };

  return (
    <div className="flex flex-col gap-4 xl:sticky xl:top-24">
      {/* Apply Card */}
      <div className="card p-5">
        <div className="flex items-center justify-between mb-4">
          <p className="font-bold text-base text-foreground">Apply Now</p>
          <span className="badge match-excellent text-xs">94% Match</span>
        </div>

        <div className="flex flex-col gap-3 mb-5">
          <div className="flex items-center justify-between py-2.5 border-b border-border">
            <span className="text-xs text-muted-foreground font-medium">Annual Amount</span>
            <span className="text-sm font-bold text-success">₹12,000</span>
          </div>
          <div className="flex items-center justify-between py-2.5 border-b border-border">
            <span className="text-xs text-muted-foreground font-medium">Application Deadline</span>
            <span className="text-sm font-bold text-danger">30 Sep 2026</span>
          </div>
          <div className="flex items-center justify-between py-2.5 border-b border-border">
            <span className="text-xs text-muted-foreground font-medium">Days Remaining</span>
            <span className="text-sm font-bold text-foreground">29 days</span>
          </div>
          <div className="flex items-center justify-between py-2.5 border-b border-border">
            <span className="text-xs text-muted-foreground font-medium">Application Mode</span>
            <span className="text-sm font-semibold text-foreground">Online (Platform)</span>
          </div>
          <div className="flex items-center justify-between py-2.5">
            <span className="text-xs text-muted-foreground font-medium">Renewal</span>
            <span className="text-sm font-semibold text-foreground">Annual (Renewable)</span>
          </div>
        </div>

        <button onClick={handleApply} className="btn-primary w-full py-3.5 text-base mb-3">
          Apply for this Scholarship
        </button>

        <div className="flex gap-2">
          <button
            onClick={onSave}
            className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl border text-sm font-semibold transition-all duration-150 ${saved ? 'text-danger bg-danger/10 border-danger/20' : 'text-muted-foreground border-border hover:text-danger hover:bg-danger/5'}`}
          >
            <Heart size={15} fill={saved ? 'currentColor' : 'none'} />
            {saved ? 'Saved' : 'Save'}
          </button>
          <button
            onClick={handleReminder}
            className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl border text-sm font-semibold transition-all duration-150 ${reminderSet ? 'text-primary bg-primary/10 border-primary/20' : 'text-muted-foreground border-border hover:text-primary hover:bg-primary/5'}`}
          >
            <Bell size={15} />
            {reminderSet ? 'Reminder Set' : 'Remind Me'}
          </button>
        </div>
      </div>

      {/* Provider Card */}
      <div className="card p-5">
        <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-4">Scholarship Provider</p>
        <div className="flex items-start gap-3 mb-4">
          <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
            <ShieldCheck size={20} className="text-blue-600" />
          </div>
          <div>
            <p className="font-bold text-sm text-foreground">Dept. of Social Welfare</p>
            <p className="text-xs text-muted-foreground">Government of Karnataka</p>
            <div className="flex items-center gap-1 mt-1">
              <ShieldCheck size={11} className="text-success" />
              <span className="text-xs text-success font-semibold">Verified Government Body</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 text-xs text-muted-foreground">
          <div className="flex justify-between">
            <span>Active Scholarships</span>
            <span className="font-semibold text-foreground">14</span>
          </div>
          <div className="flex justify-between">
            <span>Total Disbursed</span>
            <span className="font-semibold text-foreground">₹48.2 Cr+</span>
          </div>
          <div className="flex justify-between">
            <span>Students Helped</span>
            <span className="font-semibold text-foreground">1,24,000+</span>
          </div>
        </div>
        <a href="#" className="btn-ghost w-full justify-center mt-4 text-xs gap-1">
          Visit Provider Website <ExternalLink size={12} />
        </a>
      </div>

      {/* Share */}
      <div className="card p-4">
        <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-3">Share this Scholarship</p>
        <div className="flex gap-2">
          {['WhatsApp', 'Telegram', 'Copy Link'].map((s) => (
            <button
              key={`share-${s}`}
              onClick={() => toast.success(`Link copied!`)}
              className="flex-1 py-2 rounded-xl border border-border text-xs font-semibold text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
            >
              {s}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}