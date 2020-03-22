import React, { useState } from "react";
import { Text, View, CheckBox } from "react-native";
import { FlatList } from "react-native-gesture-handler";

export interface Props {
  helpRequest: HelpRequest;
  setHelpRequest: any;
}

export default function RolesPicker(props: Props) {
  const [roles, setRoles] = useState([
    { role: { id: 0, name: "Pfleger*in" }, checked: false },
    { role: { id: 1, name: "Reinigungskraft" }, checked: false },
    { role: { id: 2, name: "Sanitäter" }, checked: false },
    { role: { id: 3, name: "Noch mehr" }, checked: false }
  ]);

  /** helper function for the check boxes */
  const checkRole = (item, value) => {
    let prev = roles;
    let newArray = prev.slice();
    newArray[item.role.id].checked = value;
    setRoles(newArray);
    updateHelpRequest();
  };

  /** notify state Wrapper (IncidentInput) that the request changed */
  const updateHelpRequest = () => {
    let selected = roles.filter(item => {
      return item.checked === true;
    });
    let finalRoles = selected.map( (item, index) => {return item.role});
    let newHelpRequest = props.helpRequest;
    newHelpRequest.roles = finalRoles;
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
        <Text>Rollen</Text>
      </View>
      <View style={{ flex: 10 }}>
        <FlatList
          data={roles}
          renderItem={({ item }) => (
            <View style={{ flex: 1, flexDirection: "row", padding: 5 }}>
              <CheckBox
                value={item.checked}
                style={{marginRight: 5}}
                onValueChange={value => {
                  checkRole(item, value);
                }}
              />
              <Text>{item.role.name}</Text>
            </View>
          )}
        />
      </View>
    </View>
  );
}
