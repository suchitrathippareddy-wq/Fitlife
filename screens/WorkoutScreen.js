import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useState, useEffect } from "react";
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

  // Timer
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  // Timer start / pause
  useEffect(() => {

    let timer;

    if (isRunning) {

      timer = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);

    }

    return () => clearInterval(timer);

  }, [isRunning]);


  // Format timer
  const formatTime = () => {

    const minutes = Math.floor(seconds / 60);

    const remainingSeconds = seconds % 60;

    return (
      String(minutes).padStart(2, "0") +
      ":" +
      String(remainingSeconds).padStart(2, "0")
    );

  };


  // Reset timer
  const resetTimer = () => {

    setSeconds(0);

    setIsRunning(false);

  };


  // Finish Workout
  const finishWorkout = async () => {

    try {

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


      const workoutMinutes =
        parseInt(duration) || 45;


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


      setIsRunning(false);


      alert("Workout Completed! 🎉💪");


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


      {/* TIMER */}

      <View style={styles.timerCard}>

        <Text style={styles.timerLabel}>
          WORKOUT TIMER ⏱️
        </Text>

        <Text style={styles.timer}>
          {formatTime()}
        </Text>


        <View style={styles.timerButtons}>

          {/* Start / Pause */}

          <TouchableOpacity
            style={styles.startButton}
            onPress={() =>
              setIsRunning(!isRunning)
            }
          >

            <Text style={styles.timerButtonText}>
              {isRunning
                ? "⏸ PAUSE"
                : "▶ START"}
            </Text>

          </TouchableOpacity>


          {/* Reset */}

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

    marginBottom: 15,

  },


  // Timer

  timerCard: {

    backgroundColor: "#172033",

    borderRadius: 20,

    padding: 20,

    alignItems: "center",

    marginBottom: 20,

  },


  timerLabel: {

    color: "#FFFFFF",

    fontSize: 14,

    fontWeight: "bold",

    marginBottom: 5,

  },


  timer: {

    color: "#FFFFFF",

    fontSize: 42,

    fontWeight: "bold",

    marginVertical: 5,

  },


  timerButtons: {

    flexDirection: "row",

    marginTop: 10,

  },


  startButton: {

    backgroundColor: "#FFFFFF",

    paddingVertical: 10,

    paddingHorizontal: 22,

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

    paddingHorizontal: 22,

    borderRadius: 10,

  },


  resetText: {

    color: "#FFFFFF",

    fontWeight: "bold",

  },


  progress: {

    textAlign: "center",

    fontSize: 16,

    color: "#777777",

    marginBottom: 15,

  },


  card: {

    backgroundColor: "#FFFFFF",

    padding: 25,

    borderRadius: 20,

    alignItems: "center",

    elevation: 5,

  },


  exerciseName: {

    fontSize: 30,

    fontWeight: "bold",

    marginBottom: 15,

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

    marginTop: 20,

  },


  buttonText: {

    color: "#FFFFFF",

    fontSize: 16,

    fontWeight: "bold",

  },

});