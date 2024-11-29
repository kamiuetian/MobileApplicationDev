import "./gesture-handler";
import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View, SafeAreaView } from "react-native";
import { useState } from "react";
import { MyCustomComponent3 } from "./Components/MyCustonComponent3";
import MyText from "./Components/Lecture8/MyText";
import LoginForm from "./Components/Lecture8/LoginForm";
import TouchablesLec from "./Components/Lecture9/TouchablesLec";
import Flexboxcomp from "./Components/Lecture10/Flexboxcomp";
import FlatListComp from "./Components/Lecture11/FlatListComp";
import NavigationLec from "./Components/Lecture12/NavigationLec";
import TabBarNavigationExample from "./Components/Lecture13/TabBarNavigationExample";
import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigationExample from "./Components/Lecture14/DrawerNavigationExample";
import AsycStoreExample from "./Components/Lecture15/AsycStoreExample";
import ApiAxios from "./Components/Lecture16/ApiAxios";
export default function App() {
  return (
    //jsx
    <>
      <View style={{ flex: 1 }}>
        <ApiAxios></ApiAxios>
        {/* <AsycStoreExample></AsycStoreExample> */}
        {/* <DrawerNavigationExample></DrawerNavigationExample> */}
        {/* <TabBarNavigationExample></TabBarNavigationExample> */}

        {/*<NavigationLec></NavigationLec>*/}
        {/*<FlatListComp></FlatListComp>*}
        {/**<Flexboxcomp></Flexboxcomp>*/}
        {/**Lecture 9 */}
        {/*<TouchablesLec></TouchablesLec>*/}
        {/**Lecture 8 */}
        {/*<MyText>this is My Custom Text</MyText>
        <MyText>this is My description</MyText>
        <LoginForm></LoginForm>*}
        {/* <MyCustomComponent person="ALi" age="30"></MyCustomComponent>
        <MyCustomComponent2 person="ALi" age="30"></MyCustomComponent2>

        <StatusBar style="auto" />*/}
      </View>
    </>
  );
}
//{person:"", age:""}}
let [s1, s2, s3, s4, s5] = [1, 2, 3, 4, 5];

function MyCustomComponent(props) {
  console.log("Mycomponent called");
  //let mystate= "logged in"
  let [mystate, updatemystate] = useState(0);
  let { person1, age } = props;
  return (
    <>
      <Text style={styles.baseText}>
        Your name is <Text style={styles.innerText}>ALI</Text>
      </Text>
      <Button
        title="button"
        onPress={() => {
          //mystate = "loggedout";
          updatemystate(!mystate);
          console.log(mystate);
        }}
      ></Button>
    </>
  );
}
function MyCustomComponent2(props) {
  console.log("Mycomponent2 called");
  //let mystate= "logged in"
  let [mystate, updatemystate] = useState();
  let { person1, age } = props;
  return (
    <>
      <Text>
        Your name is {person1} and your state is {mystate}
      </Text>
      <Button
        title="button"
        onPress={() => {
          //mystate = "loggedout";
          updatemystate("loggedout");
          console.log(mystate);
        }}
      ></Button>
    </>
  );
}
const styles = StyleSheet.create({
  baseText: {
    fontWeight: "bold",
  },
  innerText: {
    color: "red",
  },
});
// npx expo-create-app --template
