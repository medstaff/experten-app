import React from "react";
import { Text, View, CheckBox } from "react-native";

export interface Props {
  helpRequest: HelpRequest;
}
export default function RolesPicker() {
  return (
    <View style={{ flex: 1, backgroundColor: "green" }}>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Text>Rollen</Text>
      </View>
      <View style={{ flex: 1 }}>
        <CheckBox value={true} />
      </View>
    </View>
  );
}
