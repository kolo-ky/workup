import {nameSpace} from "../root-reducer";

export const getTasks = (state) => state[nameSpace.TASKS].tasks.sort((a, b) => {
  if (a.order > b.order) {
    return 1;
  }

  if (a.order < b.order) {
    return -1;
  }

  return 0;
});

export const loading = (state) => state[nameSpace.TASKS].loading;
