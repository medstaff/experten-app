import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Modal from "modal-enhanced-react-native-web";
import IncidentInput from "../../features/new-incident/components/IncidentInput";

export interface Props {
  leftContent: React.Component;
  midContent: React.Component;
  rightContent: React.Component;
}

export default function Layout(props: Props) {
  let [isVisible, setIsVisible] = useState(true);

  let renderButton = (text, onPress) => (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
            flex: 1,
          backgroundColor: "lightblue",
          padding: 12,
          margin: 16,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 4,
          borderColor: "rgba(0, 0, 0, 0.1)"
        }}
      >
        <Text>{text}</Text>
      </View>
    </TouchableOpacity>
  );

  let renderModalContent = () => {
    return (
      <View
        style={{
            flex: 1,
          backgroundColor: "white",
          padding: 22,
          borderRadius: 4,
          borderColor: "rgba(0, 0, 0, 0.1)"
        }}
      >
        <IncidentInput modalCloseComponent={renderButton("Close", () => {
          setIsVisible(false);
        })}/>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
          {props.leftContent}
          {renderButton("+", () => {
            setIsVisible(true);
          })}
          <Modal isVisible={isVisible}>{renderModalContent()}</Modal>
          </View>
      <View style={styles.midContainer}>{props.midContent}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },
  leftContainer: {
    flex: 1,
    borderRightWidth: 1,
    borderRightColor: "#00000000d3",
  },
  midContainer: {
    flex: 4,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  rightContainer: {
    flex: 1,
  }
});
