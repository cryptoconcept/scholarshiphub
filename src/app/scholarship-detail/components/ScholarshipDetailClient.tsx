'use client';
import React, { useState } from 'react';
import DetailHero from './DetailHero';
import DetailTabs from './DetailTabs';
import DetailSidebar from './DetailSidebar';
import RelatedScholarships from './RelatedScholarships';

export default function ScholarshipDetailClient() {
  const [saved, setSaved] = useState(false);

  return (
    <div className="max-w-screen-2xl mx-auto px-4 lg:px-8 xl:px-10 2xl:px-16 py-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs text-muted-foreground mb-6 flex-wrap">
        <a href="/" className="hover:text-primary transition-colors">Home</a>
        <span>/</span>
        <a href="/scholarship-search-discovery" className="hover:text-primary transition-colors">Scholarships</a>
        <span>/</span>
        <a href="/scholarship-search-discovery" className="hover:text-primary transition-colors">Karnataka</a>
        <span>/</span>
        <span className="text-foreground font-medium truncate max-w-[200px]">Karnataka Rajyotsava Scholarship for SC/ST</span>
      </nav>

      <div className="flex flex-col xl:flex-row gap-8">
        {/* Main Content */}
        <div className="flex-1 min-w-0">
          <DetailHero saved={saved} onSave={() => setSaved(!saved)} />
          <DetailTabs />
        </div>

        {/* Sidebar */}
        <aside className="w-full xl:w-80 2xl:w-96 shrink-0">
          <DetailSidebar saved={saved} onSave={() => setSaved(!saved)} />
        </aside>
      </div>

      {/* Related */}
      <RelatedScholarships />
    </div>
  );
}