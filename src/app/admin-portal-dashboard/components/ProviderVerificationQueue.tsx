'use client';
import React from 'react';
import { ShieldCheck, ShieldX, Eye, Building2 } from 'lucide-react';

import { toast } from 'sonner';

const providers = [
  { id: 'prov-001', name: 'Mysuru Zilla Panchayat Education Trust', type: 'Government Body', state: 'Karnataka', scholarships: 3, submittedOn: '28 Aug 2026', status: 'Verification Pending', docCount: 5 },
  { id: 'prov-002', name: 'Infosys Foundation — CSR Division', type: 'Private Company (CSR)', state: 'Karnataka', scholarships: 2, submittedOn: '25 Aug 2026', status: 'Verification Pending', docCount: 7 },
  { id: 'prov-003', name: 'Visvesvaraya Technological University', type: 'University', state: 'Karnataka', scholarships: 5, submittedOn: '22 Aug 2026', status: 'Verification Pending', docCount: 4 },
  { id: 'prov-004', name: 'Azim Premji Foundation', type: 'NGO/Trust', state: 'Karnataka', scholarships: 4, submittedOn: '20 Aug 2026', status: 'Verification Pending', docCount: 6 },
  { id: 'prov-005', name: 'Karnataka Samaja Seva Trust', type: 'NGO/Trust', state: 'Karnataka', scholarships: 1, submittedOn: '18 Aug 2026', status: 'Verification Pending', docCount: 3 },
  { id: 'prov-006', name: 'HDFC Bank Parivartan CSR', type: 'Private Company (CSR)', state: 'All India', scholarships: 2, submittedOn: '15 Aug 2026', status: 'Verification Pending', docCount: 8 },
  { id: 'prov-007', name: 'Tumkur Minority Welfare Samiti', type: 'NGO/Trust', state: 'Karnataka', scholarships: 2, submittedOn: '12 Aug 2026', status: 'Verification Pending', docCount: 4 },
  { id: 'prov-008', name: 'Manipal Academy of Higher Education', type: 'University', state: 'Karnataka', scholarships: 6, submittedOn: '10 Aug 2026', status: 'Verification Pending', docCount: 5 },
];

export default function ProviderVerificationQueue() {
  return (
    <div className="card">
      <div className="flex items-center justify-between px-5 py-4 border-b border-border">
        <div>
          <h2 className="text-sm font-bold text-foreground">Provider Verification Queue</h2>
          <p className="text-xs text-muted-foreground mt-0.5">{providers?.length} providers awaiting verification</p>
        </div>
        <span className="badge bg-warning/10 text-warning border-warning/20 text-xs">{providers?.length} pending</span>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border bg-muted/30">
              {['Provider', 'Type', 'Docs', 'Submitted', 'Actions']?.map((h) => (
                <th key={`pvh-${h}`} className="text-left px-5 py-3 text-xs font-bold text-muted-foreground uppercase tracking-widest whitespace-nowrap">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {providers?.map((p, i) => (
              <tr key={p?.id} className={`border-b border-border last:border-0 hover:bg-muted/40 transition-colors ${i % 2 !== 0 ? 'bg-muted/10' : ''}`}>
                <td className="px-5 py-3.5">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Building2 size={13} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-foreground line-clamp-1 max-w-[160px]">{p?.name}</p>
                      <p className="text-xs text-muted-foreground">{p?.state}</p>
                    </div>
                  </div>
                </td>
                <td className="px-5 py-3.5 whitespace-nowrap">
                  <span className="text-xs text-muted-foreground">{p?.type}</span>
                </td>
                <td className="px-5 py-3.5 whitespace-nowrap">
                  <span className="badge bg-muted text-muted-foreground border-border text-xs">{p?.docCount} docs</span>
                </td>
                <td className="px-5 py-3.5 whitespace-nowrap">
                  <span className="text-xs text-muted-foreground">{p?.submittedOn}</span>
                </td>
                <td className="px-5 py-3.5 whitespace-nowrap">
                  <div className="flex items-center gap-1">
                    <button className="p-1.5 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/5 transition-colors" title="Review provider documents">
                      <Eye size={13} />
                    </button>
                    <button
                      onClick={() => toast?.success(`${p?.name} has been verified!`)}
                      className="p-1.5 rounded-lg text-muted-foreground hover:text-success hover:bg-success/5 transition-colors"
                      title="Approve verification"
                    >
                      <ShieldCheck size={13} />
                    </button>
                    <button
                      onClick={() => toast?.error(`Verification rejected for ${p?.name}`)}
                      className="p-1.5 rounded-lg text-muted-foreground hover:text-danger hover:bg-danger/5 transition-colors"
                      title="Reject verification"
                    >
                      <ShieldX size={13} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}