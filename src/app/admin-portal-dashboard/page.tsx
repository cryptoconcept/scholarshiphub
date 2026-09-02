import React from 'react';
import PortalSidebar from '@/components/PortalSidebar';
import PortalTopbar from '@/components/PortalTopbar';
import AdminDashboardContent from '@/app/admin-portal-dashboard/components/AdminDashboardContent';

export default function AdminPortalPage() {
  return (
    <div className="min-h-screen bg-background flex">
      <PortalSidebar variant="admin" />
      <div className="flex-1 flex flex-col lg:ml-60 min-w-0">
        <PortalTopbar variant="admin" />
        <main className="flex-1 p-6 lg:p-8 xl:p-10 max-w-screen-2xl w-full">
          <AdminDashboardContent />
        </main>
      </div>
    </div>
  );
}