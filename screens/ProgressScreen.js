import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from "react-native";
import { useCallback, useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function ProgressScreen() {

  const [workouts, setWorkouts] = useState(0);
  const [calories, setCalories] = useState(0);
  const [time, setTime] = useState(0);

  const loadProgress = async () => {
    try {
      const savedWorkouts =
        await AsyncStorage.getItem("workoutsCompleted");

      const savedCalories =
        await AsyncStorage.getItem("caloriesBurned");

      const savedTime =
        await AsyncStorage.getItem("workoutTime");

      setWorkouts(Number(savedWorkouts) || 0);
      setCalories(Number(savedCalories) || 0);
      setTime(Number(savedTime) || 0);

    } catch (error) {
      console.log("Progress Error:", error);
    }
  };

  useFocusEffect(
    useCallback(() => {
      loadProgress();
    }, [])
  );

  const progress = Math.min(workouts * 20, 100);

  return (
    <ScrollView style={styles.container}>

      <Text style={styles.heading}>
        📊 My Progress
      </Text>

      <Text style={styles.subtitle}>
        Track your fitness journey
      </Text>

      {/* Workouts */}
      <View style={styles.card}>
        <Text style={styles.icon}>🏋️</Text>

        <Text style={styles.label}>
          Workouts Completed
        </Text>

        <Text style={styles.value}>
          {workouts}
        </Text>
      </View>

      {/* Calories */}
      <View style={styles.card}>
        <Text style={styles.icon}>🔥</Text>

        <Text style={styles.label}>
          Calories Burned
        </Text>

        <Text style={styles.value}>
          {calories} kcal
        </Text>
      </View>

      {/* Time */}
      <View style={styles.card}>
        <Text style={styles.icon}>⏱️</Text>

        <Text style={styles.label}>
          Total Workout Time
        </Text>

        <Text style={styles.value}>
          {time} min
        </Text>
      </View>

      {/* Progress */}
      <View style={styles.progressCard}>

        <Text style={styles.progressTitle}>
          🎯 Overall Progress
        </Text>

        <Text style={styles.progressValue}>
          {progress}%
        </Text>

        <View style={styles.progressBackground}>

          <View
            style={[
              styles.progressBar,
              {
                width: `${progress}%`,
              },
            ]}
          />

        </View>

        <Text style={styles.goal}>
          Goal: Weight Loss
        </Text>

      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
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

  icon: {
    fontSize: 30,
    marginBottom: 10,
  },

  label: {
    fontSize: 15,
    color: "#666666",
  },

  value: {
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 5,
  },

  progressCard: {
    backgroundColor: "#FFFFFF",
    padding: 20,
    borderRadius: 18,
    marginBottom: 20,
    elevation: 4,
  },

  progressTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },

  progressValue: {
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 15,
    marginBottom: 10,
  },

  progressBackground: {
    height: 14,
    backgroundColor: "#E0E0E0",
    borderRadius: 10,
    overflow: "hidden",
  },

  progressBar: {
    height: 14,
    backgroundColor: "#222222",
    borderRadius: 10,
  },

  goal: {
    fontSize: 15,
    color: "#666666",
    marginTop: 12,
  },

});