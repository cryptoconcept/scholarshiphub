'use client';
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const data = [
  { category: 'SC/ST', applications: 487, color: '#5B4AE8' },
  { category: 'OBC', applications: 312, color: '#7C3AED' },
  { category: 'General', applications: 198, color: '#A78BFA' },
  { category: 'Minority', applications: 142, color: '#F59E0B' },
  { category: 'EWS', applications: 108, color: '#10B981' },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-card border border-border rounded-xl px-4 py-3 shadow-dropdown">
      <p className="text-xs font-bold text-foreground mb-1">{label}</p>
      <p className="text-sm font-bold text-foreground">{payload[0].value} applications</p>
    </div>
  );
};

export default function CategoryBreakdownChart() {
  return (
    <div className="card p-5">
      <div className="flex items-center justify-between mb-5">
        <div>
          <h3 className="text-sm font-bold text-foreground">Applications by Category</h3>
          <p className="text-xs text-muted-foreground mt-0.5">Caste/category distribution of applicants</p>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={data} margin={{ top: 5, right: 5, left: -20, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} />
          <XAxis dataKey="category" tick={{ fontSize: 11, fill: 'var(--muted-foreground)' }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fontSize: 11, fill: 'var(--muted-foreground)' }} axisLine={false} tickLine={false} />
          <Tooltip content={<CustomTooltip />} />
          <Bar dataKey="applications" radius={[6, 6, 0, 0]}>
            {data.map((entry, i) => (
              <Cell key={`cell-${i}`} fill={entry.color} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}