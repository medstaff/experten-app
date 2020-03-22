import React, { useState, useEffect } from "react";
import MapView from "react-native-maps";
import Geocoder from "react-native-geocoding";
import { HelperSearchDefinition } from "../../../repository/repository";
import { View } from "react-native";

export interface Props {
  adressString: string;
  helpRequest: HelpRequest;
  updateHelpRequest: any;
  updateHelperSearchDefinition: HelperSearchDefinition;
}

Geocoder.init("AIzaSyC9cFDJwcroS2OcOO19SVJdYN9OQ6RYBWI");

/**
 * starting location
 */
const DEFAULT_LATLONG = { lat: -7.30599, lng: 111 };

/**
 * Renders a *parent-filling* GoogleMap. Listens on the adressString
 * Prop in order to rerender to new Adress, while updating helpRequest
 * with the new coordinates in Order to communicate with the backend
 * @param props
 */
export default function AdressMapView(props: Props) {
  let [coords, setCoords] = useState(DEFAULT_LATLONG);
  const getGeocodeFromAdress = async (adress: String) => {
    Geocoder.from(adress)
      .then(json => {
        var location = json.results[0].geometry.location;
        console.log(location);
        setCoords(location);
        props.updateHelperSearchDefinition({
          latitude: location.lat,
          longitude: location.lng,
          skills: props.helpRequest.skills
        });
      })
      .catch(error => console.warn(error));
  };

  useEffect(() => {
    getGeocodeFromAdress(props.adressString);
  }, [props.adressString]);

  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 3,
        elevation: 3
      }}
    >
      <MapView
        style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }}
        initialRegion={{
          latitude: coords.lat,
          longitude: coords.lng,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}
        region={{
          latitude: coords.lat,
          longitude: coords.lng,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}
      >
        <MapView.Marker
          coordinate={{ latitude: coords.lat, longitude: coords.lng }}
          title={props.adressString}
          description={"This is your location"}
        />
      </MapView>
    </View>
  );
}
