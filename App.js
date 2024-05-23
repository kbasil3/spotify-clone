import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "./Header";
import Playlist from "./Playlist";

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Playlist />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
