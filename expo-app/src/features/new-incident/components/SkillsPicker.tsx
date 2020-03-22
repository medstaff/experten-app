import React, { useState } from "react";
import { Text, View, CheckBox } from "react-native";
import { FlatList } from "react-native-gesture-handler";

export interface Props {
  helpRequest: HelpRequest;
  setHelpRequest: any;
}

export default function SkillsPicker(props: Props) {
  const [skills, setSkills] = useState([
    { skill: { id: 0, name: "Erste Hilfe" }, checked: false },
    { skill: { id: 1, name: "Altenpflege" }, checked: false },
    { skill: { id: 2, name: "Noch mehr" }, checked: false }
  ]);

  /** helper function for the check boxes */
  const checkSkill = (item, value) => {
    let prev = skills;
    let newArray = prev.slice();
    newArray[item.skill.id].checked = value;
    setSkills(newArray);
    updateHelpRequest();
  };

  /** notify state Wrapper (IncidentInput) that the request changed */
  const updateHelpRequest = () => {
    let selected = skills.filter(item => {
      return item.checked === true;
    });
    let finalSkills = selected.map( (item, index) => {return item.skill});
    let newHelpRequest = props.helpRequest;
    newHelpRequest.skills = finalSkills;
    //console.log(newHelpRequest);
    props.setHelpRequest(newHelpRequest);
  };

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <View
        style={{
          flex: 1,
          justifyContent: "flex-start",
          alignItems: "flex-start"
        }}
      >
        <Text>Skills</Text>
      </View>
      <View style={{ flex: 10 }}>
        <FlatList
          data={skills}
          renderItem={({ item }) => (
            <View style={{ flex: 1, flexDirection: "row",padding: 5}}>
              <CheckBox
                value={item.checked}
                style={{marginRight: 5}}
                onValueChange={value => {
                  checkSkill(item, value);
                }}
              />
              <Text>{item.skill.name}</Text>
            </View>
          )}
        />
      </View>
    </View>
  );
}
