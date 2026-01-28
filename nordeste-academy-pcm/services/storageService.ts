import { ProgressState } from '../types';

const STORAGE_KEY = 'nordeste-academy-progress';

export const getProgress = (): ProgressState => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : {};
  } catch (e) {
    console.error("Failed to load progress", e);
    return {};
  }
};

export const saveProgress = (progress: ProgressState) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch (e) {
    console.error("Failed to save progress", e);
  }
};

export const clearProgress = () => {
    localStorage.removeItem(STORAGE_KEY);
}