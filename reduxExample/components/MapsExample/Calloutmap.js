import React from "react";
import { StyleSheet, View } from "react-native";
import MapView, { Marker, Callout } from "react-native-maps";

export default function Calloutmap() {
  const [markers, setMarkers] = useState([
    {
      coordinate: { latitude: 37.78825, longitude: -122.4324 },
      title: "San Francisco",
      description: "Golden Gate Bridge, Alcatraz Island, and more!",
    },
  ]);
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
        {/* Adding a marker with a callout */}

        {markers.map((marker, index) => (
          <Marker
            key={index}
            coordinate={marker.coordinate}
            title={marker.title}
            description={marker.description}
          >
            <Callout>
              <View style={styles.callout}>
                <Text style={styles.title}>{marker.title}</Text>
                <Text>{marker.description}</Text>
              </View>
            </Callout>
          </Marker>
        ))}
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
  callout: {
    width: 200,
    padding: 10,
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
  },
});
