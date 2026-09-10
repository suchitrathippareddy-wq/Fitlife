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

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (email.trim() === "" || password.trim() === "") {
      Alert.alert("Error", "Please enter email and password");
      return;
    }

    if (!email.includes("@")) {
      Alert.alert("Error", "Please enter a valid email");
      return;
    }

    if (password.length < 6) {
      Alert.alert(
        "Error",
        "Password must be at least 6 characters"
      );
      return;
    }

    try {
      const savedEmail = await AsyncStorage.getItem("userEmail");
      const savedPassword = await AsyncStorage.getItem("userPassword");

      console.log("Saved Email:", savedEmail);
      console.log("Entered Email:", email);
      console.log("Password exists:", savedPassword !== null);

      if (
        email.trim() !== savedEmail ||
        password !== savedPassword
      ) {
        Alert.alert(
          "Login Failed",
          "Incorrect email or password"
        );
        return;
      }

      await AsyncStorage.setItem("isLoggedIn", "true");

      // Directly go to Main
      navigation.replace("Main");

    } catch (error) {
      console.log("Login Error:", error);
      Alert.alert(
        "Error",
        "Unable to login. Please try again."
      );
    }
  };

  return (
    <View style={styles.container}>

      <Text style={styles.logo}>🏋️</Text>

      <Text style={styles.title}>
        Welcome Back!
      </Text>

      <Text style={styles.subtitle}>
        Login to continue your fitness journey
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={handleLogin}
      >
        <Text style={styles.buttonText}>
          LOGIN
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.replace("Registration")}
      >
        <Text style={styles.registerText}>
          Don't have an account? Register
        </Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    justifyContent: "center",
    padding: 25,
  },

  logo: {
    fontSize: 50,
    textAlign: "center",
    marginBottom: 10,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
  },

  subtitle: {
    textAlign: "center",
    color: "#777777",
    marginTop: 8,
    marginBottom: 30,
  },

  input: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#DDDDDD",
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
    fontSize: 16,
  },

  button: {
    backgroundColor: "#222222",
    padding: 15,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 5,
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },

  registerText: {
    textAlign: "center",
    marginTop: 20,
    color: "#555555",
  },
});