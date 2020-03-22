import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button, Picker, CheckBox } from "react-native";
import { Repository, RepositoryImpl } from "../../../repository/repository";
import CurrentHelperNumberCircle from "./CurrentHelperNumberCircle";
import { TextInput, State } from "react-native-gesture-handler";
import MessageInfoBox from "./MessageInfoBox";
import RolesPicker from "./RolesPicker";
import SkillsPicker from "./SkillsPicker";
import SectionHeadline from "./SectionHeadline";
import FieldWithHeading from "./FieldWithHeading";

export interface Props {
  modalCloseComponent: React.Component;
}

/**
 * This part should be showing filter options and the number of
 * available helpers matching the criteria
 * If the sorting is sufficient, you should post
 */
export default function IncidentInput(props: Props) {
  let [helpRequest, setHelpRequest] = useState({
    id: 3,
		name: "Babuschka Boi",
		roles: [],
		skills: [
		]
	});
	let [render, setRender] = useState(false);

	const updateHelpRequest = (helpRequest: HelpRequest) => {
		setHelpRequest(helpRequest);
		setRender(!render);
		console.log(helpRequest);
	}
  return (
    <View style={styles.container}>
      {props.modalCloseComponent}
      <View style={{ flex: 1, flexDirection: "row" }}>
        <SectionHeadline>1. Daten eingeben</SectionHeadline>
        <SectionHeadline>2. Verfügbare Helfer</SectionHeadline>
      </View>
			{/* {helpRequest.skills.map((item) => {return <Text>{item.name}</Text>})} */}
      <View style={{ flex: 10, flexDirection: "row" }}>
        {/* 1. card */}
        <View style={{ flex: 1 }}>
          <View style={{ flex: 1, flexDirection: "column" }}>
            <View
              style={{
                flex: 1,
                backgroundColor: "white",
                justifyContent: "center"
              }}
            >
              <View style={{ flex: 1, flexDirection: "row" }}>
                <View style={{ flex: 1 }}>
                  <FieldWithHeading heading={"Titel"} placeholder={"Titel"} />
                  <FieldWithHeading heading={"Ort"} placeholder={"Ort"} />
                </View>
                <View style={{ flex: 1 }}>
                  <FieldWithHeading heading={"Datum"} placeholder={"Datum"} />
                  <View
                    style={{ flex: 1, padding: 5, justifyContent: "center" }}
                  >
                    <Text style={{}}>Dauer vor. X Stunden</Text>
                  </View>
                </View>
              </View>
              <View
                style={{
									flex: 1,
									flexDirection: "row",
                  backgroundColor: "white",
                  justifyContent: "center",
									alignItems: "center"
                }}
              >
                <Text style={{flex: 1}}>Maps input</Text>
                <View style={{ flex: 1, backgroundColor: "white"}}>
                  <Text style={{}}>Placeholder</Text>
                </View>
              </View>
            </View>
            <View style={{ flex: 1, justifyContent: "center"}}>
              <Text>Placeholder</Text>
            </View>
          </View>
        </View>
        {/* 2. card */}
        <View style={{ flex: 1, flexDirection: "column" }}>
          <View style={{ flex: 2 }}>
            <View style={{ flex: 3, flexDirection: "row" }}>
              <CurrentHelperNumberCircle helpRequest={helpRequest} render={render}/>
              <RolesPicker helpRequest={helpRequest} setHelpRequest={setHelpRequest}/>
              <SkillsPicker helpRequest={helpRequest} setHelpRequest={updateHelpRequest} />
            </View>
          </View>
          <View style={{ flex: 2 }}>
            <View style={{ flex: 5, flexDirection: "row" }}>
              <View style={{ flex: 1, backgroundColor: "green" }}>
                <MessageInfoBox helpRequest={helpRequest} />
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
