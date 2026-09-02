import React from 'react';
import VerificationBanner from './VerificationBanner';
import ProviderKPICards from './ProviderKPICards';
import ProviderCharts from './ProviderCharts';
import ProviderScholarshipsTable from './ProviderScholarshipsTable';
import ProviderApplicationsTable from './ProviderApplicationsTable';

export default function ProviderDashboardContent() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-start justify-between gap-4 flex-wrap">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Provider Dashboard</h1>
          <p className="text-sm text-muted-foreground mt-1">Karnataka Rajyotsava Trust — manage your scholarships and applicants</p>
        </div>
        <button className="btn-primary text-sm">
          + Publish New Scholarship
        </button>
      </div>

      <VerificationBanner />
      <ProviderKPICards />
      <ProviderCharts />
      <ProviderScholarshipsTable />
      <ProviderApplicationsTable />
    </div>
  );
}