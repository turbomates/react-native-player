import {
  LOAD_ALBUMS,
  LOAD_ALBUMS_SUCCESS,
  LOAD_ALBUMS_ERROR,
  PLAY_TRACK
} from "./types";
import { Album } from "Models";
import { Track } from "Models";

type LoadAlbumsAction = {
  type: typeof LOAD_ALBUMS;
};

export const loadAlbums = (): LoadAlbumsAction => ({
  type: LOAD_ALBUMS
});

type LoadAlbumsSuccessAction = {
  type: typeof LOAD_ALBUMS_SUCCESS;
  payload: Album[];
};

export const loadAlbumsSuccess = (
  payload: Album[]
): LoadAlbumsSuccessAction => ({
  type: LOAD_ALBUMS_SUCCESS,
  payload
});

type LoadAlbumsErrorAction = {
  type: typeof LOAD_ALBUMS_ERROR;
};

export const loadAlbumsError = (): LoadAlbumsErrorAction => ({
  type: LOAD_ALBUMS_ERROR
});

type PlayTrackAction = {
  type: typeof PLAY_TRACK;
  payload: Track;
};

export const playTrack = (payload: Track): PlayTrackAction => ({
  type: PLAY_TRACK,
  payload
});

export type AlbumAction =
  | LoadAlbumsAction
  | LoadAlbumsSuccessAction
  | LoadAlbumsErrorAction
  | PlayTrackAction;
