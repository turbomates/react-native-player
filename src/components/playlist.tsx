import React from "react";
import { FlatList } from "react-native";

import { Album as AlbumModel, Track } from "Models";

import { Album } from "./album";

interface Props {
  albums: AlbumModel[];
  play: (track: Track) => void;
}

export const Playlist: React.FC<Props> = ({ albums, play }) => (
  <FlatList
    data={albums}
    renderItem={({ item }) => <Album album={item} play={play} />}
    keyExtractor={item => item.id}
  />
);
