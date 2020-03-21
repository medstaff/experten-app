import React from "react";
import { StyleSheet, Text, View } from "react-native";

export interface Props {
  leftContent: React.Component;
  midContent: React.Component;
  rightContent: React.Component;
}

export default function Layout(props: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        {props.leftContent}
      </View>
      <View style={styles.midContainer}>
        <Text>{props.midContent}</Text>
      </View>
      {/* <View style={styles.rightContainer}>
        {props.rightContent}
      </View> */}
    </View>
  );
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
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
  },
  rightContainer: {
    flex: 1,
    backgroundColor: "#aaa"
  }
});
