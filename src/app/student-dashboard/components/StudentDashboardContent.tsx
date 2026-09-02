import React from 'react';
import ProfileCompletionBanner from './ProfileCompletionBanner';
import StudentKPICards from './StudentKPICards';
import RecommendedScholarships from './RecommendedScholarships';
import ApplicationsTable from './ApplicationsTable';
import SavedScholarshipsPanel from './SavedScholarshipsPanel';
import DocumentStatusGrid from './DocumentStatusGrid';
import NotificationFeed from './NotificationFeed';

export default function StudentDashboardContent() {
  return (
    <div className="flex flex-col gap-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-foreground">Good morning, Priya 👋</h1>
        <p className="text-sm text-muted-foreground mt-1">You have 3 applications under review and 2 scholarships closing this week.</p>
      </div>

      <ProfileCompletionBanner />
      <StudentKPICards />

      <div className="grid grid-cols-1 xl:grid-cols-3 2xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2">
          <RecommendedScholarships />
        </div>
        <div>
          <NotificationFeed />
        </div>
      </div>

      <ApplicationsTable />

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-6">
        <SavedScholarshipsPanel />
        <DocumentStatusGrid />
      </div>
    </div>
  );
}