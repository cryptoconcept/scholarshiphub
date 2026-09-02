import React from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';

const footerLinks = {
  'For Students': [
    { label: 'Find Scholarships', href: '/scholarship-search-discovery' },
    { label: 'Eligibility Wizard', href: '/#eligibility-wizard' },
    { label: 'Student Dashboard', href: '/student-dashboard' },
    { label: 'Scholarship Categories', href: '/scholarship-search-discovery' },
  ],
  'For Providers': [
    { label: 'Provider Portal', href: '/provider-portal-dashboard' },
    { label: 'Publish a Scholarship', href: '/provider-portal-dashboard' },
    { label: 'Pricing', href: '#' },
    { label: 'Provider Verification', href: '/provider-portal-dashboard' },
  ],
  'Platform': [
    { label: 'About ScholarshipHub', href: '#' },
    { label: 'How It Works', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Admin Portal', href: '/admin-portal-dashboard' },
  ],
  'Karnataka': [
    { label: 'Karnataka Scholarships', href: '/scholarship-search-discovery' },
    { label: 'SC/ST Scholarships', href: '/scholarship-search-discovery' },
    { label: 'OBC Scholarships', href: '/scholarship-search-discovery' },
    { label: 'Merit Scholarships', href: '/scholarship-search-discovery' },
  ],
};

export default function LandingFooter() {
  return (
    <footer className="bg-foreground text-white/80">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-8 xl:px-10 2xl:px-16 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-5 gap-8 lg:gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <AppLogo size={32} />
              <span className="font-extrabold text-lg text-white">ScholarshipHub</span>
            </div>
            <p className="text-sm leading-relaxed text-white/60 mb-4">
              India&apos;s most trusted scholarship discovery platform. Karnataka-first, India-wide.
            </p>
            <p className="text-xs text-white/40">© 2026 ScholarshipHub. All rights reserved.</p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks)?.map(([group, links]) => (
            <div key={`footer-group-${group}`}>
              <p className="text-xs font-bold text-white uppercase tracking-widest mb-4">{group}</p>
              <ul className="flex flex-col gap-2.5">
                {links?.map((link) => (
                  <li key={`footer-link-${link?.label}`}>
                    <Link href={link?.href} className="text-sm text-white/60 hover:text-white transition-colors duration-150">
                      {link?.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 mt-10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">Built for students of Karnataka. Expanding across India.</p>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-xs text-white/40 hover:text-white/60 transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-xs text-white/40 hover:text-white/60 transition-colors">Terms of Service</Link>
            <Link href="#" className="text-xs text-white/40 hover:text-white/60 transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}