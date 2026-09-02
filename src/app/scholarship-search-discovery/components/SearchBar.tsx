'use client';
import React from 'react';
import { Search, Mic } from 'lucide-react';

interface SearchBarProps {
  query: string;
  onChange: (q: string) => void;
}

export default function SearchBar({ query, onChange }: SearchBarProps) {
  return (
    <div className="relative">
      <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
      <input
        type="text"
        value={query}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search by scholarship name, course, category, district..."
        className="input-field pl-12 pr-12 py-3.5 text-sm w-full"
      />
      <button className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-primary transition-colors" aria-label="Voice search">
        <Mic size={16} />
      </button>
    </div>
  );
}