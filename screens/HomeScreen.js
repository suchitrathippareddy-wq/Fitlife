import React from "react";
import {
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import Header from "../components/Header";
import WorkoutCard from "../components/WorkoutCard";
import TrainerCard from "../components/TrainerCard";
import ProgressCard from "../components/ProgressCard";

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>

      {/* Header */}
      <Header />

      {/* Welcome Section */}
      <View style={styles.welcomeSection}>
        <Text style={styles.smallText}>WELCOME BACK 👋</Text>
        <Text style={styles.mainTitle}>Ready to workout?</Text>
        <Text style={styles.subTitle}>
          Stay strong, stay healthy and keep moving!
        </Text>
      </View>

      {/* Fitness Image */}
      <View style={styles.heroCard}>
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1000&q=80",
          }}
          style={styles.heroImage}
        />

        <View style={styles.overlay}>
          <Text style={styles.heroTitle}>
            Your Fitness{"\n"}Journey Starts Here
          </Text>

          <Text style={styles.heroText}>
            Build strength. Stay healthy.
          </Text>

          <TouchableOpacity
            style={styles.startButton}
            onPress={() =>
              navigation.navigate("WorkoutDetails", {
                title: "Full Body Workout",
                duration: "45 Minutes",
                calories: "350",
                difficulty: "Intermediate",
              })
            }
          >
            <Text style={styles.startButtonText}>
              START WORKOUT ▶
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Statistics */}
      <Text style={styles.sectionTitle}>Today's Stats 📊</Text>

      <View style={styles.statsRow}>

        <View style={styles.statCard}>
          <Text style={styles.statIcon}>🔥</Text>
          <Text style={styles.statValue}>350</Text>
          <Text style={styles.statLabel}>Calories</Text>
        </View>

        <View style={styles.statCard}>
          <Text style={styles.statIcon}>⏱️</Text>
          <Text style={styles.statValue}>45</Text>
          <Text style={styles.statLabel}>Minutes</Text>
        </View>

        <View style={styles.statCard}>
          <Text style={styles.statIcon}>💪</Text>
          <Text style={styles.statValue}>1</Text>
          <Text style={styles.statLabel}>Workout</Text>
        </View>

      </View>

      {/* Today's Workout */}
      <Text style={styles.sectionTitle}>
        🔥 Today's Workout
      </Text>

      <View style={styles.todayCard}>

        <View style={styles.todayInfo}>
          <Text style={styles.todayTitle}>
            Full Body Workout
          </Text>

          <Text style={styles.todayDetails}>
            ⏱️ 45 Minutes
          </Text>

          <Text style={styles.todayDetails}>
            🔥 350 kcal
          </Text>

          <Text style={styles.difficulty}>
            Intermediate
          </Text>
        </View>

        <TouchableOpacity
          style={styles.arrowButton}
          onPress={() =>
            navigation.navigate("WorkoutDetails", {
              title: "Full Body Workout",
              duration: "45 Minutes",
              calories: "350",
              difficulty: "Intermediate",
            })
          }
        >
          <Text style={styles.arrow}>›</Text>
        </TouchableOpacity>

      </View>

      {/* Workouts */}
      <Text style={styles.sectionTitle}>
        💪 Popular Workouts
      </Text>

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

      {/* Trainers */}
      <Text style={styles.sectionTitle}>
        🧑‍🏫 Our Trainers
      </Text>

      <TrainerCard
        name="John"
        specialty="Strength Coach"
      />

      <TrainerCard
        name="Sarah"
        specialty="Yoga Trainer"
      />

      {/* Progress */}
      <Text style={styles.sectionTitle}>
        📈 Your Progress
      </Text>

      <ProgressCard
        goal="Weight Loss"
        progress="70%"
      />

      <View style={styles.bottomSpace} />

    </ScrollView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#F5F7FA",
  },

  welcomeSection: {
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 15,
  },

  smallText: {
    fontSize: 13,
    color: "#777777",
    fontWeight: "bold",
  },

  mainTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#172033",
    marginTop: 5,
  },

  subTitle: {
    fontSize: 14,
    color: "#777777",
    marginTop: 5,
  },

  heroCard: {
    marginHorizontal: 15,
    height: 230,
    borderRadius: 20,
    overflow: "hidden",
    elevation: 5,
    backgroundColor: "#111827",
  },

  heroImage: {
    width: "100%",
    height: "100%",
  },

  overlay: {
    position: "absolute",
    left: 20,
    top: 25,
    bottom: 20,
    justifyContent: "space-between",
  },

  heroTitle: {
    color: "#FFFFFF",
    fontSize: 25,
    fontWeight: "bold",
  },

  heroText: {
    color: "#FFFFFF",
    fontSize: 14,
  },

  startButton: {
    backgroundColor: "#FFFFFF",
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 12,
    alignSelf: "flex-start",
  },

  startButtonText: {
    color: "#111827",
    fontWeight: "bold",
    fontSize: 13,
  },

  sectionTitle: {
    fontSize: 21,
    fontWeight: "bold",
    color: "#172033",
    marginHorizontal: 18,
    marginTop: 25,
    marginBottom: 12,
  },

  statsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },

  statCard: {
    backgroundColor: "#FFFFFF",
    width: "31%",
    paddingVertical: 15,
    borderRadius: 16,
    alignItems: "center",
    elevation: 3,
  },

  statIcon: {
    fontSize: 24,
  },

  statValue: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#172033",
    marginTop: 5,
  },

  statLabel: {
    fontSize: 12,
    color: "#777777",
    marginTop: 3,
  },

  todayCard: {
    marginHorizontal: 15,
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    elevation: 4,
  },

  todayInfo: {
    flex: 1,
  },

  todayTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#172033",
    marginBottom: 8,
  },

  todayDetails: {
    color: "#666666",
    fontSize: 14,
    marginTop: 4,
  },

  difficulty: {
    backgroundColor: "#E8F5E9",
    color: "#2E7D32",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 8,
    alignSelf: "flex-start",
    marginTop: 10,
    fontWeight: "bold",
    fontSize: 12,
  },

  arrowButton: {
    width: 45,
    height: 45,
    borderRadius: 23,
    backgroundColor: "#172033",
    justifyContent: "center",
    alignItems: "center",
  },

  arrow: {
    color: "#FFFFFF",
    fontSize: 35,
    marginTop: -5,
  },

  bottomSpace: {
    height: 30,
  },

});