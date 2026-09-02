import React from 'react';
import PortalSidebar from '@/components/PortalSidebar';
import PortalTopbar from '@/components/PortalTopbar';
import ProviderDashboardContent from '@/app/provider-portal-dashboard/components/ProviderDashboardContent';

export default function ProviderPortalPage() {
  return (
    <div className="min-h-screen bg-background flex">
      <PortalSidebar variant="provider" />
      <div className="flex-1 flex flex-col lg:ml-60 min-w-0">
        <PortalTopbar variant="provider" />
        <main className="flex-1 p-6 lg:p-8 xl:p-10 max-w-screen-2xl w-full">
          <ProviderDashboardContent />
        </main>
      </div>
    </div>
  );
}