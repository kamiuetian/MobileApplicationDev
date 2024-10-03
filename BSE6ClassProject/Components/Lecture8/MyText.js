import React from "react";
import { Text } from "react-native";
function MyText({ children }) {
  console.log(children);
  return (
    <Text
      style={{ color: "red", fontWeight: "bold", fontSize: 20 }}
      onPress={() => {
        console.log("Text is pressed");
      }}
    >
      {children}
    </Text>
  );
}

export default MyText;
