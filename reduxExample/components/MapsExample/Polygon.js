import React from "react";
import { StyleSheet, View } from "react-native";
import MapView, { Polygon, Polyline, Circle } from "react-native-maps";

export default function Polygon() {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {/* Polyline Example */}
        <Polyline
          coordinates={[
            { latitude: 37.78825, longitude: -122.4324 },
            { latitude: 37.78835, longitude: -122.4424 },
            { latitude: 37.77825, longitude: -122.4524 },
          ]}
          strokeColor="blue"
          strokeWidth={4}
        />

        {/* Polygon Example */}
        <Polygon
          coordinates={[
            { latitude: 37.78325, longitude: -122.4324 },
            { latitude: 37.78825, longitude: -122.4224 },
            { latitude: 37.77825, longitude: -122.4224 },
          ]}
          strokeColor="green"
          fillColor="rgba(0, 255, 0, 0.4)"
          strokeWidth={2}
        />

        {/* Circle Example */}
        <Circle
          center={{ latitude: 37.78825, longitude: -122.4324 }}
          radius={500}
          strokeColor="red"
          fillColor="rgba(255, 0, 0, 0.2)"
        />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});
