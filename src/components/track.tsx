import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

import { Track as TrackModel } from "Models";

interface Props {
  track: TrackModel;
  play: (track: TrackModel) => void;
}

export const Track = ({ track, play }: Props) => (
  <TouchableOpacity style={styles.container} onPress={() => play(track)}>
    <Text style={styles.title}>{track.title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    paddingTop: 5,
    paddingBottom: 5
  },
  title: {
    fontSize: 15
  }
});
