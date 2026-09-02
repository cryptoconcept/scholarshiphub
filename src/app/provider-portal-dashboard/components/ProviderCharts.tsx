'use client';
import React from 'react';
import dynamic from 'next/dynamic';

const ApplicationTrendChart = dynamic(() => import('./ApplicationTrendChart'), { ssr: false });
const CategoryBreakdownChart = dynamic(() => import('./CategoryBreakdownChart'), { ssr: false });

export default function ProviderCharts() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-6">
      <ApplicationTrendChart />
      <CategoryBreakdownChart />
    </div>
  );
}