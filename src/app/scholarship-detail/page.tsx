import React from 'react';
import PublicTopbar from '@/components/PublicTopbar';
import ScholarshipDetailClient from '@/app/scholarship-detail/components/ScholarshipDetailClient';

export default function ScholarshipDetailPage() {
  return (
    <div className="min-h-screen bg-background">
      <PublicTopbar />
      <ScholarshipDetailClient />
    </div>
  );
}