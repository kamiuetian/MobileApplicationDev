import { useState } from "react";
import React from "react";
import { Button, TextInput } from "react-native";

function Task(props) {
  const [task, setTask] = useState("");
  const handleChangeText = (text) => {
    if (text.length > 5) {
      setTask(text);
    }
  };
  const handleFormSubmission = () => console.log("Task is submitted: ", task);
  return (
    <>
      <TextInput
        placeholder="Enter your task"
        onChangeText={handleChangeText}
        autoComplete="email"
        keyboardType="numeric"
      />
      <TextInput
        //border-width
        style={{ borderWidth: 1, borderColor: "red", width: 200, height: 40 }}
        onChangeText={(text) => {
          console.log(text);
        }}
      />
      <Button
        style={{ width: 200, height: 40 }}
        title="Press Me"
        onPress={handleFormSubmission}
        color={"#841584"}
      ></Button>
    </>
  );
}

export default Task;
