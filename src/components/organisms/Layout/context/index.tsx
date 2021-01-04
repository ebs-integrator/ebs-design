import React, { useCallback, useReducer, useEffect } from 'react';
import { LayoutContext, LayoutDispatchContext } from './create';
import { useLayoutState, useLayout, useLayoutDispatch } from './hooks';
import { initialState } from './create';
import { reducer } from './reducer';
import { ReducerLayoutActionType, ReducerLayoutState } from './interfaces';

const LayoutProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setToggled = useCallback(
    (value: boolean) => {
      dispatch({ type: ReducerLayoutActionType.SET_TOGGLED, payload: value });
    },
    [dispatch],
  );

  const setOpened = useCallback(
    (value: boolean) => {
      dispatch({ type: ReducerLayoutActionType.SET_OPENED, payload: value });
    },
    [dispatch],
  );

  const onSetToggled = useCallback(() => setToggled(!state.toggled), [setToggled, state.toggled]);
  const onSetOpened = useCallback(() => setOpened(!state.opened), [setOpened, state.opened]);

  useEffect(() => {
    const storeToggled = localStorage.getItem('toggled');

    if (storeToggled && storeToggled === 'true') {
      setToggled(true);
    }
  }, [setToggled]);

  return (
    <LayoutContext.Provider value={{ ...state, onSetToggled, onSetOpened } as ReducerLayoutState}>
      <LayoutDispatchContext.Provider value={dispatch}>{children}</LayoutDispatchContext.Provider>
    </LayoutContext.Provider>
  );
};

export { LayoutProvider, useLayout, useLayoutDispatch, useLayoutState, ReducerLayoutActionType };
