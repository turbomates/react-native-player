import { call, put, takeLatest } from "redux-saga/effects";
import { Album } from "Models";
import { LOAD_ALBUMS } from "../actions/types";
import { loadAlbumsSuccess, loadAlbumsError } from "../actions";
import { fetchAlbums } from "../services/api";

function* loadAlbumsSaga() {
  try {
    const response: Album[] = yield call(fetchAlbums);

    yield put(loadAlbumsSuccess(response));
  } catch (error) {
    console.log("loadAlbumsSaga error: ", error);
    yield put(loadAlbumsError());
  }
}

export function* albumSagas() {
  yield takeLatest(LOAD_ALBUMS, loadAlbumsSaga);
}
