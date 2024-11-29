import React, { useContext } from "react";
import { View, Text } from "react-native";

function Component2(props) {
  const myContext = useContext(userContext);
  return (
    <View>
      <Text>{myContext.user}</Text>
    </View>
  );
}

export default Component2;
