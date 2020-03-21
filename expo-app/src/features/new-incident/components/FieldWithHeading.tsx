import React from "react";
import { StyleSheet, Text, View, TextInput, Button, ShadowPropTypesIOS } from "react-native";

export interface Props{
    heading: string,
    placeholder: string,
}

export default function FieldWithHeading(props: Props) {
  return (
    <View style={styles.container}>
        <View style={{flex: 1}}>
            <Text>{props.heading}</Text>
        </View>
        <View style={{flex: 1}}>
            <TextInput placeholder={props.placeholder} />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: "#fff",
    justifyContent: "center",
    alignContent: "center",
  },
});
