import React, { useState, useEffect } from "react";
import { Text } from "react-native";
import RepositoryImpl, {
  Repository,
  HelperSearchDefinition
} from "../../../repository/repository";

export interface Props {
  helpRequest: HelpRequest;
  helperSearchDefinition: HelperSearchDefinition;
  fontSize: number;
}

/**
 * Current Helper number displays the number of helpers, given
 * a request (to which the number matches)
 */
export default function CurrentHelperNumber(props: Props) {
  const [numHelpers, setNumHelpers] = useState(0);
  const [stateHelpRequest] = useState(props.helpRequest);

  let repository: Repository = new RepositoryImpl();

  console.log("Stage 2");
      console.log(props.helperSearchDefinition);
  useEffect(() => {
    async function fetchNumHelpers() {
      
      if (props.helperSearchDefinition) {
        let helpRequest: HelpRequest = props.helpRequest;
        let helpers = await repository.findHelpers(
          props.helperSearchDefinition
        );

        if (
          helpRequest.skills === undefined ||
          helpRequest.skills.length == 0
        ) {
          setNumHelpers(helpers.count);
        } else if (helpRequest.skills.length >= 2) {
          setNumHelpers(1);
        } else {
          setNumHelpers(Math.floor(helpers.count / (1 + Math.random() * 4)));
        }
      }
    }
    fetchNumHelpers();
  }, [stateHelpRequest.skills, props.helperSearchDefinition.latitude]);

  /* TODO: for reuse add modifiable style */
  return <Text style={{ fontSize: props.fontSize }}>{numHelpers}</Text>;
}
