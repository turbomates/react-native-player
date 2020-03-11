import { fork } from "redux-saga/effects";

import { albumSagas } from "./album";
import { playTrackSaga } from "./track";

export function* root() {
  yield fork(albumSagas);
  yield fork(playTrackSaga);
}
