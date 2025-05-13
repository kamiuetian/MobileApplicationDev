import React from "react";
import { View, Text } from "react-native";

/**Flexbox  */
function Task(props) {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        backgroundColor: "yellow",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      <View
        style={{
          //flex: 2,
          width: 50,
          height: 50,
          backgroundColor: "red",
          alignContent: "center",
          alignItems: "center",
          //alignSelf: "flex-start",
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>1</Text>
      </View>
      <View
        style={{
          //flex: 2,
          width: 50,
          height: 50,
          //alignSelf: "flex-start",
          backgroundColor: "green",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>2</Text>
      </View>
      <View
        style={{
          //flex: 1,
          width: 50,
          height: 50,
          backgroundColor: "blue",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>3</Text>
      </View>
      <View
        style={{
          //flex: 1,
          width: 50,
          height: 50,
          backgroundColor: "purple",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>4</Text>
      </View>
    </View>
  );
}

export default Task;
