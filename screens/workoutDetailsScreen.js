import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

export default function WorkoutDetailsScreen({ route, navigation }) {
  const {
    title = "Chest & Triceps",
    duration = "45 Minutes",
    calories = "320",
    difficulty = "Intermediate",
  } = route.params || {};

  let exercises = [];

  if (title === "Full Body Workout") {
    exercises = [
      { name: "Jumping Jacks", reps: "20 reps" },
      { name: "Squats", reps: "15 reps" },
      { name: "Push Ups", reps: "10 reps" },
      { name: "Lunges", reps: "10 reps" },
    ];
  } else if (title === "Chest & Triceps") {
    exercises = [
      { name: "Push Ups", reps: "10 reps" },
      { name: "Bench Press", reps: "12 reps" },
      { name: "Incline Dumbbell Press", reps: "10 reps" },
      { name: "Tricep Dips", reps: "12 reps" },
    ];
  } else if (title === "Leg Workout") {
    exercises = [
      { name: "Squats", reps: "15 reps" },
      { name: "Lunges", reps: "10 reps" },
      { name: "Leg Press", reps: "12 reps" },
      { name: "Calf Raises", reps: "15 reps" },
    ];
  } else if (title === "Yoga Session") {
    exercises = [
      { name: "Mountain Pose", reps: "30 sec" },
      { name: "Downward Dog", reps: "30 sec" },
      { name: "Warrior Pose", reps: "30 sec" },
      { name: "Child's Pose", reps: "30 sec" },
    ];
  }

  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        {title}
      </Text>

      <View style={styles.infoBox}>
        <Text style={styles.info}>
          ⏱️ {duration}
        </Text>

        <Text style={styles.info}>
          🔥 {calories} kcal
        </Text>

        <Text style={styles.info}>
          📈 {difficulty}
        </Text>
      </View>

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

      <TouchableOpacity
        style={styles.startButton}
        onPress={() =>
          navigation.navigate("Workout", {
            title,
            duration,
            calories: `${calories} kcal`,
            difficulty,
            exercises,
          })
        }
      >
        <Text style={styles.startText}>
          ▶ START WORKOUT
        </Text>
      </TouchableOpacity>

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
    textAlign: "center",
    marginTop: 30,
    marginBottom: 20,
  },

  infoBox: {
    backgroundColor: "#035efc",
    padding: 18,
    borderRadius: 15,
    marginBottom: 25,
  },

  info: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
    marginVertical: 5,
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

  startButton: {
    backgroundColor: "#22c55e",
    padding: 17,
    borderRadius: 12,
    marginTop: 20,
  },

  startText: {
    color: "#FFFFFF",
    textAlign: "center",
    fontSize: 17,
    fontWeight: "bold",
  },

  backButton: {
    padding: 12,
    marginTop: 10,
  },

  backText: {
    textAlign: "center",
    color: "#035efc",
    fontSize: 16,
    fontWeight: "bold",
  },
});