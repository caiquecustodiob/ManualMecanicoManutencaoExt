import { ProgressState, UserProfile } from '../types';

const STORAGE_KEY = 'nordeste-academy-progress';
const USER_KEY = 'nordeste-academy-user';

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

export const getUserProfile = (): UserProfile | null => {
  try {
    const data = localStorage.getItem(USER_KEY);
    return data ? JSON.parse(data) : null;
  } catch (e) {
    console.error("Failed to load user profile", e);
    return null;
  }
};

export const saveUserProfile = (profile: UserProfile) => {
  try {
    localStorage.setItem(USER_KEY, JSON.stringify(profile));
  } catch (e) {
    console.error("Failed to save user profile", e);
  }
};

export const clearUserProfile = () => {
  localStorage.removeItem(USER_KEY);
};