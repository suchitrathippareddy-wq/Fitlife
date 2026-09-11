import React, { useState, useCallback } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function EditProfileScreen({ navigation }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const loadProfile = async () => {
    try {
      const savedName = await AsyncStorage.getItem("userName");
      const savedEmail = await AsyncStorage.getItem("userEmail");
      const savedPhone = await AsyncStorage.getItem("userPhone");

      setName(savedName || "");
      setEmail(savedEmail || "");
      setPhone(savedPhone || "");
    } catch (error) {
      console.log(error);
    }
  };

  useFocusEffect(
    useCallback(() => {
      loadProfile();
    }, [])
  );

  const handleSave = async () => {
    const cleanName = name.trim();
    const cleanEmail = email.trim();
    const cleanPhone = phone.replace(/\D/g, "");

    if (!cleanName || !cleanEmail || !cleanPhone) {
      Alert.alert("Error", "Please fill all fields");
      return;
    }

    if (!cleanEmail.includes("@")) {
      Alert.alert("Error", "Please enter a valid email");
      return;
    }

    if (cleanPhone.length !== 10) {
      Alert.alert("Error", "Phone number must be 10 digits");
      return;
    }

    try {
      await AsyncStorage.multiSet([
        ["userName", cleanName],
        ["userEmail", cleanEmail],
        ["userPhone", cleanPhone],
      ]);

      console.log("PROFILE SAVED SUCCESSFULLY");

      Alert.alert(
        "Success 🎉",
        "Profile updated successfully!",
        [
          {
            text: "OK",
            onPress: () => navigation.goBack(),
          },
        ]
      );
    } catch (error) {
      console.log("SAVE ERROR:", error);
      Alert.alert("Error", "Profile update failed");
    }
  };

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Edit Profile ✏️</Text>

      <Text style={styles.subtitle}>
        Update your personal information
      </Text>

      <Text style={styles.label}>Full Name</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
      />

      <Text style={styles.label}>Email</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />

      <Text style={styles.label}>Phone Number</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter 10 digit phone number"
        keyboardType="phone-pad"
        maxLength={10}
        value={phone}
        onChangeText={setPhone}
      />

      <TouchableOpacity
        style={styles.saveButton}
        onPress={handleSave}
        activeOpacity={0.7}
      >
        <Text style={styles.saveText}>
          💾 SAVE CHANGES
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.cancelButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.cancelText}>
          CANCEL
        </Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F7FA",
    padding: 20,
    justifyContent: "center",
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#172033",
    textAlign: "center",
  },

  subtitle: {
    fontSize: 15,
    color: "#777777",
    textAlign: "center",
    marginTop: 6,
    marginBottom: 35,
  },

  label: {
    fontSize: 14,
    fontWeight: "600",
    color: "#172033",
    marginBottom: 7,
  },

  input: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 15,
    fontSize: 16,
    marginBottom: 18,
    borderWidth: 1,
    borderColor: "#E0E0E0",
  },

  saveButton: {
    backgroundColor: "#172033",
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 10,
  },

  saveText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "bold",
  },

  cancelButton: {
    paddingVertical: 15,
    alignItems: "center",
    marginTop: 10,
  },

  cancelText: {
    color: "#777777",
    fontSize: 15,
    fontWeight: "600",
  },
});