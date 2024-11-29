import React from "react";
import { View } from "react-native";
import axios from "axios";
import { useEffect } from "react";
function ApiAxios(props) {
  //   useEffect(() => {
  //     axios
  //       .get("https://jsonplaceholder.org/status")
  //       .then((response) => {
  //         console.log(response.data.title);
  //       })
  //       .catch(() => {});
  //   }, []);
  useEffect(() => {
    axios
      .post("https://dummyjson.com/auth/login", {
        user: "emilys",
        password: "emilyspass",
        expiresInMins: 30,
      })
      .then((response) => {
        console.log(response);
      });
  }, []);
  return <View></View>;
}

export default ApiAxios;
