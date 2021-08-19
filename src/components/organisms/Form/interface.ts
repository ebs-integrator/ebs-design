import { ColProps } from 'components/atoms/Grid/Col/Col';
import { AlignItems, JustifyContent } from 'types';

// Form type
export type FormType = 'vertical' | 'horizontal';

export interface LabelOptions extends React.HTMLAttributes<HTMLDivElement> {
  align?: AlignItems;
  justify?: JustifyContent;
  col?: ColProps; // The layout for input label
}

export interface ControlOptions extends React.HTMLAttributes<HTMLDivElement> {
  col?: ColProps; // The layout for input control
}
