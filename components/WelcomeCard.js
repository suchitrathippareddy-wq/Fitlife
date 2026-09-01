import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useState } from "react";

export default function WelcomeCard() {
  const [name, setName] = useState("Suchitra");

  return (
    <View style={styles.card}>

      {/* Greeting */}
      <Text style={styles.greeting}>Good Evening 👋</Text>

      <Text style={styles.name}>Welcome back, {name}!</Text>

      <Text style={styles.message}>
        Ready to achieve your fitness goals today?
      </Text>

      {/* Quick Stats */}
      <View style={styles.statsRow}>

        <View style={styles.statBox}>
          <Text style={styles.icon}>🔥</Text>
          <Text style={styles.statValue}>420</Text>
          <Text style={styles.statLabel}>Calories</Text>
        </View>

        <View style={styles.statBox}>
          <Text style={styles.icon}>⏱️</Text>
          <Text style={styles.statValue}>38</Text>
          <Text style={styles.statLabel}>Minutes</Text>
        </View>

        <View style={styles.statBox}>
          <Text style={styles.icon}>🏆</Text>
          <Text style={styles.statValue}>7</Text>
          <Text style={styles.statLabel}>Day Streak</Text>
        </View>

      </View>

      {/* Action Button */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => setName("Fitness Champion")}
      >
        <Text style={styles.buttonText}>
          START TODAY'S WORKOUT →
        </Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#222222",
    margin: 15,
    padding: 22,
    borderRadius: 20,
    elevation: 5,
    shadowOpacity: 0.2,
    shadowRadius: 6,
  },

  greeting: {
    color: "#BBBBBB",
    fontSize: 15,
    marginBottom: 5,
  },

  name: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },

  message: {
    color: "#DDDDDD",
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 20,
  },

  statsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },

  statBox: {
    alignItems: "center",
    flex: 1,
  },

  icon: {
    fontSize: 22,
    marginBottom: 5,
  },

  statValue: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },

  statLabel: {
    color: "#AAAAAA",
    fontSize: 12,
    marginTop: 3,
  },

  button: {
    backgroundColor: "#FFFFFF",
    paddingVertical: 13,
    borderRadius: 12,
    alignItems: "center",
  },

  buttonText: {
    color: "#222222",
    fontSize: 14,
    fontWeight: "bold",
  },
});