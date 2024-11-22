import React, { useEffect, useState } from "react";
import { View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Button } from "react-native";
function AsycStoreExample(props) {
  const [login, setLogin] = useState("loggedout");
  /**UseEffect */
  useEffect(
    () => {
      console.log("UseEffect Executed");
    },
    [login] /**Condition for calling this sideEffect */
  );

  const storeData = async (value) => {
    setLogin("loggedin");
    try {
      await AsyncStorage.setItem("login", login);
    } catch (e) {
      // saving error
    }
  };
  const getData = async (key) => {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
        const parseddata = JSON.parse(value);
        console.log(parseddata.name);
      }
    } catch (e) {
      // error reading value
    }
  };
  return (
    <View>
      <Button
        title="Login"
        onPress={() => {
          storeData();
        }}
      ></Button>
      <Button
        title="Logout"
        onPress={() => {
          setLogin("loggedout");
        }}
      ></Button>

      {/* <Button
        title="Get Login data"
        onPress={() => {
          getData("myClass");
        }}
      ></Button> */}
    </View>
  );
}

export default AsycStoreExample;
