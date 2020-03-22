import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button, Picker, CheckBox } from "react-native";
import { Repository, RepositoryImpl } from "../../../repository/repository";
import CurrentHelperNumberCircle from "./CurrentHelperNumberCircle";
import { TextInput, State } from "react-native-gesture-handler";
import MessageInfoBox from "./MessageInfoBox";
import RolesPicker from "./RolesPicker";
import SkillsPicker from "./SkillsPicker";
import SectionHeadline from "./SectionHeadline";


export interface Props{
	modalCloseComponent: React.Component,
}

/**
 * This part should be showing filter options and the number of
 * available helpers matching the criteria
 * If the sorting is sufficient, you should post
 */
export default function IncidentInput(props: Props) {
  let [helpRequest, setHelpRequest] = useState({
    id: "3",
    name: "Babuschka Boi"
  });

  return (
    <View style={styles.container}>
			{props.modalCloseComponent}
      {/* 1. card */}
      <View style={{ flex: 1 }}>
        <SectionHeadline>1. Wo?</SectionHeadline>
        <View style={{ flex: 3, flexDirection: "column" }}>
          <View
            style={{
              flex: 2,
              backgroundColor: "green",
              justifyContent: "center"
            }}
          >
            <TextInput
              style={{ flex: 1, backgroundColor: "white", margin: 5, borderRadius: 5, padding: 5}}
              placeholder={"Titel"}
            />
            <TextInput
              style={{ flex: 1, backgroundColor: "white", margin: 5, padding: 5, borderRadius: 5 }}
							placeholder={"Addresse"}
            />
          </View>
          <View style={{ flex: 1, backgroundColor: "grey", justifyContent: "center", alignItems: "center" }}>
            <Text>Maps input</Text>
          </View>
        </View>
      </View>
      {/* 2. card */}
      <View style={{ flex: 2 }}>
        <SectionHeadline>2. Deine Helfer</SectionHeadline>
        <View style={{ flex: 3, flexDirection: "row" }}>
          <CurrentHelperNumberCircle helpRequest={helpRequest}/>
          <RolesPicker helpRequest={helpRequest}/>
          <SkillsPicker helpRequest={helpRequest}/>
        </View>
      </View>
      {/* 3. card */}
      <View style={{ flex: 2 }}>
        <SectionHeadline>3. Helfer anfordern</SectionHeadline>
        <View style={{ flex: 5, flexDirection: "row" }}>
          <View style={{ flex: 1, backgroundColor: "green" }}>
            <MessageInfoBox />
            <TextInput
              multiline={true}
              style={{ flex: 3, backgroundColor: "white" }}
              placeholder={"Nachricht"}
            ></TextInput>
            <Button
              style={{ flex: 1 }}
              onPress={() => alert("submit")}
              title={"Jetzt senden"}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
		maxWidth: 1024,
    flexDirection: "column",
    backgroundColor: "white"
  }
});
