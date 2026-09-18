import React, { useCallback, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function WorkoutHistoryScreen({ navigation }) {
  const [history, setHistory] = useState([]);

  const loadHistory = async () => {
    try {
      const savedHistory =
        await AsyncStorage.getItem("workoutHistory");

      if (savedHistory) {
        setHistory(JSON.parse(savedHistory));
      } else {
        setHistory([]);
      }
    } catch (error) {
      console.log("History Error:", error);
    }
  };

  useFocusEffect(
    useCallback(() => {
      loadHistory();
    }, [])
  );

  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <Text style={styles.heading}>
        📜 Workout History
      </Text>

      <Text style={styles.subtitle}>
        Your completed workouts
      </Text>

      {history.length === 0 ? (
        <View style={styles.emptyCard}>
          <Text style={styles.emptyIcon}>
            🏋️
          </Text>

          <Text style={styles.emptyText}>
            No workouts completed yet
          </Text>

          <Text style={styles.emptySubtext}>
            Complete a workout to see it here.
          </Text>
        </View>
      ) : (
        history.map((workout, index) => (
          <View
            style={styles.card}
            key={index}
          >
            <View style={styles.topRow}>
              <Text style={styles.number}>
                #{index + 1}
              </Text>

              <View style={styles.completedBox}>
                <Text style={styles.completedText}>
                  ✓ COMPLETED
                </Text>
              </View>
            </View>

            <Text style={styles.title}>
              {workout.title}
            </Text>

            <View style={styles.infoBox}>
              <Text style={styles.info}>
                ⏱️ {workout.duration}
              </Text>

              <Text style={styles.info}>
                🔥 {workout.calories}
              </Text>

              <Text style={styles.info}>
                💪 {workout.difficulty}
              </Text>
            </View>

            {workout.date && (
              <Text style={styles.date}>
                📅 {workout.date}
              </Text>
            )}
          </View>
        ))
      )}

      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
        activeOpacity={0.8}
      >
        <Text style={styles.backText}>
          ← Back
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F7FB",
    padding: 15,
  },

  heading: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#172033",
    marginTop: 20,
  },

  subtitle: {
    fontSize: 15,
    color: "#777777",
    marginTop: 5,
    marginBottom: 20,
  },

  card: {
    backgroundColor: "#FFFFFF",
    padding: 20,
    borderRadius: 18,
    marginBottom: 15,
    elevation: 4,
  },

  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  number: {
    fontSize: 14,
    color: "#777777",
    fontWeight: "bold",
  },

  title: {
    fontSize: 21,
    fontWeight: "bold",
    color: "#172033",
    marginTop: 15,
    marginBottom: 15,
  },

  infoBox: {
    backgroundColor: "#F5F7FB",
    padding: 14,
    borderRadius: 12,
  },

  info: {
    fontSize: 15,
    color: "#555555",
    marginBottom: 7,
  },

  completedBox: {
    backgroundColor: "#DCFCE7",
    paddingVertical: 7,
    paddingHorizontal: 10,
    borderRadius: 10,
  },

  completedText: {
    color: "#16A34A",
    fontSize: 12,
    fontWeight: "bold",
  },

  date: {
    fontSize: 13,
    color: "#777777",
    marginTop: 12,
  },

  emptyCard: {
    backgroundColor: "#FFFFFF",
    padding: 30,
    borderRadius: 18,
    alignItems: "center",
    marginTop: 20,
    elevation: 3,
  },

  emptyIcon: {
    fontSize: 45,
    marginBottom: 15,
  },

  emptyText: {
    fontSize: 19,
    fontWeight: "bold",
    color: "#172033",
  },

  emptySubtext: {
    fontSize: 14,
    color: "#777777",
    marginTop: 8,
    textAlign: "center",
  },

  backButton: {
    backgroundColor: "#035efc",
    paddingVertical: 15,
    borderRadius: 12,
    marginTop: 5,
    marginBottom: 30,
  },

  backText: {
    color: "#FFFFFF",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
});