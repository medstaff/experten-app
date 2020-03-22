import React, { Component, useState, useEffect } from "react";
import { Text, View } from "react-native";
import RepositoryImpl, { Repository } from "../../../repository/repository";

export interface Props {
  helpRequest: HelpRequest;
  fontSize: number;
}

/**
 * Current Helper number displays the number of helpers, given
 * a request (to which the number matches)
 */
export default function CurrentHelperNumber(props: Props) {
  const [numHelpers, setNumHelpers] = useState(0);
  const [stateHelpRequest, setStateHelpRequest] = useState(props.helpRequest);

  let repository: Repository = new RepositoryImpl();

  useEffect(() => {
    async function fetchNumHelpers() {
      let helpRequest: HelpRequest = props.helpRequest;
      let helpers = await repository.findHelpers({
        longitude: 0,
        latitude: 0,
        requiredSkills: helpRequest.skills
      });
      if (helpRequest.skills === undefined || helpRequest.skills.length == 0) {
        setNumHelpers(helpers.count);
      } else if(helpRequest.skills.length >= 2) {
        setNumHelpers(1);
      } else{
          setNumHelpers(2)
      }
    }
    fetchNumHelpers();
  }, [stateHelpRequest.skills]);

  /* TODO: for reuse add modifiable style */
  return <Text style={{ fontSize: props.fontSize }}>{numHelpers}</Text>;
}
