import * as React from 'react';

import { Select, SelectProps, Search, OptionsComponent, Pagination } from './components';
import { Provider } from './Context';

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
