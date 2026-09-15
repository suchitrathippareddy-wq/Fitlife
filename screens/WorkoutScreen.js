import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function WorkoutScreen({ route, navigation }) {
  const {
    title = "Chest & Triceps",
    duration = "45 Minutes",
    calories = "320 kcal",
    difficulty = "Intermediate",
    exercises = [
      { name: "Push Ups", reps: "10 reps" },
      { name: "Bench Press", reps: "12 reps" },
      { name: "Incline Dumbbell Press", reps: "10 reps" },
      { name: "Tricep Dips", reps: "12 reps" },
    ],
  } = route.params || {};

  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  // TIMER
  useEffect(() => {
    let timer;

    if (isRunning) {
      timer = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [isRunning]);

  // FORMAT TIMER
  const formatTime = () => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    return (
      String(minutes).padStart(2, "0") +
      ":" +
      String(remainingSeconds).padStart(2, "0")
    );
  };

  // RESET TIMER
  const resetTimer = () => {
    setSeconds(0);
    setIsRunning(false);
  };

  // COMPLETE WORKOUT
  const completeWorkout = async () => {
    try {
      // Get old workout history
      const savedHistory =
        await AsyncStorage.getItem("workoutHistory");

      let history = savedHistory
        ? JSON.parse(savedHistory)
        : [];

      // Add current completed workout
      const completedWorkout = {
        title: title,
        duration: duration,
        calories: calories,
        difficulty: difficulty,
        completed: true,
      };

      history.push(completedWorkout);

      // Save workout history
      await AsyncStorage.setItem(
        "workoutHistory",
        JSON.stringify(history)
      );

      // Save last workout
      await AsyncStorage.setItem(
        "lastWorkout",
        JSON.stringify(completedWorkout)
      );

      // Update workout count
      const oldWorkouts =
        Number(
          await AsyncStorage.getItem("workoutsCompleted")
        ) || 0;

      await AsyncStorage.setItem(
        "workoutsCompleted",
        String(oldWorkouts + 1)
      );

      // Update calories
      const calorieNumber =
        Number(String(calories).replace(" kcal", "")) || 0;

      const oldCalories =
        Number(
          await AsyncStorage.getItem("caloriesBurned")
        ) || 0;

      await AsyncStorage.setItem(
        "caloriesBurned",
        String(oldCalories + calorieNumber)
      );

      // Stop timer
      setIsRunning(false);

      // FULL BODY → CHEST
      if (title === "Full Body Workout") {
        navigation.replace("Workout", {
          title: "Chest & Triceps",
          duration: "45 Minutes",
          calories: "320 kcal",
          difficulty: "Intermediate",
          exercises: [
            {
              name: "Push Ups",
              reps: "10 reps",
            },
            {
              name: "Bench Press",
              reps: "12 reps",
            },
            {
              name: "Incline Dumbbell Press",
              reps: "10 reps",
            },
            {
              name: "Tricep Dips",
              reps: "12 reps",
            },
          ],
        });

        return;
      }

      // CHEST → LEG
      if (title === "Chest & Triceps") {
        navigation.replace("Workout", {
          title: "Leg Workout",
          duration: "60 Minutes",
          calories: "420 kcal",
          difficulty: "Advanced",
          exercises: [
            {
              name: "Squats",
              reps: "15 reps",
            },
            {
              name: "Lunges",
              reps: "10 reps",
            },
            {
              name: "Leg Press",
              reps: "12 reps",
            },
            {
              name: "Calf Raises",
              reps: "15 reps",
            },
          ],
        });

        return;
      }

      // LEG → YOGA
      if (title === "Leg Workout") {
        navigation.replace("Workout", {
          title: "Yoga Session",
          duration: "30 Minutes",
          calories: "180 kcal",
          difficulty: "Beginner",
          exercises: [
            {
              name: "Mountain Pose",
              reps: "30 sec",
            },
            {
              name: "Downward Dog",
              reps: "30 sec",
            },
            {
              name: "Warrior Pose",
              reps: "30 sec",
            },
            {
              name: "Child's Pose",
              reps: "30 sec",
            },
          ],
        });

        return;
      }

      // YOGA → PROGRESS
      if (title === "Yoga Session") {
        navigation.navigate("Main", {
          screen: "Progress",
        });

        return;
      }

    } catch (error) {
      console.log("Complete Workout Error:", error);
    }
  };

  return (
    <View style={styles.container}>

      {/* TITLE */}
      <Text style={styles.title}>
        {title}
      </Text>

      {/* WORKOUT INFO */}
      <View style={styles.infoBox}>

        <Text style={styles.info}>
          ⏱ {duration}
        </Text>

        <Text style={styles.info}>
          🔥 {calories}
        </Text>

        <Text style={styles.info}>
          💪 {difficulty}
        </Text>

      </View>

      {/* TIMER */}
      <View style={styles.timerBox}>

        <Text style={styles.timerTitle}>
          WORKOUT TIMER ⏱️
        </Text>

        <Text style={styles.timer}>
          {formatTime()}
        </Text>

        <View style={styles.timerButtons}>

          <TouchableOpacity
            style={styles.startButton}
            onPress={() => setIsRunning(!isRunning)}
          >
            <Text style={styles.timerButtonText}>
              {isRunning ? "⏸ PAUSE" : "▶ START"}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.resetButton}
            onPress={resetTimer}
          >
            <Text style={styles.resetText}>
              🔄 RESET
            </Text>
          </TouchableOpacity>

        </View>

      </View>

      {/* EXERCISES */}
      <Text style={styles.heading}>
        Exercises
      </Text>

      {exercises.map((exercise, index) => (
        <View
          style={styles.exerciseCard}
          key={index}
        >

          <Text style={styles.exerciseName}>
            {index + 1}. {exercise.name}
          </Text>

          <Text style={styles.reps}>
            {exercise.reps}
          </Text>

        </View>
      ))}

      {/* COMPLETE BUTTON */}
      <TouchableOpacity
        style={styles.completeButton}
        onPress={completeWorkout}
        activeOpacity={0.8}
      >
        <Text style={styles.buttonText}>
          ✓ Complete Workout
        </Text>
      </TouchableOpacity>

      {/* BACK BUTTON */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.backText}>
          ← Back
        </Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#f5f7fb",
    padding: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 30,
    marginBottom: 20,
    textAlign: "center",
  },

  infoBox: {
    backgroundColor: "#035efc",
    padding: 18,
    borderRadius: 15,
    marginBottom: 15,
  },

  info: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
    marginVertical: 4,
  },

  timerBox: {
    backgroundColor: "#172033",
    padding: 18,
    borderRadius: 18,
    alignItems: "center",
    marginBottom: 20,
  },

  timerTitle: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "bold",
  },

  timer: {
    color: "#FFFFFF",
    fontSize: 42,
    fontWeight: "bold",
    marginVertical: 8,
  },

  timerButtons: {
    flexDirection: "row",
    marginTop: 5,
  },

  startButton: {
    backgroundColor: "#FFFFFF",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginRight: 8,
  },

  timerButtonText: {
    color: "#172033",
    fontWeight: "bold",
  },

  resetButton: {
    borderWidth: 1,
    borderColor: "#FFFFFF",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },

  resetText: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },

  heading: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 12,
  },

  exerciseCard: {
    backgroundColor: "#FFFFFF",
    padding: 16,
    borderRadius: 12,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    elevation: 2,
  },

  exerciseName: {
    fontSize: 16,
    fontWeight: "600",
  },

  reps: {
    fontSize: 14,
    color: "#666666",
  },

  completeButton: {
    backgroundColor: "#22c55e",
    padding: 17,
    borderRadius: 12,
    marginTop: 10,
  },

  buttonText: {
    color: "#FFFFFF",
    textAlign: "center",
    fontSize: 17,
    fontWeight: "bold",
  },

  backButton: {
    marginTop: 10,
    padding: 12,
  },

  backText: {
    textAlign: "center",
    fontSize: 16,
    color: "#035efc",
    fontWeight: "bold",
  },

});