import React from "react";
import { StyleSheet, View } from "react-native";

function Flexboxcomp(props) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "space-evenly",
        alignItems: "center",
        flexWrap: "wrap",
        flexDirection: "row",
      }}
    >
      <View style={[styles.contentblock]}></View>
      <View style={[styles.contentblock2]}></View>
      <View style={[styles.contentblock3]}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainwraper: {
    flex: 1,
    backgroundColor: "red",
  },
  contentblock: {
    width: 100,
    height: 300,
    backgroundColor: "yellow",
    alignSelf: "flex-start",
    fontSize: 16,
  },
  contentblock2: {
    width: 100,
    height: 100,
    backgroundColor: "red",
    fontSize: 16,
  },
  contentblock3: {
    width: 100,
    height: 100,
    backgroundColor: "green",
    fontSize: 16,
  },
});
export default Flexboxcomp;
