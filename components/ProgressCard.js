import {
  View,
  Text,
  StyleSheet,
} from "react-native";

export default function ProgressCard() {

  return (
    <View style={styles.card}>

      <Text style={styles.title}>
        📊 My Progress
      </Text>

      <Text style={styles.goal}>
        🎯 Goal: Weight Loss
      </Text>

      <View style={styles.row}>
        <Text style={styles.label}>
          🏋️ Workouts Completed
        </Text>

        <Text style={styles.value}>
          0
        </Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>
          🔥 Calories Burned
        </Text>

        <Text style={styles.value}>
          0 kcal
        </Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>
          ⏱️ Total Workout Time
        </Text>

        <Text style={styles.value}>
          0 min
        </Text>
      </View>

      <Text style={styles.progressText}>
        Progress: 0%
      </Text>

      <View style={styles.progressBackground}>
        <View style={styles.progressBar} />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  card: {
    backgroundColor: "#FFFFFF",
    margin: 15,
    padding: 20,
    borderRadius: 18,
    elevation: 4,
  },

  title: {
    fontSize: 21,
    fontWeight: "bold",
    marginBottom: 15,
  },

  goal: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 15,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },

  label: {
    fontSize: 14,
    color: "#555555",
  },

  value: {
    fontSize: 14,
    fontWeight: "bold",
  },

  progressText: {
    fontSize: 15,
    fontWeight: "bold",
    marginTop: 5,
    marginBottom: 8,
  },

  progressBackground: {
    height: 12,
    backgroundColor: "#E0E0E0",
    borderRadius: 10,
    overflow: "hidden",
  },

  progressBar: {
    height: 12,
    width: "0%",
    backgroundColor: "#222222",
    borderRadius: 10,
  },

});