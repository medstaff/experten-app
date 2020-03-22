import React, { useState, useEffect } from "react";
import MapView from "react-native-maps";
import Geocoder from "react-native-geocoding";

export interface Props {
  adressString: string;
  helpRequest: HelpRequest;
  updateHelpRequest: any;
}

Geocoder.init("AIzaSyC9cFDJwcroS2OcOO19SVJdYN9OQ6RYBWI");

const DEFAULT_LATLONG = { lat: 52.5186202, lng: 13.3761872 };

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
      })
      .catch(error => console.warn(error));
  };

  useEffect(() => {
    getGeocodeFromAdress(props.adressString);
  }, [props.adressString]);

  return (
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
        coordinate={{latitude: coords.lat, longitude: coords.lng}}
        title={props.adressString}
        description={"This is your location"}
      />
    </MapView>
  );
}
