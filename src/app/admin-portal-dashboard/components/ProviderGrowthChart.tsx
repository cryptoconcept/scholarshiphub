'use client';
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { month: 'Jan', verified: 112, pending: 8 },
  { month: 'Feb', verified: 124, pending: 11 },
  { month: 'Mar', verified: 138, pending: 14 },
  { month: 'Apr', verified: 149, pending: 7 },
  { month: 'May', verified: 158, pending: 9 },
  { month: 'Jun', verified: 166, pending: 12 },
  { month: 'Jul', verified: 174, pending: 10 },
  { month: 'Aug', verified: 183, pending: 8 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-card border border-border rounded-xl px-4 py-3 shadow-dropdown">
      <p className="text-xs font-bold text-foreground mb-2">{label} 2026</p>
      {payload.map((p: any, i: number) => (
        <p key={`line-tt-${i}`} className="text-xs font-semibold" style={{ color: p.stroke }}>{p.name}: {p.value}</p>
      ))}
    </div>
  );
};

export default function ProviderGrowthChart() {
  return (
    <div className="card p-5">
      <div className="flex items-center justify-between mb-5">
        <div>
          <h3 className="text-sm font-bold text-foreground">Provider Growth</h3>
          <p className="text-xs text-muted-foreground mt-0.5">Verified vs pending providers over 2026</p>
        </div>
        <div className="flex items-center gap-3 text-xs">
          <span className="flex items-center gap-1"><span className="w-3 h-0.5 bg-success inline-block rounded" /> Verified</span>
          <span className="flex items-center gap-1"><span className="w-3 h-0.5 bg-warning inline-block rounded" /> Pending</span>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={data} margin={{ top: 5, right: 5, left: -10, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
          <XAxis dataKey="month" tick={{ fontSize: 11, fill: 'var(--muted-foreground)' }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fontSize: 11, fill: 'var(--muted-foreground)' }} axisLine={false} tickLine={false} />
          <Tooltip content={<CustomTooltip />} />
          <Line type="monotone" dataKey="verified" name="Verified" stroke="var(--success)" strokeWidth={2} dot={false} />
          <Line type="monotone" dataKey="pending" name="Pending" stroke="var(--warning)" strokeWidth={2} dot={false} strokeDasharray="4 4" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}