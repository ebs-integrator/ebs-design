import * as React from 'react';
import useSetState from 'react-use/esm/useSetState';
import { Loader } from 'components';

import { Option } from './interfaces';

interface StateProps {
  options: Option[];
  cache: Option[];
  newOption?: string;
  search: string | boolean;
  style?: React.CSSProperties;
  offsetBottom?: number;
  maxHeight?: number;
  isOpen: boolean;
  isLoaded: boolean;
}

export interface ContextProps extends StateProps {
  setState: (value: Partial<StateProps> | ((prevState: StateProps) => Partial<StateProps>)) => void;
  setLoading: (value: boolean) => void;
}

const Context = React.createContext<ContextProps>({
  options: [],
  cache: [],
  search: false,
  isOpen: false,
  isLoaded: false,
  setState: () => null,
  setLoading: () => null,
});

const Provider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [state, setState] = useSetState<StateProps>({
    options: [],
    cache: [],
    search: false,
    isOpen: false,
    isLoaded: false,
  });
  const [isLoading, setLoading] = React.useState(false);

  const values = {
    ...state,
    setState,
    setLoading,
  };

  return (
    <Context.Provider value={values}>
      <Loader loading={isLoading} fixed>
        {!isLoading && children}
      </Loader>
    </Context.Provider>
  );
};

export { Context, Provider };
