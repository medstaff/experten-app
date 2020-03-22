import React from "react";
import { Text, View} from "react-native";

export interface Props {
  children: React.Component;
}
export default function SectionHeadline(props: Props) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "flex-start" }}>
      <Text
        style={{
          fontSize: 30
        }}
      >
        {props.children}
      </Text>
    </View>
  );
}
