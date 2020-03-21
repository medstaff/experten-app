import React from "react";
import { Text, View } from "react-native";
import Layout from "../../components/layout";
import IncidentInput from "./components/IncidentInput";
import LeftMenu from "../../components/left-menu";

export default function NewIncident() {
  return (
    <Layout
      leftContent={<LeftMenu />}
      midContent={<IncidentInput />}
      rightContent={
        <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
          <Text>right</Text>
        </View>
      }
    />
  );
}

/* const Home = createStackNavigator(
  {
    NeuerEintrag: NewIncident,
    AlleEinträge: AllIncidents
  }
)

const container = createBrowserApp(Home);

export default container;
 */
