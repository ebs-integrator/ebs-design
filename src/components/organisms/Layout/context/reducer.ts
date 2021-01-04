import { initialState } from './create';
import { ReducerLayoutState, ReducerAction, ReducerLayoutActionType } from './interfaces';

export const reducer = (state: ReducerLayoutState = initialState, action: ReducerAction): ReducerLayoutState => {
  switch (action.type) {
    case ReducerLayoutActionType.SET_TOGGLED: {
      return {
        ...state,
        toggled: action.payload,
      };
    }

    case ReducerLayoutActionType.SET_OPENED: {
      return {
        ...state,
        opened: action.payload,
      };
    }

    case ReducerLayoutActionType.SET_OPTIONS: {
      return {
        ...state,
        hasOptions: action.payload,
      };
    }

    default:
      throw new Error('Unexpected action type');
  }
};
