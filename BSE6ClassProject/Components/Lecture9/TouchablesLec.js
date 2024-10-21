import React from "react";
import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
  Pressable,
} from "react-native";

function TouchablesLec(props) {
  return (
    <>
      <TouchableWithoutFeedback
        onPress={() => {
          console.log("product clicked");
        }}
      >
        <View>
          <Image
            style={{ width: 150, height: 150 }}
            source={require("../../assets/icon.png")}
          ></Image>
          <Text>Label</Text>
        </View>
      </TouchableWithoutFeedback>
      <Pressable
        onHoverIn={() => {
          "Hover In Called";
        }}
        onPressIn={() => {
          console.log("pressIn");
        }}
        onPress={() => {
          console.log("OnPress");
        }}
        onPressOut={() => {
          console.log("onPressOut");
        }}
        onLongPress={() => {
          console.log("OnLongPress");
        }}
      >
        <View>
          <Image
            style={{ width: 150, height: 150 }}
            source={require("../../assets/icon.png")}
          ></Image>
          <Text>Producr no. 2</Text>
        </View>
      </Pressable>
    </>
  );
}

export default TouchablesLec;
