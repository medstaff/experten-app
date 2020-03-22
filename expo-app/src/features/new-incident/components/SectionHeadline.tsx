import React from "react";
import { Text, View, CheckBox, ShadowPropTypesIOS } from "react-native";

export interface Props {
  children: React.Component;
}

/**
 * Simple Headline
 * @param props 
 */
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
