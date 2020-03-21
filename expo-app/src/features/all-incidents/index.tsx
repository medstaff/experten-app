import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Layout from "../../components/layout";
import IncidentInput from "./components/IncidentInput";
import { createStackNavigator } from "react-navigation-stack";
import { createBrowserApp } from "@react-navigation/web";
import LeftMenu from "../../components/left-menu";

export default function AllIncidents() {
  return (
    <Layout
      leftContent={<LeftMenu/>}
      midContent={<Text>test</Text>}
      rightContent={<Text>left</Text>}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#fff"
  }
});
