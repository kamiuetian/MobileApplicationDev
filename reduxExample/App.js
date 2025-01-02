import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text } from "react-native";

import LocationComponent from "./components/locationExample/LocationComponent";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <BluetoothPrinter></BluetoothPrinter> */}
      <LocationComponent />
      {/* <ScrollView>
        <Text style={styles.header}>Task List with Firebase</Text>
        <TaskForm />
        <ProjectList />
        <RegisterScreen></RegisterScreen>
        <LoginScreen />
      </ScrollView> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
});
