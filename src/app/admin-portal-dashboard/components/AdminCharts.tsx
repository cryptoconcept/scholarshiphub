'use client';
import React from 'react';
import dynamic from 'next/dynamic';

const PlatformApplicationTrendChart = dynamic(() => import('./PlatformApplicationTrendChart'), { ssr: false });
const ProviderGrowthChart = dynamic(() => import('./ProviderGrowthChart'), { ssr: false });

export default function AdminCharts() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-6">
      <PlatformApplicationTrendChart />
      <ProviderGrowthChart />
    </div>
  );
}