import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Layout from "../../components/layout";

export default function NewIncident() {
  return (
    <Layout />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: "#fff",
  },
});
