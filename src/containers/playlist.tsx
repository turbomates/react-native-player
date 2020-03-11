import React, { useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Track } from "Models";

import { albums } from "../selectors";
import { Playlist } from "../components/playlist";
import { loadAlbums, playTrack } from "../actions";

export const PlaylistContainer = () => {
  const albumsItems = useSelector(albums);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadAlbums());
  }, [dispatch]);

  const play = useCallback(
    (track: Track) => {
      dispatch(playTrack(track));
    },
    [dispatch]
  );

  return <Playlist albums={albumsItems} play={play} />;
};
