import React from 'react';
import AdminKPICards from './AdminKPICards';
import AdminCharts from './AdminCharts';
import ProviderVerificationQueue from './ProviderVerificationQueue';
import ScholarshipApprovalQueue from './ScholarshipApprovalQueue';
import ReportsQueue from './ReportsQueue';
import AdminActivityLog from './AdminActivityLog';

export default function AdminDashboardContent() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-start justify-between gap-4 flex-wrap">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Admin Dashboard</h1>
          <p className="text-sm text-muted-foreground mt-1">Platform overview — 8 providers awaiting verification, 14 scholarships pending approval</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-muted-foreground">Last updated:</span>
          <span className="text-xs font-semibold text-foreground">01 Sep 2026, 01:44</span>
          <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
        </div>
      </div>

      <AdminKPICards />
      <AdminCharts />

      <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-2 gap-6">
        <ProviderVerificationQueue />
        <ScholarshipApprovalQueue />
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-2 gap-6">
        <ReportsQueue />
        <AdminActivityLog />
      </div>
    </div>
  );
}