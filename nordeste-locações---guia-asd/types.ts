import React from 'react';
import { LucideIcon } from 'lucide-react';

export interface Section {
  id: string;
  title: string;
  icon: LucideIcon;
  component: React.FC;
}

export enum ThemeColors {
  Primary = 'red-600',
  Secondary = 'slate-100',
  TextPrimary = 'slate-800',
  TextSecondary = 'slate-600',
}