import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Modal from "modal-enhanced-react-native-web";
import IncidentInput from "../../features/new-incident/components/IncidentInput";

export interface Props {
  leftContent: Element;
  midContent: React.Component;
  rightContent: React.Component;
}

/**
 * layout is the main container. It create 2 or 3 columns and also
 * wraps the modal for the input
 * @param props
 */
export default function Layout(props: Props) {
  /** modal visibility state */
  let [isVisible, setIsVisible] = useState<boolean>(false);

  /**
   * Button to toggle the modal overlay
   * @param text Button Text
   * @param onPress callback
   */
  let renderButton = (text: string, onPress: () => void) => (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Text>{text}</Text>
      </View>
    </TouchableOpacity>
  );

  /**
   * create the content of the modal overlay
   */
  let renderModalContent = () => {
    return (
      <View style={styles.modalContentContainer}>
        <IncidentInput
          modalCloseComponent={renderButton("Close", () => {
            setIsVisible(false);
          })}
        />
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
    flexDirection: "row"
  },
  leftContainer: {
    flex: 1,
    borderRightWidth: 1,
    borderRightColor: "#00000000d3"
  },
  midContainer: {
    flex: 4,
    flexDirection: "column"
  },
  rightContainer: {
    flex: 1
  },
  modalContentContainer: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    padding: 22,
    borderRadius: 4,
    borderColor: "rgba(0, 0, 0, 0.1)"
  },
  button: {
    flex: 1,
    backgroundColor: "lightblue",
    padding: 12,
    margin: 16,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    borderColor: "rgba(0, 0, 0, 0.1)"
  }
});
