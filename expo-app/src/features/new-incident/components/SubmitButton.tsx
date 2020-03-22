import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

/**
 * Text Box, which tells the user to create a message
 * @param props
 */
export default function SubmitButton() {
  return (
    <TouchableOpacity onPress={() => alert("submit")}>
      <LinearGradient
        start={[0, 0.5]}
        end={[1, 0.5]}
        colors={["#000", "red"]}
        style={{ borderRadius: 5 }}
      >
        <View
          style={{
            margin: 1,
            backgroundColor: "white",
            borderRadius: 5
          }}
        >
          <Text
            style={{
              margin: 4,
              paddingHorizontal: 6,
              textAlign: "center",
              backgroundColor: "white",
              color: "#000",
              fontSize: 30
            }}
          >
            Jetzt anfordern
          </Text>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
}
