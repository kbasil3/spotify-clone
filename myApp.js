import React from "react";
import { Text, StyleSheet, Platform } from "react-native";

const MyApp = ({ children, style, ...props }) => {
  return (
    <Text style={[styles.text, style]} {...props}>
      {children}
    </Text>
  );
};

const fontFamily = Platform.OS === "ios" ? "Helvetica" : "sans-serif";

const styles = StyleSheet.create({
  text: {
    fontFamily: fontFamily,
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default MyApp;
