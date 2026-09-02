import React from 'react';
import PublicTopbar from '@/components/PublicTopbar';
import SearchDiscoveryClient from '@/app/scholarship-search-discovery/components/SearchDiscoveryClient';

export default function ScholarshipSearchPage() {
  return (
    <div className="min-h-screen bg-background">
      <PublicTopbar />
      <SearchDiscoveryClient />
    </div>
  );
}