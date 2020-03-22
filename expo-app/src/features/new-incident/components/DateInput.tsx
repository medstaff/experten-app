import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";

export interface Props {
  helpRequest: HelpRequest;
  updateHelpRequest: (HelpRequest) => void;
}

/**
 * Simple Date Picker in html
 * TODO: Transform this html component into react
 * @param props
 */
export default function DateInput(props: Props) {
  /** state stored user input */
  let [date, setDate] = useState<string>();

  useEffect(() => {
    /* if date is changed, update parents HelpRequest */
    let prev = props.helpRequest;
    prev.created_at = date;
    props.updateHelpRequest(prev);
    console.log("Date");
    console.log(prev);
  }, [date]);

  return (
    <View style={{ flex: 1 , marginLeft: 5}}>
      <View style={{ flex: 1 }}>
        <Text>Datum</Text>
      </View>
      <View style={{ flex: 1 }}>
        <form>
          <input
            style={{ borderWidth: 3, padding: 5, borderColor: "black" }}
            type="date"
            value={date}
            onChange={e => setDate(e.target.value)}
          />
        </form>
      </View>
    </View>
  );
}
