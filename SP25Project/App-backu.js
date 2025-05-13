import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text, Button } from "react-native";
import { useState } from "react";
import Greeting from "./Components/Greeting";
import Task from "./Components/Class08-04/Task";
import { NavigationContainer } from "@react-navigation/native";
export default function App() {
  const [greeting, SetGreeting] = useState("Hello world");

  //let greeting = "Hello world";
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Task />
      </View>
    </NavigationContainer>
  );
}
/*Greeting compoents */
/* function Greeting(props) {
  console.log(props);
  return (
    <>
      <Text> {props.message}</Text>;<Text> Goodbye</Text>;
    </>
  );
} */ //styles

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
