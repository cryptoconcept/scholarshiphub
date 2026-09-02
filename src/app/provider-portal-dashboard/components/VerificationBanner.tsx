import React from 'react';
import { ShieldCheck } from 'lucide-react';

export default function VerificationBanner() {
  return (
    <div className="card p-4 border-success/30 bg-success/5 flex items-center gap-3">
      <ShieldCheck size={20} className="text-success shrink-0" />
      <div className="flex-1">
        <p className="text-sm font-bold text-success">Verified Provider</p>
        <p className="text-xs text-muted-foreground">Your organization has been verified by the ScholarshipHub admin team. Your scholarships appear with the Verified badge.</p>
      </div>
      <div className="text-right shrink-0">
        <p className="text-xs text-muted-foreground">Verified on</p>
        <p className="text-xs font-semibold text-foreground">14 Jul 2026</p>
      </div>
    </div>
  );
}