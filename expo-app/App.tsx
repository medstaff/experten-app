import React from "react";
import { StyleSheet, Text, View } from "react-native";
import NewIncident from "./src/features/new-incident";
import {createStackNavigator} from 'react-navigation-stack';
import {createBrowserApp} from '@react-navigation/web';
import Layout from "./src/components/layout";
import LeftMenu from "./src/components/left-menu";
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
