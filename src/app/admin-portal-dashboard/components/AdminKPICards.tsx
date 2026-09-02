import React from 'react';
import MetricCard from '@/components/ui/MetricCard';
import { GraduationCap, Building2, Award, FileText, Clock, Flag } from 'lucide-react';

export default function AdminKPICards() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 2xl:grid-cols-6 gap-4">
      <MetricCard
        label="Total Students"
        value="2,47,312"
        subValue="+1,842 this week"
        icon={<GraduationCap size={18} className="text-primary" />}
        iconBg="bg-primary/10"
        trend={12}
        className="col-span-1"
      />
      <MetricCard
        label="Verified Providers"
        value="183"
        subValue="8 pending verification"
        icon={<Building2 size={18} className="text-info" />}
        iconBg="bg-info/10"
        trend={5}
        className="col-span-1"
      />
      <MetricCard
        label="Published Scholarships"
        value="2,418"
        subValue="14 pending approval"
        icon={<Award size={18} className="text-success" />}
        iconBg="bg-success/10"
        trend={8}
        className="col-span-1"
      />
      <MetricCard
        label="Total Applications"
        value="8,94,421"
        subValue="This academic year"
        icon={<FileText size={18} className="text-accent" />}
        iconBg="bg-accent/10"
        trend={23}
        className="col-span-1"
      />
      <MetricCard
        label="Pending Reviews"
        value="22"
        subValue="8 providers + 14 scholarships"
        icon={<Clock size={18} className="text-warning" />}
        iconBg="bg-warning/10"
        highlight="warning"
        className="col-span-1"
      />
      <MetricCard
        label="Reports Filed"
        value="47"
        subValue="6 unresolved"
        icon={<Flag size={18} className="text-danger" />}
        iconBg="bg-danger/10"
        highlight="negative"
        className="col-span-1"
      />
    </div>
  );
}