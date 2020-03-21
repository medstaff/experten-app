import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Link } from "@react-navigation/web";

export default function LeftMenu() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Link routeName="Suche">Ich suche</Link>
      <Link routeName="Antworten">Meine Antworten</Link>
    </View>
  );
}
