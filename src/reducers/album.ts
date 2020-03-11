import { LOAD_ALBUMS_SUCCESS, LOAD_ALBUMS_ERROR } from "../actions/types";
import { AlbumAction } from "../actions";
import { Album } from "Models";

export interface State {
  items: Album[];
}

const initialState: State = {
  items: []
};

export const albumReducer = (
  state: State = initialState,
  action: AlbumAction
): State => {
  switch (action.type) {
    case LOAD_ALBUMS_SUCCESS:
      return { ...state, items: action.payload };
    case LOAD_ALBUMS_ERROR:
      return { ...state, items: [] };
    default:
      return state;
  }
};
