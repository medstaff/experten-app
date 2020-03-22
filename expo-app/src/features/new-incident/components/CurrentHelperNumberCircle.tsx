import React, {  } from "react";
import { View } from "react-native";
import CurrentHelperNumber from "./CurrentHelperNumber";
import { HelperSearchDefinition } from "../../../repository/repository";

export interface Props{
    helpRequest: HelpRequest,
    helperSearchDefinition: HelperSearchDefinition,
}

/**
 * Wraps the helper number in a circle for display
 * @param props 
 */
export default function CurrentHelperNumberCircle(props: Props) {
    console.log("Stage 1. helpersearchdef")
    console.log(props.helperSearchDefinition)
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
                helperSearchDefinition={props.helperSearchDefinition}
                render={props.render}
                fontSize={75}
              />
            </View>
        </View>
    );
}
