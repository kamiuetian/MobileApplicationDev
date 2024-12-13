import React from "react";
import { Button, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { add, minus } from "../../redux/Actions";

function ReduxExample(props) {
  const counter = useSelector((state) => state.counter.counter); // Correct state access
  const dispatch = useDispatch();

  return (
    <View>
      <Text>{counter}</Text>
      <Button
        title="Add"
        onPress={() => {
          dispatch(add());
        }}
      />
      <Button
        title="Minus"
        onPress={() => {
          dispatch(minus());
        }}
      />
    </View>
  );
}

export default ReduxExample;
