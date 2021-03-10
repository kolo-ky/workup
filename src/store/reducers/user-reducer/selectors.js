import {nameSpace} from "../root-reducer";

export const getUser = (state) => state[nameSpace.USER].user;
export const getAuth = (state) => state[nameSpace.USER].isAuthorized;
export const getPending = (state) => state[nameSpace.USER].pending;
