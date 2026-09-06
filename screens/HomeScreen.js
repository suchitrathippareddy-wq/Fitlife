import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import Header from "../components/Header";
import WelcomeCard from "../components/WelcomeCard";
import WorkoutCard from "../components/WorkoutCard";
import TrainerCard from "../components/TrainerCard";
import ProgressCard from "../components/ProgressCard";
import Footer from "../components/Footer";

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>

      <Header />

      <WelcomeCard />

      {/* Today's Workout */}
      <View style={styles.todayCard}>

        <Text style={styles.todayTitle}>
          🔥 Today's Workout
        </Text>

        <Text style={styles.todayWorkout}>
          Full Body Workout
        </Text>

        <Text style={styles.todayInfo}>
          ⏱️ 45 Minutes   🔥 350 kcal
        </Text>

        {/* START TODAY'S WORKOUT BUTTON */}
        <TouchableOpacity
          style={styles.todayButton}
          onPress={() =>
            navigation.navigate("WorkoutDetails", {
              title: "Full Body Workout",
              duration: "45 Minutes",
              calories: "350",
              difficulty: "Intermediate",
            })
          }
        >
          <Text style={styles.todayButtonText}>
            START TODAY'S WORKOUT ▶
          </Text>
        </TouchableOpacity>

      </View>

      {/* Workout Cards */}

      <WorkoutCard
        title="Chest & Triceps"
        duration="45 Minutes"
        calories="320"
        difficulty="Intermediate"
        navigation={navigation}
      />

      <WorkoutCard
        title="Leg Workout"
        duration="60 Minutes"
        calories="420"
        difficulty="Advanced"
        navigation={navigation}
      />

      <WorkoutCard
        title="Yoga Session"
        duration="30 Minutes"
        calories="180"
        difficulty="Beginner"
        navigation={navigation}
      />

      <TrainerCard
        name="John"
        specialty="Strength Coach"
      />

      <TrainerCard
        name="Sarah"
        specialty="Yoga Trainer"
      />

      <ProgressCard
        goal="Weight Loss"
        progress="70%"
      />

      <Footer />

    </ScrollView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },

  todayCard: {
    backgroundColor: "#FFFFFF",
    margin: 15,
    padding: 20,
    borderRadius: 18,
    elevation: 4,
  },

  todayTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },

  todayWorkout: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },

  todayInfo: {
    fontSize: 14,
    color: "#555555",
    marginBottom: 15,
  },

  todayButton: {
    backgroundColor: "#222222",
    padding: 15,
    borderRadius: 12,
    alignItems: "center",
  },

  todayButtonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 14,
  },

});