'use client';
import React, { useState } from 'react';
import FilterPanel from './FilterPanel';
import ScholarshipResultsGrid from './ScholarshipResultsGrid';
import SearchBar from './SearchBar';
import ActiveFilterChips from './ActiveFilterChips';
import { X } from 'lucide-react';

export interface FilterState {
  state: string[];
  district: string[];
  educationLevel: string[];
  category: string[];
  incomeSlab: string;
  minPercentage: number;
  ageMax: number;
  amountMin: number;
  amountMax: number;
  deadlineDays: string;
  providerType: string[];
  stream: string[];
  gender: string;
  query: string;
}

const initialFilters: FilterState = {
  state: ['Karnataka'],
  district: [],
  educationLevel: [],
  category: [],
  incomeSlab: '',
  minPercentage: 0,
  ageMax: 35,
  amountMin: 0,
  amountMax: 200000,
  deadlineDays: '',
  providerType: [],
  stream: [],
  gender: '',
  query: '',
};

export default function SearchDiscoveryClient() {
  const [filters, setFilters] = useState<FilterState>(initialFilters);
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState<'relevance' | 'deadline' | 'amount' | 'newest'>('relevance');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const updateFilter = <K extends keyof FilterState>(key: K, value: FilterState[K]) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const removeFilter = (key: keyof FilterState, value?: string) => {
    if (Array.isArray(filters[key]) && value) {
      setFilters((prev) => ({ ...prev, [key]: (prev[key] as string[]).filter((v) => v !== value) }));
    } else {
      setFilters((prev) => ({ ...prev, [key]: initialFilters[key] }));
    }
  };

  const clearAll = () => setFilters(initialFilters);

  return (
    <div className="max-w-screen-2xl mx-auto px-4 lg:px-8 xl:px-10 2xl:px-16 py-8">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-foreground">Scholarship Discovery</h1>
        <p className="text-sm text-muted-foreground mt-1">2,400+ scholarships across Karnataka and India — filtered to your profile</p>
      </div>

      {/* Search bar */}
      <SearchBar query={filters.query} onChange={(q) => updateFilter('query', q)} />

      {/* Active filter chips */}
      <ActiveFilterChips filters={filters} onRemove={removeFilter} onClearAll={clearAll} />

      <div className="flex gap-6 mt-6">
        {/* Filter Panel — Desktop */}
        <aside className="hidden lg:block w-72 xl:w-80 shrink-0">
          <FilterPanel filters={filters} onChange={updateFilter} />
        </aside>

        {/* Results */}
        <main className="flex-1 min-w-0">
          <ScholarshipResultsGrid
            filters={filters}
            sortBy={sortBy}
            viewMode={viewMode}
            onSortChange={setSortBy}
            onViewChange={setViewMode}
            onMobileFilterOpen={() => setMobileFilterOpen(true)}
          />
        </main>
      </div>

      {/* Mobile Filter Overlay */}
      {mobileFilterOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-foreground/40 backdrop-blur-sm" onClick={() => setMobileFilterOpen(false)} />
          <div className="absolute right-0 top-0 h-full w-[320px] bg-card shadow-modal overflow-y-auto animate-slide-up">
            <div className="flex items-center justify-between p-4 border-b border-border sticky top-0 bg-card z-10">
              <p className="font-bold text-base">Filters</p>
              <button onClick={() => setMobileFilterOpen(false)} className="p-2 rounded-xl hover:bg-muted">
                <X size={18} />
              </button>
            </div>
            <div className="p-4">
              <FilterPanel filters={filters} onChange={updateFilter} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}