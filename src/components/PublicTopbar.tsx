'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';
import { Menu, X, Search } from 'lucide-react';

const navLinks = [
  { label: 'Scholarships', href: '/scholarship-search-discovery' },
  { label: 'Eligibility Wizard', href: '#eligibility-wizard' },
  { label: 'For Providers', href: '/provider-portal-dashboard' },
  { label: 'Admin', href: '/admin-portal-dashboard' },
];

export default function PublicTopbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-card/80 backdrop-blur-md border-b border-border">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-8 xl:px-10 h-16 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 shrink-0">
          <AppLogo size={36} />
          <span className="font-extrabold text-lg text-foreground tracking-tight hidden sm:block">
            ScholarshipHub
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks?.map((link) => (
            <Link
              key={`nav-${link?.label}`}
              href={link?.href}
              className="px-4 py-2 rounded-xl text-sm font-semibold text-muted-foreground hover:text-foreground hover:bg-muted transition-all duration-150"
            >
              {link?.label}
            </Link>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="hidden lg:flex items-center gap-3">
          <Link href="/scholarship-search-discovery" className="btn-ghost">
            <Search size={16} />
            Search
          </Link>
          <Link href="/student-dashboard" className="btn-outline text-sm">
            Sign In
          </Link>
          <Link href="/student-dashboard" className="btn-primary text-sm">
            Register Free
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 rounded-xl hover:bg-muted transition-colors"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-border bg-card animate-fade-in">
          <div className="px-6 py-4 flex flex-col gap-1">
            {navLinks?.map((link) => (
              <Link
                key={`mobile-nav-${link?.label}`}
                href={link?.href}
                onClick={() => setMobileOpen(false)}
                className="px-4 py-3 rounded-xl text-sm font-semibold text-muted-foreground hover:text-foreground hover:bg-muted transition-all duration-150"
              >
                {link?.label}
              </Link>
            ))}
            <div className="pt-3 border-t border-border flex flex-col gap-2 mt-2">
              <Link href="/student-dashboard" className="btn-outline w-full justify-center">
                Sign In
              </Link>
              <Link href="/student-dashboard" className="btn-primary w-full justify-center">
                Register Free
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}