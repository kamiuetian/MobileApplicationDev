// In App.js in a new project

import * as React from "react";
import { View, Text, Button, TextInput } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Screen Details"
        onPress={() => {
          navigation.navigate("Details", { name: "Details" });
        }}
      ></Button>
    </View>
  );
}
function DetailsScreen({ navigation, route }) {
  //const [myparam, setMyParam] = React.useState();
  //setMyParam(route.params.name);
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Data reeived from Home :</Text>

      <Button
        title="Go to Home"
        onPress={() => {
          //navigation.navigate("Home", {name:myparam});
          //navigation.popTo("Home", { name: myparam });
          //navigation.goBack();
          navigation.popToTop();
          //navigation.push("Details");
        }}
      ></Button>
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  let conf = {
    headerStyle: { backgroundColor: "#f4511e" },
    headerTintColor: "white",
  };
  /**()title:abc, headerStyle:ddsdss */
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={conf}>
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={({ route }) => {}}
        />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
