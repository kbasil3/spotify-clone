// MyAppTextInput.js
import React from "react";
import { TextInput as PaperTextInput } from "react-native-paper";
import { StyleSheet } from "react-native";

const MyAppTextInput = ({ style, ...props }) => {
  return (
    <PaperTextInput
      style={[styles.input, style]}
      theme={{
        roundness: 50,
        fonts: { regular: { fontFamily: "sans-serif" } },
      }}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    fontFamily: "sans-serif",
    borderRadius: 50,
  },
});

export default MyAppTextInput;
