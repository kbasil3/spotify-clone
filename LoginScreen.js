// LoginScreen.js
import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Button } from "react-native-paper";
import MyApp from "./myApp";
import MyAppTextInput from "./myAppTextInput";

function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = () => {
    if (email === "" || password === "") {
      setErrorMessage("Please fill out all fields");
      return;
    }

    console.log("Email:", email);
    console.log("Password:", password);

    navigation.navigate("Main");
  };

  return (
    <View style={styles.container}>
      <MyApp style={styles.title}>Millions of Songs</MyApp>
      <MyApp style={styles.title}>Only on Spotify</MyApp>
      {errorMessage ? <MyApp style={styles.error}>{errorMessage}</MyApp> : null}
      <View style={styles.buttonContainer}>
        <MyAppTextInput
          label="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.input}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <MyAppTextInput
          label="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          style={styles.input}
          secureTextEntry
        />
        <Button mode="contained" onPress={handleLogin} style={styles.button}>
          Login
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#000",
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
    textAlign: "center",
    color: "#fff",
  },
  input: {
    marginBottom: 10,
    width: 240,
    justifyContent: "center",
    backgroundColor: "#fff",
    borderRadius: 50,
  },
  button: {
    marginTop: 30,
    backgroundColor: "#1DB954",
    borderRadius: 50,
    width: 240,
  },
  error: {
    color: "red",
    marginBottom: 20,
    textAlign: "center",
  },
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default LoginScreen;
