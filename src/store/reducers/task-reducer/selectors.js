import {nameSpace} from "../root-reducer";

export const getTasks = (state) => state[nameSpace.TASKS].tasks;
export const loading = (state) => state[nameSpace.TASKS].loading;
