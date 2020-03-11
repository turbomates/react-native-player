import { call, take } from "redux-saga/effects";
import { Audio } from "expo-av";

import { PLAY_TRACK } from "../actions/types";

export function* playTrackSaga() {
  let audio = null;
  while (true) {
    const { payload: track } = yield take(PLAY_TRACK);

    if (audio != null) {
      yield audio.unloadAsync();
      audio = null;
    }

    const source = { uri: track.media.mp3.url };
    const initialStatus = {
      shouldPlay: true,
      isMuted: false,
      isLooping: false
    };
    const { sound } = yield Audio.Sound.createAsync(source, initialStatus);
    audio = sound;
  }
}
