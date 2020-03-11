import React from "react";
import { FlatList, StyleSheet, Image, View, Text } from "react-native";

import { Album as AlbumModel, Track as TrackModel } from "Models";

import { Track } from "./track";

interface Props {
  album: AlbumModel;
  play: (track: TrackModel) => void;
}

export const Album = ({ album, play }: Props) => (
  <View style={styles.container}>
    <View style={styles.albumDescription}>
      <Image style={styles.albumCover} source={{ uri: album.cover.url }} />
      <Text style={styles.albumTitle}>{album.title}</Text>
    </View>
    <FlatList
      data={album.tracks}
      renderItem={({ item }) => <Track track={item} play={play} />}
      keyExtractor={item => item.key}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    paddingLeft: 20,
    paddingTop: 20
  },
  albumDescription: {
    paddingBottom: 10,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start"
  },
  albumCover: {
    width: 100,
    height: 100
  },
  albumTitle: {
    paddingLeft: 10,
    fontSize: 16
  }
});
