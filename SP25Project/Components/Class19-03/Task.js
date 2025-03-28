import React from "react";
import { FlatList, Text, View } from "react-native";
function ListItem(item) {
  return (
    <View>
      <Text>{item.title}</Text>
      <Text>{item.count}</Text>
    </View>
  );
}

function Task(props) {
  const DATA = [
    {
      id: "1",
      title: "First Item",
      count: 1,
    },
    {
      id: "2",
      title: "Second Item",
      count: 2,
    },
    {
      id: "3",
      title: "Third Item",
      count: 3,
    },
    {
      id: "1",
      title: "First Item",
      count: 1,
    },
    {
      id: "2",
      title: "Second Item",
      count: 2,
    },
    {
      id: "3",
      title: "Third Item",
      count: 3,
    },
    {
      id: "1",
      title: "First Item",
      count: 1,
    },
    {
      id: "2",
      title: "Second Item",
      count: 2,
    },
    {
      id: "3",
      title: "Third Item",
      count: 3,
    },
    {
      id: "1",
      title: "First Item",
      count: 1,
    },
    {
      id: "2",
      title: "Second Item",
      count: 2,
    },
    {
      id: "3",
      title: "Third Item",
      count: 3,
    },
    {
      id: "1",
      title: "First Item",
      count: 1,
    },
    {
      id: "2",
      title: "Second Item",
      count: 2,
    },
    {
      id: "3",
      title: "Third Item",
      count: 3,
    },
    {
      id: "1",
      title: "First Item",
      count: 1,
    },
    {
      id: "2",
      title: "Second Item",
      count: 2,
    },
    {
      id: "3",
      title: "Third Item",
      count: 3,
    },
  ];
  const renderItem = ({ item }) => {
    console.log(item);
    return <ListItem title={item.title} count={item.count} />;
  };
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        initialNumToRender={3}
      ></FlatList>
    </View>
  );
}

export default Task;
