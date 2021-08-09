import * as React from 'react';

import {
  Component,
  ComponentProps,
  Search,
  SearchProps,
  Options,
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

const Select: React.FC<ComponentProps> & Composition = (props) => {
  return (
    <Provider>
      <Component {...props} />
    </Provider>
  );
};

Select.displayName = 'Select';

Select.Search = Search;
Select.Options = Options;
Select.Pagination = Pagination;

export { Select };
