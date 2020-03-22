import React from "react";
import { Text } from "react-native";

/**
 * Text Box, which tells the user to create a message
 * @param props
 */
export default function MessageInfoBox() {
  return (
    <Text style={{ flex: 3 }}>
      Melde dich jetzt bei{" "}
      {/* <CurrentHelperNumber
                helpRequest={props.helpRequest}
                fontSize={30}
              />{" "} */}
      potentiellen Helfern in deiner Nähe. Beschreibe in deiner Nachricht den
      Einsatz möglichst genau.
    </Text>
  );
}
