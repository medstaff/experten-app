import React from "react";
import { Text, View } from "react-native";
import { HelperSearchDefinition } from "../../../repository/repository";

export interface Props {
  helperSearchDefinition: HelperSearchDefinition;
}

/**
 * Placeholder Text beneath Map
 * @param props
 */
export default function PlaceHolderText(props: Props) {
  return (
    <View style={{ flex: 1, justifyContent: "flex-start" }}>
      <Text>
        Versuche einmal mal am Bundestag (Reichstagsgebäude) nach Helfern zu
        suchen.
      </Text>
      <Text>
        Momentane Koordinaten: ({props.helperSearchDefinition.latitude},{" "}
        {props.helperSearchDefinition.longitude}).
      </Text>
    </View>
  );
}
