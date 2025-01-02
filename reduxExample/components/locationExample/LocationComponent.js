import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Alert,
  ActivityIndicator,
} from "react-native";
import * as Location from "expo-location";

const LocationComponent = () => {
  const [location, setLocation] = useState(null);
  const [address, setAddress] = useState(null);
  const [loading, setLoading] = useState(false);

  // Function to request location permissions and fetch location
  const getLocation = async () => {
    try {
      setLoading(true);

      // Request permissions
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        Alert.alert(
          "Permission Denied",
          "Location permissions are required to use this feature."
        );
        setLoading(false);
        return;
      }

      // Get current location
      const loc = await Location.getCurrentPositionAsync({});
      console.log(loc);
      setLocation(loc);

      // Perform reverse geocoding
      getReverseGeocode(loc.coords.latitude, loc.coords.longitude);
    } catch (error) {
      Alert.alert("Error", error.message);
    } finally {
      setLoading(false);
    }
  };

  // Function to perform reverse geocoding
  const getReverseGeocode = async (latitude, longitude) => {
    try {
      const addresses = await Location.reverseGeocodeAsync({
        latitude,
        longitude,
      });
      if (addresses.length > 0) {
        setAddress(addresses[0]);
      } else {
        setAddress(null);
      }
    } catch (error) {
      Alert.alert("Reverse Geocoding Error", error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Get Location" onPress={getLocation} />
      {loading && <ActivityIndicator size="large" color="#0000ff" />}

      {location && (
        <View style={styles.info}>
          <Text style={styles.text}>Latitude: {location.coords.latitude}</Text>
          <Text style={styles.text}>
            Longitude: {location.coords.longitude}
          </Text>
          <Text style={styles.text}>
            Accuracy: {location.coords.accuracy} meters
          </Text>
        </View>
      )}

      {address && (
        <View style={styles.info}>
          <Text style={styles.text}>
            Address: {address.street}, {address.city}, {address.region},{" "}
            {address.country}
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  info: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "#e0e0e0",
    borderRadius: 8,
    width: "100%",
  },
  text: {
    fontSize: 16,
    marginVertical: 2,
  },
});

export default LocationComponent;
