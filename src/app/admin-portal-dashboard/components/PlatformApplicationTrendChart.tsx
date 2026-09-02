'use client';
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { month: 'Feb', applications: 42800 },
  { month: 'Mar', applications: 78400 },
  { month: 'Apr', applications: 112000 },
  { month: 'May', applications: 89600 },
  { month: 'Jun', applications: 134200 },
  { month: 'Jul', applications: 187400 },
  { month: 'Aug', applications: 241000 },
  { month: 'Sep', applications: 109600 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-card border border-border rounded-xl px-4 py-3 shadow-dropdown">
      <p className="text-xs font-bold text-foreground mb-1">{label} 2026</p>
      <p className="text-sm font-bold text-primary">{(payload[0].value / 1000).toFixed(1)}K applications</p>
    </div>
  );
};

export default function PlatformApplicationTrendChart() {
  return (
    <div className="card p-5">
      <div className="flex items-center justify-between mb-5">
        <div>
          <h3 className="text-sm font-bold text-foreground">Platform Application Volume</h3>
          <p className="text-xs text-muted-foreground mt-0.5">Total applications across all scholarships — 2026</p>
        </div>
        <span className="badge bg-success/10 text-success border-success/20 text-xs">+23% YoY</span>
      </div>
      <ResponsiveContainer width="100%" height={200}>
        <AreaChart data={data} margin={{ top: 5, right: 5, left: -10, bottom: 0 }}>
          <defs>
            <linearGradient id="platformGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="var(--primary)" stopOpacity={0.2} />
              <stop offset="95%" stopColor="var(--primary)" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
          <XAxis dataKey="month" tick={{ fontSize: 11, fill: 'var(--muted-foreground)' }} axisLine={false} tickLine={false} />
          <YAxis tickFormatter={(v) => `${(v / 1000).toFixed(0)}K`} tick={{ fontSize: 11, fill: 'var(--muted-foreground)' }} axisLine={false} tickLine={false} />
          <Tooltip content={<CustomTooltip />} />
          <Area type="monotone" dataKey="applications" stroke="var(--primary)" strokeWidth={2} fill="url(#platformGrad)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}