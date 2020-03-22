import React, {  } from "react";
import { View } from "react-native";
import CurrentHelperNumber from "./CurrentHelperNumber";

export interface Props{
    helpRequest: HelpRequest,
}

/**
 * Wraps the helper number in a circle for display
 * @param props 
 */
export default function CurrentHelperNumberCircle(props: Props) {
    return(
        <View
            style={{ flex: 1, justifyContent: "flex-start", alignItems: "center", padding: 5 }}
          >
            <View
              style={{
                backgroundColor: "grey",
                width: 100,
                height: 100,
                borderRadius: 100 / 2,
                borderWidth: 3,
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <CurrentHelperNumber
                helpRequest={props.helpRequest}
                render={props.render}
                fontSize={75}
              />
            </View>
        </View>
    );
}