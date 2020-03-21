import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Layout() {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Text>Left Ment</Text>
      </View>
      <View style={styles.midContainer}>
        <Text>midContainer</Text>
      </View>
      <View style={styles.rightContainer}>
        <Text>Right Menu</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: "#fff",
  },
  leftContainer: {
    flex: 1,
    backgroundColor: '#aaa',
  },
  midContainer: {
    flex: 2,
    backgroundColor: 'red',
  },
  rightContainer: {
    flex: 1,
    backgroundColor: '#aaa',
  },
});
