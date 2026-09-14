import React from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";

import Header from "../components/Header";
import WelcomeCard from "../components/WelcomeCard";
import WorkoutCard from "../components/WorkoutCard";
import TrainerCard from "../components/TrainerCard";
import ProgressCard from "../components/ProgressCard";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>

      <Header />

      <ScrollView
        showsVerticalScrollIndicator={false}
      >

        <WelcomeCard />

        {/* Fitness Image */}

        <View style={styles.heroCard}>

          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1000&q=80",
            }}
            style={styles.heroImage}
          />

          <View style={styles.heroOverlay}>

            <Text style={styles.heroTitle}>
              Stay Strong 💪
            </Text>

            <Text style={styles.heroText}>
              Make today better than yesterday
            </Text>

            <TouchableOpacity
              style={styles.startButton}
              onPress={() => navigation.navigate("Workout")}
              activeOpacity={0.8}
            >
              <Text style={styles.startText}>
                ▶ START WORKOUT
              </Text>
            </TouchableOpacity>

          </View>

        </View>


        {/* Today's Workouts */}

        <Text style={styles.sectionTitle}>
          🏋️ Today's Workouts
        </Text>

        <WorkoutCard
          title="Chest & Triceps"
          duration="45 Minutes"
          calories="320 kcal"
          difficulty="Intermediate"
          navigation={navigation}
        />

        <WorkoutCard
          title="Leg Workout"
          duration="60 Minutes"
          calories="420 kcal"
          difficulty="Advanced"
          navigation={navigation}
        />

        <WorkoutCard
          title="Yoga Session"
          duration="30 Minutes"
          calories="180 kcal"
          difficulty="Beginner"
          navigation={navigation}
        />


        {/* Trainers */}

        <Text style={styles.sectionTitle}>
          👨‍🏫 Popular Trainers
        </Text>

        <TrainerCard />


        {/* Progress */}

        <Text style={styles.sectionTitle}>
          📊 Your Progress
        </Text>

        <ProgressCard />

        <View style={styles.bottomSpace} />

      </ScrollView>

    </View>
  );
}


const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#F5F7FA",
  },

  heroCard: {
    marginHorizontal: 15,
    marginTop: 15,
    borderRadius: 20,
    overflow: "hidden",
    elevation: 5,
    backgroundColor: "#172033",
  },

  heroImage: {
    width: "100%",
    height: 220,
  },

  heroOverlay: {
    padding: 20,
    marginTop: -105,
    paddingTop: 90,
  },

  heroTitle: {
    color: "#FFFFFF",
    fontSize: 25,
    fontWeight: "bold",
  },

  heroText: {
    color: "#E0E0E0",
    fontSize: 14,
    marginTop: 5,
  },

  startButton: {
    backgroundColor: "#FFFFFF",
    paddingVertical: 13,
    paddingHorizontal: 20,
    borderRadius: 12,
    alignSelf: "flex-start",
    marginTop: 15,
  },

  startText: {
    color: "#172033",
    fontSize: 14,
    fontWeight: "bold",
  },

  sectionTitle: {
    fontSize: 21,
    fontWeight: "bold",
    color: "#172033",
    marginHorizontal: 15,
    marginTop: 25,
    marginBottom: 12,
  },

  bottomSpace: {
    height: 30,
  },

});