import {nameSpace} from "../root-reducer";

export const getMessages = (state) => state[nameSpace.MESSAGES].messages;
