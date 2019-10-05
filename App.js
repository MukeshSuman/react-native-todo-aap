import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Header } from "react-native-elements";

export default function App() {
  return (
    <View>
      <Header
        leftComponent={{ icon: "menu", color: "#fff" }}
        centerComponent={{ text: "MY TITLE", style: { color: "#fff" } }}
        rightComponent={{ icon: "home", color: "#fff" }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
