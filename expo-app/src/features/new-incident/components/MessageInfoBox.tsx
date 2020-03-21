import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button, Picker, CheckBox } from "react-native";
import { Repository, RepositoryImpl } from "../../../repository/repository";
import CurrentHelperNumber from "./CurrentHelperNumber";
import { TextInput, State } from "react-native-gesture-handler";

export default function MessageInfoBox() {
    return(
        <Text style={{ flex: 1 }}>
              Melde dich jetzt bei{" "}
              <CurrentHelperNumber
                helpRequest={{ id: "3", name: "Babuschka Boi" }}
                fontSize={30}
              />{" "}
              potentiellen Helfern in deiner Nähe. Beschreibe in deiner
              Nachricht den Einsatz möglichst genau.
            </Text>
    );
}