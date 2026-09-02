'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import AppLogo from '@/components/ui/AppLogo';
import {
  LayoutDashboard, Search, BookOpen, FileText, Heart, Bell,
  User, Settings, ChevronLeft, ChevronRight, GraduationCap,
  Building2, Users, ShieldCheck, BarChart3, Flag, Tags,
  LogOut, HelpCircle, Award
} from 'lucide-react';

interface NavItem {
  label: string;
  href: string;
  icon: React.ReactNode;
  badge?: number;
}

interface NavGroup {
  title?: string;
  items: NavItem[];
}

const studentNav: NavGroup[] = [
  {
    items: [
      { label: 'Dashboard', href: '/student-dashboard', icon: <LayoutDashboard size={18} /> },
      { label: 'Discover', href: '/scholarship-search-discovery', icon: <Search size={18} /> },
      { label: 'My Applications', href: '/student-dashboard', icon: <FileText size={18} />, badge: 3 },
      { label: 'Saved', href: '/student-dashboard', icon: <Heart size={18} />, badge: 7 },
    ],
  },
  {
    title: 'Profile',
    items: [
      { label: 'My Profile', href: '/student-dashboard', icon: <User size={18} /> },
      { label: 'Documents', href: '/student-dashboard', icon: <BookOpen size={18} /> },
      { label: 'Notifications', href: '/student-dashboard', icon: <Bell size={18} />, badge: 5 },
    ],
  },
];

const providerNav: NavGroup[] = [
  {
    items: [
      { label: 'Dashboard', href: '/provider-portal-dashboard', icon: <LayoutDashboard size={18} /> },
      { label: 'My Scholarships', href: '/provider-portal-dashboard', icon: <Award size={18} /> },
      { label: 'Applications', href: '/provider-portal-dashboard', icon: <FileText size={18} />, badge: 12 },
      { label: 'Analytics', href: '/provider-portal-dashboard', icon: <BarChart3 size={18} /> },
    ],
  },
  {
    title: 'Account',
    items: [
      { label: 'Org Profile', href: '/provider-portal-dashboard', icon: <Building2 size={18} /> },
      { label: 'Settings', href: '/provider-portal-dashboard', icon: <Settings size={18} /> },
    ],
  },
];

const adminNav: NavGroup[] = [
  {
    items: [
      { label: 'Dashboard', href: '/admin-portal-dashboard', icon: <LayoutDashboard size={18} /> },
      { label: 'Provider Verification', href: '/admin-portal-dashboard', icon: <ShieldCheck size={18} />, badge: 8 },
      { label: 'Scholarship Review', href: '/admin-portal-dashboard', icon: <Award size={18} />, badge: 14 },
      { label: 'Students', href: '/admin-portal-dashboard', icon: <GraduationCap size={18} /> },
      { label: 'Providers', href: '/admin-portal-dashboard', icon: <Building2 size={18} /> },
      { label: 'Applications', href: '/admin-portal-dashboard', icon: <FileText size={18} /> },
    ],
  },
  {
    title: 'Management',
    items: [
      { label: 'Categories', href: '/admin-portal-dashboard', icon: <Tags size={18} /> },
      { label: 'Reports', href: '/admin-portal-dashboard', icon: <Flag size={18} />, badge: 6 },
      { label: 'Analytics', href: '/admin-portal-dashboard', icon: <BarChart3 size={18} /> },
      { label: 'Users', href: '/admin-portal-dashboard', icon: <Users size={18} /> },
    ],
  },
];

interface PortalSidebarProps {
  variant: 'student' | 'provider' | 'admin';
}

export default function PortalSidebar({ variant }: PortalSidebarProps) {
  const [collapsed, setCollapsed] = useState(false);
  const pathname = usePathname();

  const navGroups = variant === 'student' ? studentNav : variant === 'provider' ? providerNav : adminNav;
  const portalLabel = variant === 'student' ? 'Student Portal' : variant === 'provider' ? 'Provider Portal' : 'Admin Portal';
  const portalColor = variant === 'admin' ? 'text-danger' : variant === 'provider' ? 'text-success' : 'text-primary';

  return (
    <aside
      className={`fixed left-0 top-0 h-full bg-card border-r border-border z-40 sidebar-transition flex flex-col ${
        collapsed ? 'w-16' : 'w-60'
      } hidden lg:flex`}
    >
      {/* Logo */}
      <div className={`h-16 flex items-center border-b border-border shrink-0 ${collapsed ? 'justify-center px-0' : 'px-4 gap-2.5'}`}>
        <Link href="/" className="flex items-center gap-2.5">
          <AppLogo size={32} />
          {!collapsed && (
            <div>
              <div className="font-extrabold text-sm text-foreground tracking-tight leading-none">ScholarshipHub</div>
              <div className={`text-xs font-semibold ${portalColor} mt-0.5`}>{portalLabel}</div>
            </div>
          )}
        </Link>
      </div>

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto scrollbar-hide py-3 px-2">
        {navGroups.map((group, gi) => (
          <div key={`group-${gi}`} className={gi > 0 ? 'mt-4' : ''}>
            {group.title && !collapsed && (
              <p className="px-3 mb-1 text-xs font-semibold text-muted-foreground uppercase tracking-widest">{group.title}</p>
            )}
            {group.items.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={`nav-item-${item.label}`}
                  href={item.href}
                  title={collapsed ? item.label : undefined}
                  className={`${isActive ? 'nav-item-active' : 'nav-item'} mb-0.5 relative group`}
                >
                  <span className="shrink-0">{item.icon}</span>
                  {!collapsed && <span className="flex-1 truncate">{item.label}</span>}
                  {!collapsed && item.badge && (
                    <span className="ml-auto px-1.5 py-0.5 rounded-full text-xs font-bold bg-primary/10 text-primary min-w-[20px] text-center">
                      {item.badge}
                    </span>
                  )}
                  {collapsed && item.badge && (
                    <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-primary" />
                  )}
                  {collapsed && (
                    <div className="absolute left-full ml-2 px-2.5 py-1.5 rounded-lg bg-foreground text-background text-xs font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-dropdown z-50">
                      {item.label}
                    </div>
                  )}
                </Link>
              );
            })}
          </div>
        ))}
      </nav>

      {/* Bottom */}
      <div className="border-t border-border p-2 shrink-0">
        <button className={`nav-item w-full ${collapsed ? 'justify-center' : ''}`} title={collapsed ? 'Help' : undefined}>
          <HelpCircle size={18} />
          {!collapsed && <span>Help & Support</span>}
        </button>
        <button className={`nav-item w-full text-danger hover:text-danger hover:bg-danger/5 ${collapsed ? 'justify-center' : ''}`} title={collapsed ? 'Sign Out' : undefined}>
          <LogOut size={18} />
          {!collapsed && <span>Sign Out</span>}
        </button>
      </div>

      {/* Collapse Toggle */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="absolute -right-3 top-20 w-6 h-6 rounded-full bg-card border border-border shadow-card flex items-center justify-center hover:bg-muted transition-colors z-50"
        aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
      >
        {collapsed ? <ChevronRight size={12} /> : <ChevronLeft size={12} />}
      </button>
    </aside>
  );
}