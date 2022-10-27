import { CustomTaskListState, setIsOpen, dismiss } from "./slices/CustomTaskListState";
import customTaskLestReducer from "./slices/CustomTaskListState";

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
