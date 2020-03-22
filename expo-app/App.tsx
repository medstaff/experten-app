import React from "react";
import { StyleSheet} from "react-native";
import Navigator from "./src/navigation";


export default function App() {
    return <Navigator />
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },
  leftContainer: {
    flex: 1,
  },
  midContainer: {
    flex: 2,
  },
  rightContainer: {
    flex: 1,
  }
});
