import { ReactNode } from 'react';

export interface SectionContent {
  type: 'paragraph' | 'list' | 'warning' | 'info' | 'critical' | 'custom_documents';
  text?: string;
  items?: string[];
  title?: string;
}

export interface Chapter {
  id: string;
  number: string;
  title: string;
  icon: ReactNode;
  content: SectionContent[];
}