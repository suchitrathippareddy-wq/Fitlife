import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function WorkoutScreen({ route, navigation }) {

  const {
    title = "Full Body Workout",

    exercises = [
      { name: "Push Ups", reps: "10 reps" },
      { name: "Squats", reps: "15 reps" },
      { name: "Lunges", reps: "10 each leg" },
      { name: "Glute Bridge", reps: "15 reps" },
      { name: "Plank", reps: "30 sec" },
    ],

    calories = "350",
    duration = "45 Minutes",

  } = route?.params || {};

  const [currentExercise, setCurrentExercise] = useState(0);


  // Finish Workout
  const finishWorkout = async () => {

    try {

      // Get old progress
      const oldWorkouts =
        Number(
          await AsyncStorage.getItem("workoutsCompleted")
        ) || 0;

      const oldCalories =
        Number(
          await AsyncStorage.getItem("caloriesBurned")
        ) || 0;

      const oldTime =
        Number(
          await AsyncStorage.getItem("workoutTime")
        ) || 0;


      // Convert duration
      const workoutMinutes =
        parseInt(duration) || 45;


      // Save updated progress
      await AsyncStorage.setItem(
        "workoutsCompleted",
        String(oldWorkouts + 1)
      );

      await AsyncStorage.setItem(
        "caloriesBurned",
        String(
          oldCalories + Number(calories)
        )
      );

      await AsyncStorage.setItem(
        "workoutTime",
        String(
          oldTime + workoutMinutes
        )
      );


      // Show message
      alert("Workout Completed! 🎉💪");


      // Go back to Home
      navigation.navigate("Home");

    } catch (error) {

      console.log(
        "Progress Error:",
        error
      );

    }

  };


  // Next Exercise
  const nextExercise = () => {

    if (
      currentExercise <
      exercises.length - 1
    ) {

      setCurrentExercise(
        currentExercise + 1
      );

    } else {

      finishWorkout();

    }

  };


  const exercise =
    exercises[currentExercise];


  return (

    <View style={styles.container}>

      {/* Workout Title */}

      <Text style={styles.title}>
        {title}
      </Text>


      {/* Exercise Progress */}

      <Text style={styles.progress}>
        Exercise {currentExercise + 1} / {exercises.length}
      </Text>


      {/* Exercise Card */}

      <View style={styles.card}>

        <Text style={styles.exerciseName}>
          {exercise.name}
        </Text>


        <Text style={styles.reps}>
          {exercise.reps}
        </Text>


        <Text style={styles.instruction}>
          Complete the exercise and press NEXT.
        </Text>

      </View>


      {/* Next Button */}

      <TouchableOpacity
        style={styles.button}
        onPress={nextExercise}
      >

        <Text style={styles.buttonText}>

          {currentExercise ===
          exercises.length - 1

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

    justifyContent: "center",

    padding: 20,

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


  card: {

    backgroundColor: "#FFFFFF",

    padding: 30,

    borderRadius: 20,

    alignItems: "center",

    elevation: 5,

  },


  exerciseName: {

    fontSize: 30,

    fontWeight: "bold",

    marginBottom: 20,

    textAlign: "center",

  },


  reps: {

    fontSize: 24,

    fontWeight: "bold",

    marginBottom: 15,

  },


  instruction: {

    textAlign: "center",

    color: "#666666",

    fontSize: 15,

  },


  button: {

    backgroundColor: "#222222",

    padding: 17,

    borderRadius: 12,

    alignItems: "center",

    marginTop: 25,

  },


  buttonText: {

    color: "#FFFFFF",

    fontSize: 16,

    fontWeight: "bold",

  },

});