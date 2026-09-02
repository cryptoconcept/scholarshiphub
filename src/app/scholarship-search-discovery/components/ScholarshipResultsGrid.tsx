'use client';
import React, { useState } from 'react';
import { Grid3X3, List, SlidersHorizontal, ChevronLeft, ChevronRight } from 'lucide-react';
import ScholarshipCard, { ScholarshipCardData } from '@/components/ui/ScholarshipCard';
import EmptyState from '@/components/ui/EmptyState';
import { Search } from 'lucide-react';
import { FilterState } from './SearchDiscoveryClient';

const allScholarships: ScholarshipCardData[] = [
  { id: 'sch-001', title: 'Karnataka Rajyotsava Scholarship for SC/ST Students', provider: 'Dept. of Social Welfare, Karnataka', amount: '12,000', amountType: 'Annual', deadline: '30 Sep 2026', daysLeft: 29, educationLevel: 'Class 11-12 / UG', category: 'SC/ST', state: 'Karnataka', matchScore: 94, matchLabel: 'Excellent Match', isVerified: true, tags: ['Govt', 'Post-Matric'] },
  { id: 'sch-002', title: 'AICTE Pragati Scholarship for Girls in Technical Education', provider: 'AICTE', amount: '50,000', amountType: 'Annual', deadline: '15 Oct 2026', daysLeft: 44, educationLevel: 'B.E / B.Tech', category: 'Girl Child', state: 'All India', matchScore: 88, matchLabel: 'Excellent Match', isVerified: true, tags: ['Central Govt', 'Engineering'] },
  { id: 'sch-003', title: 'Vidyasiri Post-Matric Scholarship for OBC Students', provider: 'Backward Classes Welfare Dept., Karnataka', amount: '8,500', amountType: 'Annual', deadline: '05 Oct 2026', daysLeft: 34, educationLevel: 'UG / PG', category: 'OBC', state: 'Karnataka', matchScore: 76, matchLabel: 'Good Match', isVerified: true, tags: ['Govt', 'OBC'] },
  { id: 'sch-004', title: 'National Means-cum-Merit Scholarship (NMMS)', provider: 'Ministry of Education, India', amount: '12,000', amountType: 'Annual', deadline: '20 Oct 2026', daysLeft: 49, educationLevel: 'Class 9-10', category: 'Merit + Income', state: 'All India', matchScore: 82, matchLabel: 'Good Match', isVerified: true, tags: ['Central Govt', 'Merit'] },
  { id: 'sch-005', title: 'Maulana Azad National Fellowship for Minority Students', provider: 'Ministry of Minority Affairs', amount: '25,000', amountType: 'Annual', deadline: '12 Sep 2026', daysLeft: 11, educationLevel: 'M.Phil / PhD', category: 'Minority', state: 'All India', matchScore: 61, matchLabel: 'Possible Match', isVerified: true, tags: ['Central Govt', 'Research'] },
  { id: 'sch-006', title: 'Rajiv Gandhi National Fellowship for SC/ST Research', provider: 'UGC', amount: '31,000', amountType: 'Monthly', deadline: '08 Sep 2026', daysLeft: 7, educationLevel: 'PhD', category: 'SC/ST', state: 'All India', matchScore: 55, matchLabel: 'Possible Match', isVerified: true, tags: ['UGC', 'Research'] },
  { id: 'sch-007', title: 'Karnataka Minority Welfare Department Scholarship', provider: 'Minority Welfare Dept., Karnataka', amount: '10,000', amountType: 'Annual', deadline: '25 Oct 2026', daysLeft: 54, educationLevel: 'Class 11-12', category: 'Minority', state: 'Karnataka', matchScore: 79, matchLabel: 'Good Match', isVerified: true, tags: ['Govt', 'Minority'] },
  { id: 'sch-008', title: 'PM Scholarship for Central Armed Police Forces', provider: 'Ministry of Home Affairs', amount: '36,000', amountType: 'Annual', deadline: '31 Oct 2026', daysLeft: 60, educationLevel: 'UG / PG', category: 'General', state: 'All India', matchScore: 42, matchLabel: 'Possible Match', isVerified: true, tags: ['Central Govt', 'Defence'] },
  { id: 'sch-009', title: 'Indira Gandhi Single Girl Child Scholarship', provider: 'UGC', amount: '36,200', amountType: 'Annual', deadline: '28 Sep 2026', daysLeft: 27, educationLevel: 'Post Graduate', category: 'Girl Child', state: 'All India', matchScore: 85, matchLabel: 'Excellent Match', isVerified: true, tags: ['UGC', 'Girls'] },
  { id: 'sch-010', title: 'Sukanya Samriddhi Scholarship — Private Trust', provider: 'Infosys Foundation', amount: '20,000', amountType: 'Annual', deadline: '15 Nov 2026', daysLeft: 75, educationLevel: 'Under Graduate', category: 'Girl Child', state: 'Karnataka', matchScore: 71, matchLabel: 'Good Match', isVerified: true, tags: ['Private', 'Girls'] },
  { id: 'sch-011', title: 'Dr. Ambedkar Post-Matric Scholarship for EBC Students', provider: 'Dept. of Social Justice, Karnataka', amount: '15,000', amountType: 'Annual', deadline: '10 Oct 2026', daysLeft: 39, educationLevel: 'UG / PG', category: 'EWS', state: 'Karnataka', matchScore: 68, matchLabel: 'Good Match', isVerified: true, tags: ['Govt', 'EBC'] },
  { id: 'sch-012', title: 'National Scholarship for PwD Students', provider: 'Dept. of Empowerment of Persons with Disabilities', amount: '40,000', amountType: 'Annual', deadline: '05 Nov 2026', daysLeft: 65, educationLevel: 'Class 9 to PG', category: 'Disability', state: 'All India', matchScore: 33, matchLabel: 'Possible Match', isVerified: true, tags: ['Central Govt', 'PwD'] },
];

interface Props {
  filters: FilterState;
  sortBy: 'relevance' | 'deadline' | 'amount' | 'newest';
  viewMode: 'grid' | 'list';
  onSortChange: (s: 'relevance' | 'deadline' | 'amount' | 'newest') => void;
  onViewChange: (v: 'grid' | 'list') => void;
  onMobileFilterOpen: () => void;
}

const ITEMS_PER_PAGE = 9;

export default function ScholarshipResultsGrid({ filters, sortBy, viewMode, onSortChange, onViewChange, onMobileFilterOpen }: Props) {
  const [saved, setSaved] = useState<Set<string>>(new Set(['sch-002', 'sch-009']));
  const [page, setPage] = useState(1);

  const handleSave = (id: string) => {
    setSaved((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id); else next.add(id);
      return next;
    });
  };

  // Mock filter: in real app, filter by actual filter state
  // Backend integration point: replace with API call passing filters
  const results = allScholarships.map((s) => ({ ...s, isSaved: saved.has(s.id) }));
  const totalPages = Math.ceil(results.length / ITEMS_PER_PAGE);
  const paged = results.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

  return (
    <div>
      {/* Toolbar */}
      <div className="flex items-center justify-between gap-3 mb-5 flex-wrap">
        <div className="flex items-center gap-2">
          <p className="text-sm font-semibold text-foreground">{results.length} scholarships</p>
          <span className="text-muted-foreground text-sm">found</span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={onMobileFilterOpen}
            className="lg:hidden btn-outline text-xs px-3 py-2 gap-1.5"
          >
            <SlidersHorizontal size={14} /> Filters
          </button>
          <select
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value as typeof sortBy)}
            className="input-field py-2 text-xs w-auto pr-8"
          >
            <option value="relevance">Sort: Relevance</option>
            <option value="deadline">Sort: Deadline (Soonest)</option>
            <option value="amount">Sort: Amount (Highest)</option>
            <option value="newest">Sort: Newest</option>
          </select>
          <div className="flex rounded-xl border border-border overflow-hidden">
            <button
              onClick={() => onViewChange('grid')}
              className={`p-2 transition-colors ${viewMode === 'grid' ? 'bg-primary text-primary-foreground' : 'bg-card text-muted-foreground hover:bg-muted'}`}
              aria-label="Grid view"
            >
              <Grid3X3 size={15} />
            </button>
            <button
              onClick={() => onViewChange('list')}
              className={`p-2 transition-colors ${viewMode === 'list' ? 'bg-primary text-primary-foreground' : 'bg-card text-muted-foreground hover:bg-muted'}`}
              aria-label="List view"
            >
              <List size={15} />
            </button>
          </div>
        </div>
      </div>

      {/* Results */}
      {paged.length === 0 ? (
        <EmptyState
          icon={<Search size={28} />}
          title="No scholarships match your filters"
          description="Try removing some filters or broadening your search criteria to see more results."
          action={<button className="btn-primary">Clear all filters</button>}
        />
      ) : viewMode === 'grid' ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 gap-4">
          {paged.map((sch) => (
            <ScholarshipCard key={sch.id} data={sch} onSave={handleSave} variant="grid" />
          ))}
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          {paged.map((sch) => (
            <ScholarshipCard key={sch.id} data={sch} onSave={handleSave} variant="list" />
          ))}
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-between mt-8 flex-wrap gap-3">
          <p className="text-xs text-muted-foreground">
            Showing {(page - 1) * ITEMS_PER_PAGE + 1}–{Math.min(page * ITEMS_PER_PAGE, results.length)} of {results.length}
          </p>
          <div className="flex items-center gap-1">
            <button
              disabled={page === 1}
              onClick={() => setPage((p) => p - 1)}
              className="p-2 rounded-xl border border-border hover:bg-muted disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              aria-label="Previous page"
            >
              <ChevronLeft size={15} />
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
              <button
                key={`page-${p}`}
                onClick={() => setPage(p)}
                className={`w-8 h-8 rounded-xl text-xs font-semibold transition-colors ${p === page ? 'bg-primary text-primary-foreground' : 'border border-border hover:bg-muted text-muted-foreground'}`}
              >
                {p}
              </button>
            ))}
            <button
              disabled={page === totalPages}
              onClick={() => setPage((p) => p + 1)}
              className="p-2 rounded-xl border border-border hover:bg-muted disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              aria-label="Next page"
            >
              <ChevronRight size={15} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}