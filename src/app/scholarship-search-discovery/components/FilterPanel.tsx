'use client';
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { FilterState } from './SearchDiscoveryClient';

interface FilterPanelProps {
  filters: FilterState;
  onChange: <K extends keyof FilterState>(key: K, value: FilterState[K]) => void;
}

interface FilterGroupProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

function FilterGroup({ title, children, defaultOpen = true }: FilterGroupProps) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-border pb-4 mb-4 last:border-0 last:mb-0 last:pb-0">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full text-left mb-3 group"
      >
        <span className="text-xs font-bold text-foreground uppercase tracking-widest">{title}</span>
        {open ? <ChevronUp size={14} className="text-muted-foreground" /> : <ChevronDown size={14} className="text-muted-foreground" />}
      </button>
      {open && <div className="flex flex-col gap-2">{children}</div>}
    </div>
  );
}

function CheckItem({ label, checked, onChange }: { label: string; checked: boolean; onChange: (v: boolean) => void }) {
  return (
    <label className="flex items-center gap-2.5 cursor-pointer group">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="w-4 h-4 rounded accent-primary cursor-pointer"
      />
      <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">{label}</span>
    </label>
  );
}

const STATES = ['Karnataka', 'Tamil Nadu', 'Maharashtra', 'Andhra Pradesh', 'Telangana', 'Kerala', 'All India'];
const DISTRICTS = ['Bangalore Urban', 'Mysuru', 'Tumkur', 'Mangaluru', 'Belagavi', 'Hubli-Dharwad', 'Kalaburagi', 'Shivamogga', 'Davangere'];
const EDUCATION_LEVELS = ['Class 9-10', 'Class 11-12', 'Diploma/ITI', 'Under Graduate', 'Post Graduate', 'PhD/Research'];
const CATEGORIES = ['General', 'SC (Scheduled Caste)', 'ST (Scheduled Tribe)', 'OBC (Other Backward Classes)', 'Minority', 'EWS (Economically Weaker Section)'];
const STREAMS = ['Science', 'Commerce', 'Arts/Humanities', 'Engineering', 'Medical', 'Law', 'Management', 'Agriculture'];
const PROVIDER_TYPES = ['Central Government', 'State Government', 'University/College', 'Private Company', 'NGO/Trust', 'International'];
const INCOME_SLABS = ['Below ₹1 Lakh', '₹1L – ₹2.5L', '₹2.5L – ₹5L', '₹5L – ₹8L', 'No Income Limit'];
const DEADLINE_OPTIONS = ['Closing in 7 days', 'Closing in 30 days', 'Closing in 3 months', 'Any deadline'];

export default function FilterPanel({ filters, onChange }: FilterPanelProps) {
  const toggleArr = <K extends keyof FilterState>(key: K, value: string) => {
    const arr = filters[key] as string[];
    onChange(key, (arr.includes(value) ? arr.filter((v) => v !== value) : [...arr, value]) as FilterState[K]);
  };

  return (
    <div className="card p-5 sticky top-24">
      <div className="flex items-center justify-between mb-5">
        <p className="font-bold text-sm text-foreground">Filters</p>
        <button
          onClick={() => {}}
          className="text-xs font-semibold text-primary hover:underline"
        >
          Reset all
        </button>
      </div>

      <FilterGroup title="State">
        {STATES.map((s) => (
          <CheckItem key={`state-${s}`} label={s} checked={filters.state.includes(s)} onChange={() => toggleArr('state', s)} />
        ))}
      </FilterGroup>

      <FilterGroup title="District (Karnataka)" defaultOpen={false}>
        <div className="max-h-40 overflow-y-auto scrollbar-hide flex flex-col gap-2">
          {DISTRICTS.map((d) => (
            <CheckItem key={`dist-${d}`} label={d} checked={filters.district.includes(d)} onChange={() => toggleArr('district', d)} />
          ))}
        </div>
      </FilterGroup>

      <FilterGroup title="Education Level">
        {EDUCATION_LEVELS.map((l) => (
          <CheckItem key={`edu-${l}`} label={l} checked={filters.educationLevel.includes(l)} onChange={() => toggleArr('educationLevel', l)} />
        ))}
      </FilterGroup>

      <FilterGroup title="Category / Caste">
        {CATEGORIES.map((c) => (
          <CheckItem key={`cat-${c}`} label={c} checked={filters.category.includes(c)} onChange={() => toggleArr('category', c)} />
        ))}
      </FilterGroup>

      <FilterGroup title="Stream / Course">
        {STREAMS.map((s) => (
          <CheckItem key={`stream-${s}`} label={s} checked={filters.stream.includes(s)} onChange={() => toggleArr('stream', s)} />
        ))}
      </FilterGroup>

      <FilterGroup title="Provider Type">
        {PROVIDER_TYPES.map((p) => (
          <CheckItem key={`prov-${p}`} label={p} checked={filters.providerType.includes(p)} onChange={() => toggleArr('providerType', p)} />
        ))}
      </FilterGroup>

      <FilterGroup title="Family Income">
        {INCOME_SLABS.map((s) => (
          <label key={`income-${s}`} className="flex items-center gap-2.5 cursor-pointer group">
            <input
              type="radio"
              name="income"
              checked={filters.incomeSlab === s}
              onChange={() => onChange('incomeSlab', s)}
              className="w-4 h-4 accent-primary cursor-pointer"
            />
            <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">{s}</span>
          </label>
        ))}
      </FilterGroup>

      <FilterGroup title="Deadline">
        {DEADLINE_OPTIONS.map((d) => (
          <label key={`deadline-${d}`} className="flex items-center gap-2.5 cursor-pointer group">
            <input
              type="radio"
              name="deadline"
              checked={filters.deadlineDays === d}
              onChange={() => onChange('deadlineDays', d)}
              className="w-4 h-4 accent-primary cursor-pointer"
            />
            <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">{d}</span>
          </label>
        ))}
      </FilterGroup>

      <FilterGroup title="Gender">
        {['All', 'Female Only', 'Male Only', 'Transgender'].map((g) => (
          <label key={`gender-${g}`} className="flex items-center gap-2.5 cursor-pointer group">
            <input
              type="radio"
              name="gender"
              checked={filters.gender === g || (g === 'All' && !filters.gender)}
              onChange={() => onChange('gender', g === 'All' ? '' : g)}
              className="w-4 h-4 accent-primary cursor-pointer"
            />
            <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">{g}</span>
          </label>
        ))}
      </FilterGroup>

      <FilterGroup title="Minimum Academic %">
        <div className="px-1">
          <div className="flex justify-between text-xs text-muted-foreground mb-2">
            <span>0%</span>
            <span className="font-semibold text-foreground">{filters.minPercentage}%+</span>
          </div>
          <input
            type="range"
            min={0}
            max={90}
            step={5}
            value={filters.minPercentage}
            onChange={(e) => onChange('minPercentage', Number(e.target.value))}
            className="w-full accent-primary"
          />
        </div>
      </FilterGroup>

      <FilterGroup title="Scholarship Amount">
        <div className="px-1">
          <div className="flex justify-between text-xs text-muted-foreground mb-2">
            <span>₹{(filters.amountMin / 1000).toFixed(0)}K</span>
            <span className="font-semibold text-foreground">up to ₹{(filters.amountMax / 1000).toFixed(0)}K</span>
          </div>
          <input
            type="range"
            min={0}
            max={200000}
            step={5000}
            value={filters.amountMax}
            onChange={(e) => onChange('amountMax', Number(e.target.value))}
            className="w-full accent-primary"
          />
        </div>
      </FilterGroup>
    </div>
  );
}