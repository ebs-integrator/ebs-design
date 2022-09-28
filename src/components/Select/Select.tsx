import * as React from 'react';

import {
  Select,
  SelectProps,
  Search,
  SearchProps,
  OptionsComponent,
  OptionsProps,
  OptionsComposition,
  Pagination,
  PaginationProps,
} from './components';
import { Provider } from './Context';

export interface Composition {
  Options: React.FC<OptionsProps> & OptionsComposition;
  Search: React.FC<SearchProps>;
  Pagination: React.FC<PaginationProps>;
}

const SelectComponent = (props: SelectProps) => {
  return (
    <Provider>
      <Select {...props} />
    </Provider>
  );
};

SelectComponent.displayName = 'Select';

SelectComponent.Search = Search;
SelectComponent.Options = OptionsComponent;
SelectComponent.Pagination = Pagination;

export { SelectComponent };
