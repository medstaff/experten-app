import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Alert,
  Picker
} from "react-native";
import FieldWithHeading from "./FieldWithHeading";

export default function IncidentInput() {
  return (
    <View style={styles.container}>
     <Text>Suche</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
    justifyContent: "center",
    alignContent: "center"
  }
});
