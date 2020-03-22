import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button, Picker, CheckBox } from "react-native";
import { Repository, RepositoryImpl } from "../../../repository/repository";
import CurrentHelperNumberCircle from "./CurrentHelperNumberCircle";
import {
  TextInput,
  State,
  TouchableOpacity
} from "react-native-gesture-handler";
import MessageInfoBox from "./MessageInfoBox";
import RolesPicker from "./RolesPicker";
import SkillsPicker from "./SkillsPicker";
import SectionHeadline from "./SectionHeadline";
import FieldWithHeading from "./FieldWithHeading";
import { LinearGradient } from "expo-linear-gradient";
import AdressMapView from "./AdressMapView";


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
    skills: []
  });
	let [render, setRender] = useState(false);
	let [adressString, onAdressChange] = useState()

  const updateHelpRequest = (helpRequest: HelpRequest) => {
    setHelpRequest(helpRequest);
    setRender(!render);
    console.log(helpRequest);
  };
  return (
    <View style={styles.container}>
      <script src="https://maps.googleapis.com/maps/api/js?key=<YOUR_GOOGLE_API_KEY>"></script>
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
                  <FieldWithHeading heading={"Ort"} placeholder={"Ort"} onChangeText={onAdressChange} />
                </View>
                <View style={{ flex: 1 }}>
                  <FieldWithHeading heading={"Datum"} placeholder={"Datum"}  />
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
                <AdressMapView adressString={adressString} helpRequest={helpRequest} updateHelpRequest={updateHelpRequest}/>
              </View>
            </View>
            <View style={{ flex: 1, justifyContent: "center" }}>
              <Text>Placeholder</Text>
            </View>
          </View>
        </View>
        {/* 2. card */}
        <View style={{ flex: 1, flexDirection: "column" }}>
          <View style={{ flex: 2 }}>
            <View style={{ flex: 3, flexDirection: "row" }}>
              <CurrentHelperNumberCircle
                helpRequest={helpRequest}
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
              <View style={{ flex: 1, backgroundColor: "white" }}>
                <View style={{ flex: 1, alignContent: "center" }}>
                  <Text style={{ alignContent: "center", fontSize: 30 }}>
                    Helfer anfordern
                  </Text>
                </View>
                <MessageInfoBox helpRequest={helpRequest} />
                {/* <TextInput
                  multiline={true}
                  style={{ flex: 3, backgroundColor: "white" }}
                  placeholder={"Nachricht"}
                ></TextInput> */}
                <TouchableOpacity onPress={() => alert("submit")}>
                  <LinearGradient
                    start={[0, 0.5]}
                    end={[1, 0.5]}
                    colors={["#000", "red"]}
                    style={{ borderRadius: 5 }}
                  >
                    <View
                      style={{
                        margin: 1,
                        backgroundColor: "white",
                        borderRadius: 5
                      }}
                    >
                      <Text
                        style={{
                          margin: 4,
                          paddingHorizontal: 6,
                          textAlign: "center",
                          backgroundColor: "white",
                          color: "#000",
                          fontSize: 30
                        }}
                      >
                        Jetzt anfordern
                      </Text>
                    </View>
                  </LinearGradient>
                </TouchableOpacity>
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
