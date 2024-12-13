import React, { useState } from "react";
import { View, Button, Alert } from "react-native";
import { BleManager } from "react-native-ble-plx";
import ThermalPrinterModule from "escpos-thermalprinter";

const manager = new BleManager();

const BluetoothPrinter = () => {
  const [device, setDevice] = useState(null);

  // Scan and connect to the printer
  const connectToPrinter = async () => {
    manager.startDeviceScan(null, null, (error, scannedDevice) => {
      if (error) {
        Alert.alert("Scan Error", error.message);
        return;
      }

      if (scannedDevice.name && scannedDevice.name.includes("Printer")) {
        manager.stopDeviceScan();
        scannedDevice
          .connect()
          .then((connectedDevice) => {
            setDevice(connectedDevice);
            Alert.alert("Connected to Printer", connectedDevice.name);
          })
          .catch((err) => Alert.alert("Connection Error", err.message));
      }
    });
  };

  // Print a receipt
  const printReceipt = async () => {
    if (!device) {
      Alert.alert("Error", "Please connect to a printer first.");
      return;
    }

    try {
      const printData = [
        { text: "Store Name", align: "center", bold: true },
        { text: "123 Main Street", align: "center" },
        { text: "-----------------------------" },
        { text: "Item 1       $10.00" },
        { text: "Item 2       $15.00" },
        { text: "-----------------------------" },
        { text: "Total:       $25.00", bold: true },
        { text: "Thank you!", align: "center" },
      ];

      await ThermalPrinterModule.printBluetooth(device.id, printData);
      Alert.alert("Success", "Receipt printed successfully!");
    } catch (error) {
      Alert.alert("Print Error", error.message);
    }
  };

  return (
    <View>
      <Button title="Connect to Printer" onPress={connectToPrinter} />
      <Button title="Print Receipt" onPress={printReceipt} disabled={!device} />
    </View>
  );
};

export default BluetoothPrinter;
