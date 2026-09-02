'use client';
import React from 'react';
import { Edit, Eye, MoreHorizontal, Plus } from 'lucide-react';
import StatusBadge from '@/components/ui/StatusBadge';

const scholarships = [
  { id: 'psch-001', title: 'Karnataka Rajyotsava Scholarship for SC/ST', cycle: '2026-27', applications: 487, shortlisted: 62, deadline: '30 Sep 2026', status: 'Published', amount: '₹12,000' },
  { id: 'psch-002', title: 'Vidyarthi Protsaha Scholarship — Engineering', cycle: '2026-27', applications: 312, shortlisted: 45, deadline: '15 Oct 2026', status: 'Published', amount: '₹25,000' },
  { id: 'psch-003', title: 'Rural Girl Child Higher Education Grant', cycle: '2026-27', applications: 198, shortlisted: 28, deadline: '20 Oct 2026', status: 'Pending Approval', amount: '₹18,000' },
  { id: 'psch-004', title: 'Merit Scholarship for SC/ST PG Students', cycle: '2025-26', applications: 250, shortlisted: 38, deadline: '31 Mar 2026', status: 'Closed', amount: '₹20,000' },
];

export default function ProviderScholarshipsTable() {
  return (
    <div className="card">
      <div className="flex items-center justify-between px-6 py-4 border-b border-border">
        <div>
          <h2 className="text-base font-bold text-foreground">My Scholarships</h2>
          <p className="text-xs text-muted-foreground mt-0.5">Manage your published and draft scholarship programs</p>
        </div>
        <button className="btn-primary text-xs px-4 py-2 gap-1.5">
          <Plus size={14} /> New Scholarship
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border bg-muted/30">
              {['Scholarship Name', 'Cycle', 'Amount', 'Applications', 'Shortlisted', 'Deadline', 'Status', 'Actions']?.map((h) => (
                <th key={`ph-${h}`} className="text-left px-5 py-3 text-xs font-bold text-muted-foreground uppercase tracking-widest whitespace-nowrap">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {scholarships?.map((s, i) => (
              <tr key={s?.id} className={`border-b border-border last:border-0 hover:bg-muted/40 transition-colors ${i % 2 === 0 ? '' : 'bg-muted/10'}`}>
                <td className="px-5 py-3.5 max-w-[240px]">
                  <p className="font-semibold text-sm text-foreground line-clamp-1">{s?.title}</p>
                </td>
                <td className="px-5 py-3.5 whitespace-nowrap">
                  <span className="text-xs text-muted-foreground">{s?.cycle}</span>
                </td>
                <td className="px-5 py-3.5 whitespace-nowrap">
                  <span className="text-sm font-bold text-success tabular-nums">{s?.amount}</span>
                </td>
                <td className="px-5 py-3.5 whitespace-nowrap">
                  <span className="text-sm font-semibold text-foreground tabular-nums">{s?.applications?.toLocaleString('en-IN')}</span>
                </td>
                <td className="px-5 py-3.5 whitespace-nowrap">
                  <span className="text-sm font-semibold text-primary tabular-nums">{s?.shortlisted}</span>
                </td>
                <td className="px-5 py-3.5 whitespace-nowrap">
                  <span className="text-xs text-muted-foreground">{s?.deadline}</span>
                </td>
                <td className="px-5 py-3.5 whitespace-nowrap">
                  <StatusBadge status={s?.status} />
                </td>
                <td className="px-5 py-3.5 whitespace-nowrap">
                  <div className="flex items-center gap-1">
                    <button className="p-1.5 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/5 transition-colors" title="View scholarship">
                      <Eye size={14} />
                    </button>
                    <button className="p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors" title="Edit scholarship">
                      <Edit size={14} />
                    </button>
                    <button className="p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors" title="More options">
                      <MoreHorizontal size={14} />
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