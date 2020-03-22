import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button, Picker, CheckBox } from "react-native";
import { Repository, RepositoryImpl } from "../../../repository/repository";
import CurrentHelperNumber from "./CurrentHelperNumber";
import { TextInput, State } from "react-native-gesture-handler";

export interface Props{
    helpRequest: HelpRequest,
}
export default function MessageInfoBox(props: Props) {
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