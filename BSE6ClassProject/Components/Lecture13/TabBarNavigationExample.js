import { View, Platform } from "react-native";
import { useLinkBuilder, useTheme } from "@react-navigation/native";
import { Text, PlatformPressable } from "@react-navigation/elements";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
    </View>
  );
}

function ProfileScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Profile Screen</Text>
    </View>
  );
}
const Tab = createBottomTabNavigator();
function TabBarNavigationExample() {
  return (
    <Tab.Navigator  screenOptions={{ tabBarLabelPosition: "beside-icon" }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "Test",
          tabBarLabel: "My Tab",
          tabBarIcon: ({ color, size }) => {
            <FontAwesomeIcon
              color={color}
              size={size}
              icon="fa-solid fa-font-awesome"
            />;
          },
        }}
      />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default TabBarNavigationExample;
