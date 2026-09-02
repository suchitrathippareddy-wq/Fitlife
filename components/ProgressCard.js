import { View, Text, StyleSheet } from "react-native";

export default function ProgressCard({ goal, progress }) {
  return (
    <View style={styles.card}>

      <Text style={styles.heading}>📊 Today's Progress</Text>

      <Text style={styles.goal}>{goal}</Text>

      <View style={styles.progressRow}>
        <Text style={styles.progressText}>Your Progress</Text>
        <Text style={styles.percentage}>{progress}</Text>
      </View>

      {/* Progress Bar */}
      <View style={styles.progressBackground}>
        <View style={styles.progressFill} />
      </View>

      {/* Statistics */}
      <View style={styles.statsRow}>

        <View style={styles.stat}>
          <Text style={styles.icon}>🔥</Text>
          <Text style={styles.value}>420</Text>
          <Text style={styles.label}>Calories</Text>
        </View>

        <View style={styles.stat}>
          <Text style={styles.icon}>⏱️</Text>
          <Text style={styles.value}>38</Text>
          <Text style={styles.label}>Minutes</Text>
        </View>

        <View style={styles.stat}>
          <Text style={styles.icon}>🏋️</Text>
          <Text style={styles.value}>4</Text>
          <Text style={styles.label}>Workouts</Text>
        </View>

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
    shadowOpacity: 0.15,
    shadowRadius: 5,
  },

  heading: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },

  goal: {
    fontSize: 15,
    color: "#666666",
    marginBottom: 18,
  },

  progressRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },

  progressText: {
    fontSize: 14,
    color: "#555555",
  },

  percentage: {
    fontSize: 14,
    fontWeight: "bold",
  },

  progressBackground: {
    height: 10,
    backgroundColor: "#E0E0E0",
    borderRadius: 10,
    overflow: "hidden",
  },

  progressFill: {
    width: "70%",
    height: "100%",
    backgroundColor: "#222222",
    borderRadius: 10,
  },

  statsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 22,
  },

  stat: {
    alignItems: "center",
    flex: 1,
  },

  icon: {
    fontSize: 22,
    marginBottom: 5,
  },

  value: {
    fontSize: 18,
    fontWeight: "bold",
  },

  label: {
    fontSize: 12,
    color: "#777777",
    marginTop: 3,
  },
});