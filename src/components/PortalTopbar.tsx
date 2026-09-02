'use client';
import React, { useState } from 'react';

import { Bell, Search, ChevronDown, Menu } from 'lucide-react';
import AppImage from '@/components/ui/AppImage';

interface PortalTopbarProps {
  variant: 'student' | 'provider' | 'admin';
  onMobileMenuOpen?: () => void;
}

const userMap = {
  student: { name: 'Priya Sharma', role: 'Student', avatar: 'https://i.pravatar.cc/40?img=47' },
  provider: { name: 'Karnataka Rajyotsava Trust', role: 'Scholarship Provider', avatar: 'https://i.pravatar.cc/40?img=12' },
  admin: { name: 'Rahul Verma', role: 'Platform Admin', avatar: 'https://i.pravatar.cc/40?img=8' },
};

export default function PortalTopbar({ variant, onMobileMenuOpen }: PortalTopbarProps) {
  const [notifOpen, setNotifOpen] = useState(false);
  const user = userMap[variant];

  return (
    <header className="h-16 bg-card border-b border-border flex items-center justify-between px-6 gap-4 sticky top-0 z-30">
      {/* Mobile menu */}
      <button
        onClick={onMobileMenuOpen}
        className="lg:hidden p-2 rounded-xl hover:bg-muted transition-colors"
        aria-label="Open menu"
      >
        <Menu size={20} />
      </button>

      {/* Search */}
      <div className="hidden md:flex items-center gap-2 flex-1 max-w-md">
        <div className="relative w-full">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search scholarships..."
            className="input-field pl-9 py-2 text-sm"
          />
        </div>
      </div>

      {/* Right actions */}
      <div className="flex items-center gap-3 ml-auto">
        {/* Notifications */}
        <div className="relative">
          <button
            onClick={() => setNotifOpen(!notifOpen)}
            className="relative p-2 rounded-xl hover:bg-muted transition-colors"
            aria-label="Notifications"
          >
            <Bell size={18} className="text-muted-foreground" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-danger" />
          </button>
          {notifOpen && (
            <div className="absolute right-0 top-full mt-2 w-80 card shadow-dropdown animate-scale-in z-50">
              <div className="p-4 border-b border-border">
                <p className="font-semibold text-sm">Notifications</p>
              </div>
              <div className="max-h-64 overflow-y-auto">
                {[
                  { text: 'Your application for Karnataka Merit Scholarship was shortlisted', time: '2h ago', dot: 'bg-success' },
                  { text: 'Deadline approaching: Post-Matric SC/ST Scholarship — 5 days left', time: '4h ago', dot: 'bg-warning' },
                  { text: 'Document requested for AICTE Pragati Scholarship application', time: '1d ago', dot: 'bg-info' },
                ].map((n, i) => (
                  <div key={`notif-${i}`} className="px-4 py-3 border-b border-border last:border-0 hover:bg-muted/50 cursor-pointer">
                    <div className="flex gap-3">
                      <div className={`w-2 h-2 rounded-full mt-1.5 shrink-0 ${n.dot}`} />
                      <div>
                        <p className="text-xs text-foreground leading-relaxed">{n.text}</p>
                        <p className="text-xs text-muted-foreground mt-1">{n.time}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-3 border-t border-border">
                <button className="text-xs font-semibold text-primary hover:underline w-full text-center">View all notifications</button>
              </div>
            </div>
          )}
        </div>

        {/* User */}
        <div className="flex items-center gap-2.5 cursor-pointer group">
          <AppImage
            src={user.avatar}
            alt={`${user.name} avatar`}
            width={36}
            height={36}
            className="w-9 h-9 rounded-full ring-2 ring-border object-cover"
          />
          <div className="hidden md:block">
            <p className="text-sm font-semibold text-foreground leading-none">{user.name}</p>
            <p className="text-xs text-muted-foreground mt-0.5">{user.role}</p>
          </div>
          <ChevronDown size={14} className="text-muted-foreground hidden md:block" />
        </div>
      </div>
    </header>
  );
}