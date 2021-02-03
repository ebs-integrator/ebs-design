import { ColProps } from 'components/atoms/Grid/Col/Col';
import { AlignItems, JustifyContent } from 'types';

// Form type
export type FormType = 'vertical' | 'horizontal';

export interface LabelOptions {
  align?: AlignItems;
  justify?: JustifyContent;
  col?: ColProps; // The layout for input label
  className?: string;
}

export interface ControlOptions {
  col?: ColProps; // The layout for input control
  className?: string;
}
