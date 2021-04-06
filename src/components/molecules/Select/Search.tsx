import * as React from 'react';
import { InputSearch, InputSearchProps } from 'components/molecules/InputSearch/InputSearch';

export interface SearchProps extends InputSearchProps {
  className?: string;
}

export const Search: React.FC<SearchProps> = (props) => <InputSearch {...props} />;
