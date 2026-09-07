import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useState } from "react";

export default function WorkoutScreen({ route, navigation }) {

  const {
    title = "Full Body Workout",
  } = route?.params || {};

  const exercises = [
    "Push Ups",
    "Squats",
    "Lunges",
    "Glute Bridge",
    "Plank",
  ];

  const [currentExercise, setCurrentExercise] = useState(0);

  const nextExercise = () => {
    if (currentExercise < exercises.length - 1) {
      setCurrentExercise(currentExercise + 1);
    } else {
      alert("Workout Completed! 🎉💪");
      navigation.goBack();
    }
  };

  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        {title}
      </Text>

      <Text style={styles.progress}>
        Exercise {currentExercise + 1} / {exercises.length}
      </Text>

      <View style={styles.exerciseCard}>

        <Text style={styles.exerciseNumber}>
          {currentExercise + 1}
        </Text>

        <Text style={styles.exerciseName}>
          {exercises[currentExercise]}
        </Text>

        <Text style={styles.instruction}>
          Perform this exercise and then press NEXT.
        </Text>

      </View>

      <TouchableOpacity
        style={styles.nextButton}
        onPress={nextExercise}
      >
        <Text style={styles.nextText}>
          {currentExercise === exercises.length - 1
            ? "FINISH WORKOUT 🎉"
            : "NEXT EXERCISE ▶"}
        </Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    padding: 20,
    justifyContent: "center",
  },

  title: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },

  progress: {
    textAlign: "center",
    fontSize: 16,
    color: "#777777",
    marginBottom: 25,
  },

  exerciseCard: {
    backgroundColor: "#FFFFFF",
    padding: 30,
    borderRadius: 20,
    alignItems: "center",
    elevation: 5,
  },

  exerciseNumber: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
  },

  exerciseName: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 15,
  },

  instruction: {
    textAlign: "center",
    color: "#666666",
    fontSize: 15,
  },

  nextButton: {
    backgroundColor: "#222222",
    padding: 17,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 25,
  },

  nextText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },

});