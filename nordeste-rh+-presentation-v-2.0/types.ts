
// Fix: Import React to resolve the 'Cannot find namespace React' error.
import React from 'react';

export interface SlideProps {
  id: number;
  title: string;
  subtitle?: string;
  content: React.ReactNode;
}

export enum AnimationDirection {
  LEFT = 'left',
  RIGHT = 'right',
  UP = 'up',
  DOWN = 'down',
  NONE = 'none'
}