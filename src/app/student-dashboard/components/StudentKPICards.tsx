import React from 'react';
import MetricCard from '@/components/ui/MetricCard';
import { FileText, Clock, CheckCircle, Heart, Calendar } from 'lucide-react';

export default function StudentKPICards() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-5 gap-4">
      <MetricCard
        label="Applications Submitted"
        value="7"
        subValue="This academic year"
        icon={<FileText size={18} className="text-primary" />}
        iconBg="bg-primary/10"
        trend={3}
        trendLabel="vs last year"
        className="col-span-1"
      />
      <MetricCard
        label="Under Review"
        value="3"
        subValue="Awaiting provider decision"
        icon={<Clock size={18} className="text-warning" />}
        iconBg="bg-warning/10"
        highlight="warning"
        className="col-span-1"
      />
      <MetricCard
        label="Approved"
        value="2"
        subValue="₹62,000 total awarded"
        icon={<CheckCircle size={18} className="text-success" />}
        iconBg="bg-success/10"
        highlight="positive"
        trend={100}
        trendLabel="vs last year"
        className="col-span-1"
      />
      <MetricCard
        label="Saved Scholarships"
        value="14"
        subValue="7 match your profile"
        icon={<Heart size={18} className="text-danger" />}
        iconBg="bg-danger/10"
        className="col-span-1"
      />
      <MetricCard
        label="Closing This Week"
        value="2"
        subValue="Apply before deadline!"
        icon={<Calendar size={18} className="text-danger" />}
        iconBg="bg-danger/10"
        highlight="negative"
        className="col-span-1"
      />
    </div>
  );
}