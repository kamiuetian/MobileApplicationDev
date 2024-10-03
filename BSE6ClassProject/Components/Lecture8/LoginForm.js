import React, { useState } from "react";
import {
  Button,
  Text,
  TextInput,
  StyleSheet,
  SafeAreaView,
} from "react-native";

function LoginForm(props) {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <TextInput
        style={styles.input}
        autoFocus={true}
        placeholder="Enter Username"
        value={username}
        onChangeText={(text) => {
          setUserName(text);
        }}
      ></TextInput>
      <TextInput
        style={styles.input}
        value={password}
        keyboardType="numeric"
        placeholder="Enter Password"
        onChangeText={(text) => {
          setPassword(text);
        }}
      ></TextInput>
      <Button title="Login" onPress={() => {}} color={"yellow"}></Button>
      <Text>{username}</Text>
      <Text>{password}</Text>
    </>
  );
}
const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
export default LoginForm;
