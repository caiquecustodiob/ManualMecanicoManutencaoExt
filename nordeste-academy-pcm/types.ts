export interface ModuleItem {
  id: string;
  title: string;
  content: string[];
  expectedResult?: string;
  checklist?: string[];
}

export interface Phase {
  id: string;
  title: string;
  duration: string;
  dates: string;
  description: string[];
}

export interface AssetChecklistItem {
  id: string;
  label: string;
  category: 'moto' | 'equipment' | 'admin';
}

export type TabType = 'cronograma' | 'modulos' | 'ativos';

export interface ProgressState {
  [key: string]: boolean;
}