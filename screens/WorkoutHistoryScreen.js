import React, { useCallback, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function WorkoutHistoryScreen() {
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
    <ScrollView style={styles.container}>

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

            <Text style={styles.title}>
              {workout.title}
            </Text>

            <Text style={styles.info}>
              ⏱️ {workout.duration}
            </Text>

            <Text style={styles.info}>
              🔥 {workout.calories}
            </Text>

            <Text style={styles.info}>
              💪 {workout.difficulty}
            </Text>

            <View style={styles.completedBox}>
              <Text style={styles.completedText}>
                ✓ COMPLETED
              </Text>
            </View>

          </View>

        ))

      )}

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

  title: {
    fontSize: 21,
    fontWeight: "bold",
    marginBottom: 15,
  },

  info: {
    fontSize: 15,
    color: "#555555",
    marginBottom: 8,
  },

  completedBox: {
    backgroundColor: "#DCFCE7",
    padding: 10,
    borderRadius: 10,
    marginTop: 8,
    alignItems: "center",
  },

  completedText: {
    color: "#16A34A",
    fontWeight: "bold",
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
  },

  emptySubtext: {
    fontSize: 14,
    color: "#777777",
    marginTop: 8,
    textAlign: "center",
  },

});