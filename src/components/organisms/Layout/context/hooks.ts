import * as React from 'react';
import { LayoutContext, LayoutDispatchContext } from './create';
import { ReducerLayoutState, Dispatch } from './interfaces';

export const useLayoutState = (): ReducerLayoutState => {
  const context = React.useContext(LayoutContext);

  if (context === undefined) {
    throw new Error('useLayoutState must be used within a ProcedureProvider');
  }
  return context;
};

export const useLayoutDispatch = (): Dispatch => {
  const context = React.useContext(LayoutDispatchContext);

  if (context === undefined) {
    throw new Error('useLayoutDispatch must be used within a ProcedureProvider');
  }

  return context;
};

export const useLayout = (): [ReducerLayoutState, Dispatch] => {
  return [useLayoutState(), useLayoutDispatch()];
};
