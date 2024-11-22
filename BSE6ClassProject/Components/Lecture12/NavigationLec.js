import * as React from "react";
import { View, Text, Button } from "react-native";
import {
  createStaticNavigation,
  useNavigation,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

function HomeScreen({ route }) {
  const navigation = useNavigation();
  const name = route.params.name;
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "red",
      }}
    >
      <Text>Home Screen</Text>
      <Button
        title="Move to Details"
        onPress={() => {
          navigation.navigate("Details", { name: "abc" });
        }}
      ></Button>
      <Button
        title="Update title"
        onPress={() => {
          navigation.setOptions({ title: "abc" });
        }}
      ></Button>
    </View>
  );
}
function DetailScreen({ route }) {
  const navigation = useNavigation();
  //const params = route.params;
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Details Screen</Text>

      <Button
        title="Move to Details"
        onPress={() => {
          navigation.push("Details");
        }}
      ></Button>
      <Button
        title="Move Back"
        onPress={() => {
          navigation.goBack();
        }}
      ></Button>
      <Button
        title="Pass data Back"
        onPress={() => {
          navigation.navigate("Home", params.name);
        }}
      ></Button>
    </View>
  );
}
function LogoTitle() {
  return (
    <Image
      style={{ width: 50, height: 50 }}
      source={require("../../assets/icon.png")}
    />
  );
}
const RootStack = createNativeStackNavigator({
  screenOptions: {
    headerStyle: {
      backgroundColor: "#f4511e",
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold",
    },
  },
  initialRouteName: "Home",
  screens: {
    Details: DetailScreen,
    Home: {
      screen: HomeScreen,
      options: ({ route }) => ({
        title: route.params.name,
        headerTitle: (props) => <LogoTitle {...props} />,
        headerStyle: { backgroundColor: "lightblue" },
      }),
      initialParams: { name: "xyz" },
    },
  },
});

const Navigation = createStaticNavigation(RootStack);

function NavigationLec(props) {
  return <Navigation></Navigation>;
}

export default NavigationLec;
