export type Dispatch = (action: ReducerAction) => void;

export interface ReducerLayoutState {
  toggled: boolean;
  opened: boolean;
  hasOptions: boolean;
  onSetToggled?: () => void;
  onSetOpened?: () => void;
  onSetHasOptions?: () => void;
}

export enum ReducerLayoutActionType {
  SET_TOGGLED,
  SET_OPENED,
  SET_OPTIONS,
}

export type ReducerAction = {
  type: ReducerLayoutActionType.SET_TOGGLED | ReducerLayoutActionType.SET_OPENED | ReducerLayoutActionType.SET_OPTIONS;
  payload: boolean;
};
