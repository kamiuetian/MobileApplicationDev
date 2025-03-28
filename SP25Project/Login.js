/**Login Component */
import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleEmailChange = (value) => {
    setEmail(value);
  };
  const handlePasswordChange = (value) => {
    setPassword(value);
  };
  const handleSubmit = () => {
    console.log("Email:", email, "Password:", password);
  };
  return (
    <View style={styles.container}>
      <Text>Login Form</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={handleEmailChange}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={handlePasswordChange}
      />
      <Button title="Login" onPress={handleSubmit} />
    </View>
  );
}
/**Styleshett */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "80%",
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 10,
  },
});
