import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { Button } from "react-native";

function Task(props) {
    const [count, setCount] = useState(0);
  console.log("my compoent loaded");
  //State hook
  const [status, setStatus] = useState("Active");
  //useEffect
  //useEffect without dependency
  useEffect(() => {
    console.log("useEffect without dependency");
  });
  useEffect(() => {
    console.log("useEffect with empty dependency");
  }, []);
  useEffect(() => {
    console.log("useEffect with count dependency");
  }, [count, status]);
  return (
    <View>
      
      <Button title="status" onPress={() => setStatus("Inactive")} />
    </View>
  );
}

export default Task;
