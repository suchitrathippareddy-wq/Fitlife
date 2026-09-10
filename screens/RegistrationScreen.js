import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function RegistrationScreen({ navigation }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    // Empty fields
    if (
      name.trim() === "" ||
      email.trim() === "" ||
      phone.trim() === "" ||
      password.trim() === ""
    ) {
      Alert.alert("Error", "Please fill all fields");
      return;
    }

    // Email validation
    if (!email.includes("@")) {
      Alert.alert("Error", "Please enter a valid email");
      return;
    }

    // Phone validation
    if (phone.length !== 10) {
      Alert.alert(
        "Error",
        "Phone number must be 10 digits"
      );
      return;
    }

    // Password validation
    if (password.length < 6) {
      Alert.alert(
        "Error",
        "Password must be at least 6 characters"
      );
      return;
    }

    try {
      // Save user details
      await AsyncStorage.setItem(
        "userName",
        name.trim()
      );

      await AsyncStorage.setItem(
        "userEmail",
        email.trim()
      );

      await AsyncStorage.setItem(
        "userPhone",
        phone
      );

      await AsyncStorage.setItem(
        "userPassword",
        password
      );

      // Registration successful
      Alert.alert(
        "Registration Successful 🎉",
        "Your account has been created!",
        [
          {
            text: "OK",
            onPress: () => {
              navigation.replace("Login");
            },
          },
        ]
      );

    } catch (error) {
      console.log("Registration Error:", error);
      Alert.alert(
        "Error",
        "Something went wrong. Please try again."
      );
    }
  };

  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        FitLife 💪
      </Text>

      <Text style={styles.subtitle}>
        Create your account
      </Text>

      {/* Name */}
      <TextInput
        style={styles.input}
        placeholder="Full Name"
        value={name}
        onChangeText={setName}
      />

      {/* Email */}
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />

      {/* Phone */}
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        keyboardType="phone-pad"
        maxLength={10}
        value={phone}
        onChangeText={setPhone}
      />

      {/* Password */}
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />

      {/* Create Account */}
      <TouchableOpacity
        style={styles.button}
        onPress={handleRegister}
      >
        <Text style={styles.buttonText}>
          CREATE ACCOUNT
        </Text>
      </TouchableOpacity>

      {/* Login */}
      <TouchableOpacity
        onPress={() => navigation.replace("Login")}
      >
        <Text style={styles.loginText}>
          Already have an account? Login
        </Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#F5F7FA",
  },

  title: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    color: "#172033",
  },

  subtitle: {
    fontSize: 16,
    textAlign: "center",
    color: "#777777",
    marginTop: 5,
    marginBottom: 30,
  },

  input: {
    backgroundColor: "#FFFFFF",
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
    fontSize: 16,
  },

  button: {
    backgroundColor: "#172033",
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 5,
  },

  buttonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 15,
  },

  loginText: {
    textAlign: "center",
    color: "#172033",
    marginTop: 20,
    fontWeight: "600",
  },
});