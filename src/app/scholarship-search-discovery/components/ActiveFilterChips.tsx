'use client';
import React from 'react';
import { X } from 'lucide-react';
import { FilterState } from './SearchDiscoveryClient';

interface Props {
  filters: FilterState;
  onRemove: (key: keyof FilterState, value?: string) => void;
  onClearAll: () => void;
}

export default function ActiveFilterChips({ filters, onRemove, onClearAll }: Props) {
  const chips: { key: keyof FilterState; label: string; value?: string }[] = [];

  filters.state.forEach((v) => chips.push({ key: 'state', label: `State: ${v}`, value: v }));
  filters.district.forEach((v) => chips.push({ key: 'district', label: `District: ${v}`, value: v }));
  filters.educationLevel.forEach((v) => chips.push({ key: 'educationLevel', label: v, value: v }));
  filters.category.forEach((v) => chips.push({ key: 'category', label: v, value: v }));
  filters.stream.forEach((v) => chips.push({ key: 'stream', label: `Stream: ${v}`, value: v }));
  filters.providerType.forEach((v) => chips.push({ key: 'providerType', label: v, value: v }));
  if (filters.gender) chips.push({ key: 'gender', label: `Gender: ${filters.gender}` });
  if (filters.incomeSlab) chips.push({ key: 'incomeSlab', label: `Income: ${filters.incomeSlab}` });
  if (filters.minPercentage > 0) chips.push({ key: 'minPercentage', label: `Min ${filters.minPercentage}%` });
  if (filters.deadlineDays) chips.push({ key: 'deadlineDays', label: `Deadline: ${filters.deadlineDays}` });

  if (chips.length === 0) return null;

  return (
    <div className="flex flex-wrap items-center gap-2 mt-4">
      <span className="text-xs font-semibold text-muted-foreground">Active filters:</span>
      {chips.map((chip, i) => (
        <span key={`chip-${chip.key}-${i}`} className="filter-chip flex items-center gap-1">
          {chip.label}
          <button onClick={() => onRemove(chip.key, chip.value)} className="hover:text-danger transition-colors ml-0.5" aria-label={`Remove ${chip.label} filter`}>
            <X size={10} />
          </button>
        </span>
      ))}
      <button onClick={onClearAll} className="text-xs font-semibold text-danger hover:underline ml-1">
        Clear all
      </button>
    </div>
  );
}