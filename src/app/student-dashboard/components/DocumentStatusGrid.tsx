'use client';
import React from 'react';
import { Upload, CheckCircle, AlertCircle, Clock, XCircle } from 'lucide-react';
import { toast } from 'sonner';

type DocStatus = 'Uploaded' | 'Verified' | 'Rejected' | 'Needs Replacement' | 'Missing';

interface DocumentItem {
  id: string;
  name: string;
  status: DocStatus;
  updatedOn?: string;
}

const documents: DocumentItem[] = [
  { id: 'doc-001', name: 'Aadhaar Card', status: 'Verified', updatedOn: '10 Aug 2026' },
  { id: 'doc-002', name: 'Caste Certificate', status: 'Missing' },
  { id: 'doc-003', name: 'Income Certificate', status: 'Verified', updatedOn: '08 Aug 2026' },
  { id: 'doc-004', name: '10th Marksheet', status: 'Verified', updatedOn: '05 Aug 2026' },
  { id: 'doc-005', name: '12th Marksheet', status: 'Uploaded', updatedOn: '15 Aug 2026' },
  { id: 'doc-006', name: 'Bank Passbook', status: 'Rejected', updatedOn: '12 Aug 2026' },
  { id: 'doc-007', name: 'Bonafide Certificate', status: 'Needs Replacement', updatedOn: '01 Aug 2026' },
  { id: 'doc-008', name: 'Passport Photo', status: 'Verified', updatedOn: '05 Aug 2026' },
];

const statusConfig: Record<DocStatus, { icon: React.ReactNode; className: string; label: string }> = {
  Verified: { icon: <CheckCircle size={14} />, className: 'text-success bg-success/10 border-success/20', label: 'Verified' },
  Uploaded: { icon: <Clock size={14} />, className: 'text-info bg-info/10 border-info/20', label: 'Uploaded' },
  Rejected: { icon: <XCircle size={14} />, className: 'text-danger bg-danger/10 border-danger/20', label: 'Rejected' },
  'Needs Replacement': { icon: <AlertCircle size={14} />, className: 'text-warning bg-warning/10 border-warning/20', label: 'Replace' },
  Missing: { icon: <Upload size={14} />, className: 'text-muted-foreground bg-muted border-border', label: 'Upload' },
};

export default function DocumentStatusGrid() {
  return (
    <div className="card">
      <div className="flex items-center justify-between px-5 py-4 border-b border-border">
        <h2 className="text-sm font-bold text-foreground">Document Locker</h2>
        <span className="text-xs text-muted-foreground">
          {documents.filter((d) => d.status === 'Verified').length}/{documents.length} verified
        </span>
      </div>
      <div className="p-4 grid grid-cols-2 gap-3">
        {documents.map((doc) => {
          const config = statusConfig[doc.status];
          const needsAction = doc.status === 'Missing' || doc.status === 'Rejected' || doc.status === 'Needs Replacement';
          return (
            <button
              key={doc.id}
              onClick={() => needsAction && toast.info(`Upload ${doc.name} to your document locker`)}
              className={`flex items-start gap-2.5 p-3 rounded-xl border transition-all duration-150 text-left ${config.className} ${needsAction ? 'cursor-pointer hover:opacity-80' : 'cursor-default'}`}
            >
              <span className="shrink-0 mt-0.5">{config.icon}</span>
              <div className="min-w-0">
                <p className="text-xs font-semibold truncate">{doc.name}</p>
                <p className="text-xs opacity-75 mt-0.5">{config.label}</p>
                {doc.updatedOn && <p className="text-xs opacity-60 mt-0.5">{doc.updatedOn}</p>}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}