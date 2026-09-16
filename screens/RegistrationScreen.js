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
  const [showForm, setShowForm] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    if (!name || !email || !phone || !password) {
      Alert.alert("Error", "Please fill all fields");
      return;
    }

    if (!email.includes("@")) {
      Alert.alert("Error", "Please enter a valid email");
      return;
    }

    if (phone.length !== 10) {
      Alert.alert("Error", "Phone number must be 10 digits");
      return;
    }

    if (password.length < 6) {
      Alert.alert(
        "Error",
        "Password must contain at least 6 characters"
      );
      return;
    }

    try {
      await AsyncStorage.setItem("userName", name);
      await AsyncStorage.setItem("userEmail", email);
      await AsyncStorage.setItem("userPhone", phone);
      await AsyncStorage.setItem("userPassword", password);

      Alert.alert(
        "Registration Successful 🎉",
        "Your account has been created successfully!",
        [
          {
            text: "Continue to Login",
            onPress: () => navigation.navigate("Login"),
          },
        ]
      );
    } catch (error) {
      Alert.alert("Error", "Registration failed");
    }
  };

  if (!showForm) {
    return (
      <View style={styles.welcomeContainer}>
        <Text style={styles.logo}>🏋️</Text>

        <Text style={styles.welcomeTitle}>
          Welcome to FitLife
        </Text>

        <Text style={styles.welcomeSubtitle}>
          Start your fitness journey today
        </Text>

        <TouchableOpacity
          style={styles.createButton}
          onPress={() => setShowForm(true)}
        >
          <Text style={styles.createButtonText}>
            CREATE ACCOUNT
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.loginText}>
            Already have an account? Login
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>🏋️</Text>

      <Text style={styles.title}>
        Create Account
      </Text>

      <Text style={styles.subtitle}>
        Enter your details to get started
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Full Name"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        keyboardType="phone-pad"
        maxLength={10}
        value={phone}
        onChangeText={setPhone}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={handleRegister}
        activeOpacity={0.8}
      >
        <Text style={styles.buttonText}>
          CREATE ACCOUNT
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.loginText}>
          Already have an account? Login
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => setShowForm(false)}
      >
        <Text style={styles.backText}>
          ← Back
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  welcomeContainer: {
    flex: 1,
    backgroundColor: "#F5F7FB",
    justifyContent: "center",
    alignItems: "center",
    padding: 25,
  },

  container: {
    flex: 1,
    backgroundColor: "#F5F7FB",
    justifyContent: "center",
    padding: 25,
  },

  logo: {
    fontSize: 60,
    textAlign: "center",
    marginBottom: 15,
  },

  welcomeTitle: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#172033",
    textAlign: "center",
  },

  welcomeSubtitle: {
    fontSize: 16,
    color: "#777777",
    textAlign: "center",
    marginTop: 8,
    marginBottom: 30,
  },

  createButton: {
    backgroundColor: "#035efc",
    width: "100%",
    paddingVertical: 17,
    borderRadius: 14,
  },

  createButtonText: {
    color: "#FFFFFF",
    textAlign: "center",
    fontSize: 17,
    fontWeight: "bold",
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    color: "#172033",
  },

  subtitle: {
    fontSize: 15,
    color: "#777777",
    textAlign: "center",
    marginTop: 8,
    marginBottom: 25,
  },

  input: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: "#E0E0E0",
  },

  button: {
    backgroundColor: "#035efc",
    paddingVertical: 16,
    borderRadius: 12,
    marginTop: 8,
  },

  buttonText: {
    color: "#FFFFFF",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },

  loginText: {
    color: "#035efc",
    textAlign: "center",
    marginTop: 20,
    fontSize: 15,
    fontWeight: "600",
  },

  backText: {
    color: "#777777",
    textAlign: "center",
    marginTop: 15,
    fontSize: 15,
  },
});