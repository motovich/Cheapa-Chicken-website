import React from 'react';
import { SectionId } from '../types';

interface RecipeGeneratorProps {
  isSnippet?: boolean;
  onNavigate?: (section: SectionId) => void;
}

// Component disabled/deprecated
export const RecipeGenerator: React.FC<RecipeGeneratorProps> = () => {
  return null;
};