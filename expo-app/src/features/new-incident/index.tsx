import React, {Component} from "react";
import { Text, View } from "react-native";
import Layout from "../../components/layout";
import IncidentInput from "./components/IncidentInput";
import LeftMenu from "../../components/left-menu";
import RepositoryImpl from "../../repository/repository";

const repository = new RepositoryImpl();

export default function NewIncident() {
  return (
    <Layout
      leftContent={<LeftMenu repository={repository} selectItem={request => console.log(request)}/>}
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
