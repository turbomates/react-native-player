import { combineReducers } from "redux";
import { albumReducer as album, State } from "./album";

export const allReducers = combineReducers({ album });

declare module "Models" {
  export type RootState = {
    album: State;
  };
}
