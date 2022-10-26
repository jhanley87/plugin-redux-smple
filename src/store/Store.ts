import { CustomTaskListState, setIsOpen, dismiss } from "./CustomTaskListState";
import customTaskLestReducer from "./CustomTaskListState";

export type ReduxSampleStore = {
  customTaskList: CustomTaskListState;
};

export const allActions = {
  customTaskList: {
    setIsOpen,
    dismiss,
  },
};

export const allReducers = {
  customTaskList: customTaskLestReducer,
};
