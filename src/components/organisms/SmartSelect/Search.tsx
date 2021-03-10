import * as React from 'react';
import { InputSearch, InputSearchProps } from 'components/molecules/InputSearch/InputSearch';

export const Search: React.FC<InputSearchProps> = (props) => {
  return <InputSearch {...props} />;
};
