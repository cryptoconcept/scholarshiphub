'use client';
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { month: 'Feb', applications: 42 },
  { month: 'Mar', applications: 87 },
  { month: 'Apr', applications: 134 },
  { month: 'May', applications: 98 },
  { month: 'Jun', applications: 176 },
  { month: 'Jul', applications: 203 },
  { month: 'Aug', applications: 312 },
  { month: 'Sep', applications: 195 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-card border border-border rounded-xl px-4 py-3 shadow-dropdown">
      <p className="text-xs font-bold text-foreground mb-1">{label} 2026</p>
      <p className="text-sm font-bold text-primary">{payload[0].value} applications</p>
    </div>
  );
};

export default function ApplicationTrendChart() {
  return (
    <div className="card p-5">
      <div className="flex items-center justify-between mb-5">
        <div>
          <h3 className="text-sm font-bold text-foreground">Application Volume</h3>
          <p className="text-xs text-muted-foreground mt-0.5">Monthly applications received — 2026</p>
        </div>
        <span className="badge bg-primary/10 text-primary border-primary/20 text-xs">1,247 total</span>
      </div>
      <ResponsiveContainer width="100%" height={200}>
        <AreaChart data={data} margin={{ top: 5, right: 5, left: -20, bottom: 0 }}>
          <defs>
            <linearGradient id="appGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="var(--primary)" stopOpacity={0.2} />
              <stop offset="95%" stopColor="var(--primary)" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
          <XAxis dataKey="month" tick={{ fontSize: 11, fill: 'var(--muted-foreground)' }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fontSize: 11, fill: 'var(--muted-foreground)' }} axisLine={false} tickLine={false} />
          <Tooltip content={<CustomTooltip />} />
          <Area type="monotone" dataKey="applications" stroke="var(--primary)" strokeWidth={2} fill="url(#appGradient)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}