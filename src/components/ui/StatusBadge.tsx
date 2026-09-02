import React from 'react';

type ApplicationStatus = 'Draft' | 'Submitted' | 'Under Review' | 'Shortlisted' | 'Additional Info Required' | 'Approved' | 'Rejected' | 'Withdrawn';
type ProviderStatus = 'Unverified' | 'Verification Pending' | 'Verified' | 'Rejected' | 'Suspended';
type ScholarshipStatus = 'Draft' | 'Pending Approval' | 'Published' | 'Closing Soon' | 'Closed' | 'Suspended';

type StatusType = ApplicationStatus | ProviderStatus | ScholarshipStatus;

const statusClassMap: Record<string, string> = {
  'Draft': 'status-draft',
  'Submitted': 'status-submitted',
  'Under Review': 'status-under-review',
  'Shortlisted': 'status-shortlisted',
  'Approved': 'status-approved',
  'Rejected': 'status-rejected',
  'Withdrawn': 'status-withdrawn',
  'Additional Info Required': 'status-additional-info',
  'Unverified': 'provider-unverified',
  'Verification Pending': 'provider-pending',
  'Verified': 'provider-verified',
  'Suspended': 'provider-suspended',
  'Pending Approval': 'status-under-review',
  'Published': 'status-approved',
  'Closing Soon': 'status-additional-info',
  'Closed': 'status-withdrawn',
};

export default function StatusBadge({ status }: { status: string }) {
  const cls = statusClassMap[status] || 'status-draft';
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ${cls}`}>
      {status}
    </span>
  );
}