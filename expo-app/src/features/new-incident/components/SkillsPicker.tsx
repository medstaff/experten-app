import React, {  } from "react";
import { Text, View, CheckBox } from "react-native";

export interface Props {
  helpRequest: HelpRequest;
}
export default function SkillsPicker() {
  return (
    <View style={{ flex: 1, backgroundColor: "grey" }}>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Text>Skills</Text>
      </View>
      <View style={{ flex: 1 }}>
        <CheckBox value={true} />
      </View>
    </View>
  );
}
