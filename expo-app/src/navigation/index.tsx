import { createStackNavigator } from "react-navigation-stack";
import {createBrowserApp} from '@react-navigation/web';
import AllIncidents from "../features/all-incidents";
import NewIncident from "../features/new-incident";


const Navigator = createStackNavigator(
  {
    Suche: NewIncident,
    Antworten: AllIncidents
  }
)

const container = createBrowserApp(Navigator);

export default container;

