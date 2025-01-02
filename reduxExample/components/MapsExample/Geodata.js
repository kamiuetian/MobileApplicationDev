import React from "react";
import { StyleSheet, View } from "react-native";
import MapView, { Geojson } from "react-native-maps";

const geoJsonData = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: { name: "Golden Gate Park" },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [-122.4862, 37.7694],
            [-122.4586, 37.7694],
            [-122.4586, 37.7786],
            [-122.4862, 37.7786],
            [-122.4862, 37.7694],
          ],
        ],
      },
    },
  ],
};

export default function Geodata() {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.7749,
          longitude: -122.4194,
          latitudeDelta: 0.1,
          longitudeDelta: 0.1,
        }}
      >
        <Geojson
          geojson={geoJsonData}
          strokeColor="blue"
          fillColor="rgba(0, 0, 255, 0.2)"
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
