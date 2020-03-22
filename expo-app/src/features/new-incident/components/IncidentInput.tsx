import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { HelperSearchDefinition } from "../../../repository/repository";
import CurrentHelperNumberCircle from "./CurrentHelperNumberCircle";
import MessageInfoBox from "./MessageInfoBox";
import RolesPicker from "./RolesPicker";
import SkillsPicker from "./SkillsPicker";
import SectionHeadline from "./SectionHeadline";
import FieldWithHeading from "./FieldWithHeading";
import AdressMapView from "./AdressMapView";
import SubmitButton from "./SubmitButton";
import DateInput from "./DateInput";
import PlaceHolderText from "./PlaceHolderText";

export interface Props {
  modalCloseComponent: React.Component;
}

/**
 * This part should be showing filter options and the number of
 * available helpers matching the criteria
 * If the sorting is sufficient, you should post
 */
export default function IncidentInput(props: Props) {
  /** state saved HelpRequest */
  let [helpRequest, setHelpRequest] = useState<HelpRequest>({
    id: 3,
    name: "Babuschka Boi",
    created_at: "",
    date_start: "",
    roles: [],
    skills: [],
    helpers: []
  });

  /** state saved helperSearchDefinition */
  let [helperSearchDef, setHelperSearchDef] = useState<HelperSearchDefinition>({
    latitude: 52,
    longitude: 21,
    requiredSkills: []
  });

  /** ugly hack = temporary workaround :) */
  let [render, setRender] = useState<boolean>(false);

  /** user input, seperate save to pass to adress */
  let [adressString, onAdressChange] = useState<string>();

  /**
   * Setter, for updating the state-saved helpRequest
   * @param helpRequest
   */
  const updateHelpRequest = (helpRequest: HelpRequest) => {
    setHelpRequest(helpRequest);
    /* ugly hack TODO: better state management, need to wait for final interfaces */
    setRender(!render);
    console.log(helpRequest);
  };

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
                flex: 2,
                backgroundColor: "white",
                justifyContent: "center",
                padding: 5
              }}
            >
              <View style={{ flex: 1, flexDirection: "row" }}>
                <View style={{ flex: 1 }}>
                  <FieldWithHeading
                    heading={"Titel"}
                    placeholder={"Titel"}
                    onChangeText={text => {
                      let prev = helpRequest;
                      prev.name = String(text);
                      console.log(prev);
                      setHelpRequest(prev);
                    }}
                    onEndEditing={() => {}}
                  />
                  <FieldWithHeading
                    heading={"Ort"}
                    placeholder={"Ort"}
                    onChangeText={onAdressChange}
                    onEndEditing={() => {}}
                  />
                </View>
                <View style={{ flex: 1 }}>
                  <DateInput
                    helpRequest={helpRequest}
                    updateHelpRequest={updateHelpRequest}
                  />
                  <View
                    style={{ flex: 1, padding: 5, justifyContent: "center" }}
                  >
                    <Text style={{}}>Dauer vor. X Stunden</Text>
                  </View>
                </View>
              </View>
              <AdressMapView
                adressString={adressString}
                helpRequest={helpRequest}
                updateHelpRequest={updateHelpRequest}
                updateHelperSearchDefinition={setHelperSearchDef}
              />
            </View>
            <PlaceHolderText helperSearchDefinition={helperSearchDef} />
          </View>
        </View>
        {/* 2. card */}
        <View style={{ flex: 1, flexDirection: "column" }}>
          <View style={{ flex: 2, padding: 5 }}>
            <View style={{ flex: 3, flexDirection: "row" }}>
              <CurrentHelperNumberCircle
                helpRequest={helpRequest}
                helperSearchDefinition={helperSearchDef}
                render={render}
              />
              <RolesPicker
                helpRequest={helpRequest}
                setHelpRequest={setHelpRequest}
              />
              <SkillsPicker
                helpRequest={helpRequest}
                setHelpRequest={updateHelpRequest}
              />
            </View>
          </View>
          <View style={{ flex: 2 }}>
            <View style={{ flex: 5, flexDirection: "row" }}>
              <View style={{ flex: 1, backgroundColor: "white", padding: 10 }}>
                <SectionHeadline>Helfer anfordern</SectionHeadline>
                <MessageInfoBox helpRequest={helpRequest} />
                <SubmitButton />
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
