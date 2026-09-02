import React from 'react';
import MetricCard from '@/components/ui/MetricCard';
import { Award, FileText, Clock, Star, CheckCircle } from 'lucide-react';

export default function ProviderKPICards() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-5 gap-4">
      <MetricCard
        label="Published Scholarships"
        value="4"
        subValue="2 active, 2 closed"
        icon={<Award size={18} className="text-primary" />}
        iconBg="bg-primary/10"
      />
      <MetricCard
        label="Total Applications"
        value="1,247"
        subValue="Across all scholarships"
        icon={<FileText size={18} className="text-info" />}
        iconBg="bg-info/10"
        trend={18}
        trendLabel="vs last cycle"
      />
      <MetricCard
        label="Under Review"
        value="312"
        subValue="Awaiting your review"
        icon={<Clock size={18} className="text-warning" />}
        iconBg="bg-warning/10"
        highlight="warning"
      />
      <MetricCard
        label="Shortlisted"
        value="148"
        subValue="Ready for approval"
        icon={<Star size={18} className="text-accent" />}
        iconBg="bg-accent/10"
      />
      <MetricCard
        label="Approved"
        value="89"
        subValue="₹26.8L disbursed"
        icon={<CheckCircle size={18} className="text-success" />}
        iconBg="bg-success/10"
        highlight="positive"
        trend={12}
      />
    </div>
  );
}