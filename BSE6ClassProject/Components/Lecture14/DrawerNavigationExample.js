import * as React from "react";
import { Text, View, Linking } from "react-native";
import {
  NavigationContainer,
  useNavigation,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { Button } from "@react-navigation/elements";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import Icon from "react-native-ionicons";
import TabBarNavigationExample from "../Lecture13/TabBarNavigationExample";
const Drawer = createDrawerNavigator();
function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Help"
        onPress={() => Linking.openURL("https://mywebsite.com/help")}
      />
    </DrawerContentScrollView>
  );
}
const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "blue",
    secondary: "yellow",
  },
};
const MyDarkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: "grey",
    secondary: "yellow",
    background: "black",
  },
};
function MyDrawer() {
  return (
    <NavigationContainer theme={DarkTheme}>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Profile" component={ProfileScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen from Drawer</Text>
      <Button onPress={() => navigation.navigate("Profile")}>
        Go to Profile
      </Button>
    </View>
  );
}

function ProfileScreen() {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Profile Screen from Drawer</Text>
      <Button onPress={() => navigation.navigate("Home")}>Go to Home</Button>
    </View>
  );
}

export default function DrawerNavigationExample() {
  return <MyDrawer />;
}
