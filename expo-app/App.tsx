import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Navigator from "./src/navigation";


export default function App() {
    return <Navigator />
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#fff"
  },
  leftContainer: {
    flex: 1,
    backgroundColor: "#aaa"
  },
  midContainer: {
    flex: 2,
    backgroundColor: "red"
  },
  rightContainer: {
    flex: 1,
    backgroundColor: "#aaa"
  }
});
