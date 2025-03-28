import React from "react";
import {
  View,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Pressable,
  ScrollView,
} from "react-native";

function Task(props) {
  return (
    <>
      <ScrollView>
        <TouchableWithoutFeedback onPress={() => alert("Hello")}>
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <View
              style={{ width: 50, height: 50, backgroundColor: "red" }}
            ></View>
            <Text>Task</Text>
            <Text>Another text</Text>
          </View>
        </TouchableWithoutFeedback>
        <Pressable
          pressRetentionOffset={{ bottom: 50, left: 50, right: 50, top: 50 }}
          hitSlop={50}
          onPressIn={() => console.log("on PressIn Called")}
          onPressOut={() => console.log("on PressOut Called")}
          onPress={() => console.log("on Press Called")}
          onLongPress={() => console.log("on Long Press Called")}
        >
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <View
              style={{ width: 50, height: 50, backgroundColor: "blue" }}
            ></View>
            <Text>Task</Text>
            <Text>Another text</Text>
          </View>
        </Pressable>
        <Pressable
          pressRetentionOffset={{ bottom: 50, left: 50, right: 50, top: 50 }}
          hitSlop={50}
          onPressIn={() => console.log("on PressIn Called")}
          onPressOut={() => console.log("on PressOut Called")}
          onPress={() => console.log("on Press Called")}
          onLongPress={() => console.log("on Long Press Called")}
        >
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <View
              style={{ width: 50, height: 50, backgroundColor: "blue" }}
            ></View>
            <Text>Task</Text>
            <Text>Another text</Text>
          </View>
        </Pressable>
        <Pressable
          pressRetentionOffset={{ bottom: 50, left: 50, right: 50, top: 50 }}
          hitSlop={50}
          onPressIn={() => console.log("on PressIn Called")}
          onPressOut={() => console.log("on PressOut Called")}
          onPress={() => console.log("on Press Called")}
          onLongPress={() => console.log("on Long Press Called")}
        >
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <View
              style={{ width: 50, height: 50, backgroundColor: "blue" }}
            ></View>
            <Text>Task</Text>
            <Text>Another text</Text>
          </View>
        </Pressable>
        <Pressable
          pressRetentionOffset={{ bottom: 50, left: 50, right: 50, top: 50 }}
          hitSlop={50}
          onPressIn={() => console.log("on PressIn Called")}
          onPressOut={() => console.log("on PressOut Called")}
          onPress={() => console.log("on Press Called")}
          onLongPress={() => console.log("on Long Press Called")}
        >
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <View
              style={{ width: 50, height: 50, backgroundColor: "blue" }}
            ></View>
            <Text>Task</Text>
            <Text>Another text</Text>
          </View>
        </Pressable>
        <Pressable
          pressRetentionOffset={{ bottom: 50, left: 50, right: 50, top: 50 }}
          hitSlop={50}
          onPressIn={() => console.log("on PressIn Called")}
          onPressOut={() => console.log("on PressOut Called")}
          onPress={() => console.log("on Press Called")}
          onLongPress={() => console.log("on Long Press Called")}
        >
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <View
              style={{ width: 50, height: 50, backgroundColor: "blue" }}
            ></View>
            <Text>Task</Text>
            <Text>Another text</Text>
          </View>
        </Pressable>
        <Pressable
          pressRetentionOffset={{ bottom: 50, left: 50, right: 50, top: 50 }}
          hitSlop={50}
          onPressIn={() => console.log("on PressIn Called")}
          onPressOut={() => console.log("on PressOut Called")}
          onPress={() => console.log("on Press Called")}
          onLongPress={() => console.log("on Long Press Called")}
        >
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <View
              style={{ width: 50, height: 50, backgroundColor: "blue" }}
            ></View>
            <Text>Task</Text>
            <Text>Another text</Text>
          </View>
        </Pressable>
        <Pressable
          pressRetentionOffset={{ bottom: 50, left: 50, right: 50, top: 50 }}
          hitSlop={50}
          onPressIn={() => console.log("on PressIn Called")}
          onPressOut={() => console.log("on PressOut Called")}
          onPress={() => console.log("on Press Called")}
          onLongPress={() => console.log("on Long Press Called")}
        >
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <View
              style={{ width: 50, height: 50, backgroundColor: "blue" }}
            ></View>
            <Text>Task</Text>
            <Text>Another text</Text>
          </View>
        </Pressable>
      </ScrollView>
    </>
  );
}

export default Task;
