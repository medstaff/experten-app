import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ShadowPropTypesIOS
} from "react-native";

export interface Props {
  heading: string;
  placeholder: string;
  onChangeText: any;
}

export default function FieldWithHeading(props: Props) {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <Text style={{ flex: 1 }}>{props.heading}</Text>
      </View>
      <View style={{ flex: 1 }}>
        <TextInput
          onChangeText={text => props.onChangeText(text)}
          style={{ borderRadius: 2, borderWidth: 3, padding: 5 }}
          placeholder={props.placeholder}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    flexDirection: "column",
    backgroundColor: "#fff"
  }
});
