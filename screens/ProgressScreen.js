import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useCallback, useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function ProgressScreen({ navigation }) {
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
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <Text style={styles.heading}>📊 My Progress</Text>

      <Text style={styles.subtitle}>
        Track your fitness journey
      </Text>

      <View style={styles.statsRow}>
        <View style={styles.smallCard}>
          <Text style={styles.icon}>🏋️</Text>
          <Text style={styles.value}>{workouts}</Text>
          <Text style={styles.label}>Workouts</Text>
        </View>

        <View style={styles.smallCard}>
          <Text style={styles.icon}>🔥</Text>
          <Text style={styles.value}>{calories}</Text>
          <Text style={styles.label}>Calories</Text>
        </View>

        <View style={styles.smallCard}>
          <Text style={styles.icon}>⏱️</Text>
          <Text style={styles.value}>{time}</Text>
          <Text style={styles.label}>Minutes</Text>
        </View>
      </View>

      <View style={styles.progressCard}>
        <View style={styles.progressHeader}>
          <Text style={styles.progressTitle}>
            🎯 Overall Progress
          </Text>

          <Text style={styles.progressValue}>
            {progress}%
          </Text>
        </View>

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

        <Text style={styles.goalText}>
          {progress === 100
            ? "🎉 Goal progress completed!"
            : `Complete ${Math.max(
                0,
                5 - workouts
              )} more workouts to reach the next milestone.`}
        </Text>
      </View>

      <Text style={styles.achievementHeading}>
        🏆 Achievements
      </Text>

      <Text style={styles.achievementSubtitle}>
        Complete workouts and unlock badges
      </Text>

      <View
        style={[
          styles.achievementCard,
          workouts >= 1
            ? styles.unlockedCard
            : styles.lockedCard,
        ]}
      >
        <Text style={styles.badge}>🥉</Text>

        <View style={styles.achievementInfo}>
          <Text style={styles.achievementTitle}>
            First Workout
          </Text>

          <Text style={styles.achievementText}>
            Complete your first workout
          </Text>

          <Text
            style={
              workouts >= 1
                ? styles.unlockedText
                : styles.lockedText
            }
          >
            {workouts >= 1
              ? "✓ UNLOCKED"
              : "🔒 LOCKED"}
          </Text>
        </View>
      </View>

      <View
        style={[
          styles.achievementCard,
          workouts >= 5
            ? styles.unlockedCard
            : styles.lockedCard,
        ]}
      >
        <Text style={styles.badge}>🥈</Text>

        <View style={styles.achievementInfo}>
          <Text style={styles.achievementTitle}>
            5 Workouts
          </Text>

          <Text style={styles.achievementText}>
            Complete 5 workouts
          </Text>

          <Text
            style={
              workouts >= 5
                ? styles.unlockedText
                : styles.lockedText
            }
          >
            {workouts >= 5
              ? "✓ UNLOCKED"
              : "🔒 LOCKED"}
          </Text>
        </View>
      </View>

      <View
        style={[
          styles.achievementCard,
          workouts >= 10
            ? styles.unlockedCard
            : styles.lockedCard,
        ]}
      >
        <Text style={styles.badge}>🥇</Text>

        <View style={styles.achievementInfo}>
          <Text style={styles.achievementTitle}>
            10 Workouts
          </Text>

          <Text style={styles.achievementText}>
            Complete 10 workouts
          </Text>

          <Text
            style={
              workouts >= 10
                ? styles.unlockedText
                : styles.lockedText
            }
          >
            {workouts >= 10
              ? "✓ UNLOCKED"
              : "🔒 LOCKED"}
          </Text>
        </View>
      </View>

      <View
        style={[
          styles.achievementCard,
          calories >= 1000
            ? styles.unlockedCard
            : styles.lockedCard,
        ]}
      >
        <Text style={styles.badge}>🔥</Text>

        <View style={styles.achievementInfo}>
          <Text style={styles.achievementTitle}>
            Calorie Crusher
          </Text>

          <Text style={styles.achievementText}>
            Burn 1000 calories
          </Text>

          <Text
            style={
              calories >= 1000
                ? styles.unlockedText
                : styles.lockedText
            }
          >
            {calories >= 1000
              ? "✓ UNLOCKED"
              : "🔒 LOCKED"}
          </Text>
        </View>
      </View>

      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
        activeOpacity={0.8}
      >
        <Text style={styles.backText}>
          ← Back
        </Text>
      </TouchableOpacity>

      <View style={styles.bottomSpace} />
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
    color: "#172033",
    marginTop: 20,
  },

  subtitle: {
    fontSize: 15,
    color: "#777777",
    marginTop: 5,
    marginBottom: 20,
  },

  statsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },

  smallCard: {
    backgroundColor: "#FFFFFF",
    width: "31.5%",
    paddingVertical: 18,
    borderRadius: 16,
    alignItems: "center",
    elevation: 3,
  },

  icon: {
    fontSize: 27,
    marginBottom: 8,
  },

  value: {
    fontSize: 21,
    fontWeight: "bold",
    color: "#172033",
  },

  label: {
    fontSize: 12,
    color: "#777777",
    marginTop: 4,
  },

  progressCard: {
    backgroundColor: "#FFFFFF",
    padding: 20,
    borderRadius: 18,
    marginBottom: 25,
    elevation: 4,
  },

  progressHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  progressTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#172033",
  },

  progressValue: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#035efc",
  },

  progressBackground: {
    height: 14,
    backgroundColor: "#E0E0E0",
    borderRadius: 10,
    overflow: "hidden",
    marginTop: 18,
  },

  progressBar: {
    height: 14,
    backgroundColor: "#035efc",
    borderRadius: 10,
  },

  goal: {
    fontSize: 15,
    color: "#555555",
    fontWeight: "600",
    marginTop: 12,
  },

  goalText: {
    fontSize: 13,
    color: "#777777",
    marginTop: 6,
  },

  achievementHeading: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#172033",
  },

  achievementSubtitle: {
    fontSize: 14,
    color: "#777777",
    marginTop: 5,
    marginBottom: 15,
  },

  achievementCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    padding: 18,
    borderRadius: 18,
    marginBottom: 12,
    elevation: 3,
  },

  unlockedCard: {
    borderWidth: 2,
    borderColor: "#035efc",
  },

  lockedCard: {
    opacity: 0.55,
  },

  badge: {
    fontSize: 45,
    marginRight: 15,
  },

  achievementInfo: {
    flex: 1,
  },

  achievementTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#172033",
  },

  achievementText: {
    fontSize: 14,
    color: "#777777",
    marginTop: 4,
  },

  unlockedText: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#16A34A",
    marginTop: 7,
  },

  lockedText: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#888888",
    marginTop: 7,
  },

  backButton: {
    backgroundColor: "#035efc",
    paddingVertical: 15,
    borderRadius: 12,
    marginTop: 5,
  },

  backText: {
    color: "#FFFFFF",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },

  bottomSpace: {
    height: 30,
  },
});