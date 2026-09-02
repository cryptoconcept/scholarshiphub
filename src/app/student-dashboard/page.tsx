import React from 'react';
import PortalSidebar from '@/components/PortalSidebar';
import PortalTopbar from '@/components/PortalTopbar';
import StudentDashboardContent from '@/app/student-dashboard/components/StudentDashboardContent';

export default function StudentDashboardPage() {
  return (
    <div className="min-h-screen bg-background flex">
      <PortalSidebar variant="student" />
      <div className="flex-1 flex flex-col lg:ml-60 min-w-0">
        <PortalTopbar variant="student" />
        <main className="flex-1 p-6 lg:p-8 xl:p-10 max-w-screen-2xl w-full">
          <StudentDashboardContent />
        </main>
      </div>
    </div>
  );
}