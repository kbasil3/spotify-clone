import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import MyAppText from "./myApp";

const { width } = Dimensions.get("window");
const numColumns = 2;
const numItems = 8;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  column: {
    flex: 1,
    alignItems: "center",
  },
  item: {
    backgroundColor: "#535353",
    color: "#fff",
    margin: 5,
    padding: 5,
    height: 50,
    borderRadius: 5,
    width: width / numColumns - 25,
    alignItems: "center",
  },
});

const Playlist = () => {
  const itemsPerColumn = Math.ceil(numItems / numColumns);

  const items = [];
  for (let i = 0; i < numItems; i++) {
    items.push(<View key={i} style={styles.item}></View>);
  }

  const columns = [];
  for (let i = 0; i < numColumns; i++) {
    const startIndex = i * itemsPerColumn;
    const endIndex = Math.min((i + 1) * itemsPerColumn, numItems);
    columns.push(
      <View key={i} style={styles.column}>
        {items.slice(startIndex, endIndex)}
      </View>
    );
  }

  return <View style={styles.container}>{columns}</View>;
};

export default Playlist;
