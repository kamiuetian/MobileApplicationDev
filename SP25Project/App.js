import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text, Button } from "react-native";
import { useState } from "react";
import Greeting from "./Components/Greeting";
import Task from "./Components/Class25-03/Task";
export default function App() {
  const [greeting, SetGreeting] = useState("Hello world");

  //let greeting = "Hello world";
  return (
    //jsx
    <View style={styles.container}>
      <Task count={count} setCount={setCount} />
      <Text>Count: {props.count}</Text>
      <Button title="counter" onPress={() => props.setCount(props.count + 1)} />
      {/*<Task />*/}
      {/*<Greeting name="kamran" message={greeting} />
      <Greeting name="ali" message={greeting} />
      <Greeting name="ahmed" message={greeting} />*/}
    </View>
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
