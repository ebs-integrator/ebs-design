import { SearchProps, OptionsProps, OptionsComposition, PaginationProps } from './components';

export interface SelectComposition {
  Options: React.FC<OptionsProps> & OptionsComposition;
  Search: React.FC<SearchProps>;
  Pagination: React.FC<PaginationProps>;
}

export type SelectMode = 'single' | 'multiple' | 'tags';
export type OptionsMode = 'dropdown' | 'box';
export type OptionValue = string | number;
export type Option = {
  value: OptionValue;
  text: React.ReactNode;
};
