import React, { createContext, useState } from "react";
import { View } from "react-native";
import Component2 from "./Component2";
import Component3 from "./Component3";
function ContextExample(props) {
  const userContext = createContext();
  const fruitContext = createContext();
  const [user, setUser] = useState();

  return (
    <userContext.Provider value={{ user, setUser }}>
      <View>
        <Component2></Component2>
        <Component3></Component3>
      </View>
    </userContext.Provider>
  );
}

export default ContextExample;
