import * as React from 'react';
import { ReducerLayoutState, ReducerAction } from './interfaces';

export const initialState: ReducerLayoutState = {
  toggled: false,
  opened: false,
  hasOptions: false,
};

export const LayoutContext = React.createContext<ReducerLayoutState>(initialState);

export type Dispatch = (action: ReducerAction) => void;

// eslint-disable-next-line @typescript-eslint/no-empty-function
export const LayoutDispatchContext = React.createContext<Dispatch>(() => {});
