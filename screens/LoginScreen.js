import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import { useState } from "react";

export default function LoginScreen({ navigation }) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {

    // Empty fields validation
    if (email.trim() === "" || password.trim() === "") {
      Alert.alert(
        "Error",
        "Please enter email and password"
      );
      return;
    }

    // Email validation
    if (!email.includes("@")) {
      Alert.alert(
        "Error",
        "Please enter a valid email"
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

    // Login successful
    navigation.replace("Main");
  };

  return (
    <View style={styles.container}>

      {/* Logo */}
      <Text style={styles.logo}>🏋️</Text>

      {/* Title */}
      <Text style={styles.title}>
        Welcome Back!
      </Text>

      {/* Subtitle */}
      <Text style={styles.subtitle}>
        Login to continue your fitness journey
      </Text>

      {/* Email */}
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      {/* Password */}
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />

      {/* Login Button */}
      <TouchableOpacity
        style={styles.button}
        onPress={handleLogin}
      >
        <Text style={styles.buttonText}>
          LOGIN
        </Text>
      </TouchableOpacity>

      {/* Register */}
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Registration")
        }
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