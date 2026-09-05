import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";

export default function WorkoutDetailsScreen({ route, navigation }) {
  const {
    title = "Chest & Triceps",
    duration = "45 Minutes",
    calories = "320",
    difficulty = "Intermediate",
  } = route?.params || {};

  const exercises = [
    "Push Ups",
    "Bench Press",
    "Incline Dumbbell Press",
    "Tricep Dips",
    "Cable Pushdown",
  ];

  return (
    <ScrollView style={styles.container}>

      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.back}>← Back</Text>
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Workout Details</Text>
      </View>

      <View style={styles.card}>

        <Text style={styles.title}>{title}</Text>

        <View style={styles.infoRow}>
          <Text style={styles.info}>⏱️ {duration}</Text>
          <Text style={styles.info}>🔥 {calories} kcal</Text>
        </View>

        <Text style={styles.difficulty}>
          📈 Difficulty: {difficulty}
        </Text>

      </View>

      <Text style={styles.sectionTitle}>Exercises</Text>

      {exercises.map((exercise, index) => (
        <View style={styles.exercise} key={index}>
          <View style={styles.number}>
            <Text style={styles.numberText}>{index + 1}</Text>
          </View>

          <Text style={styles.exerciseName}>{exercise}</Text>

          <Text style={styles.arrow}>›</Text>
        </View>
      ))}

      <TouchableOpacity
        style={styles.startButton}
        onPress={() => alert("Workout Started! 💪🔥")}
      >
        <Text style={styles.startText}>START WORKOUT ▶</Text>
      </TouchableOpacity>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },

  header: {
    backgroundColor: "#222222",
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
  },

  back: {
    color: "#FFFFFF",
    fontSize: 16,
  },

  headerTitle: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 25,
  },

  card: {
    backgroundColor: "#FFFFFF",
    margin: 15,
    padding: 20,
    borderRadius: 18,
    elevation: 4,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 15,
  },

  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  info: {
    fontSize: 14,
  },

  difficulty: {
    marginTop: 12,
    fontSize: 14,
    color: "#555555",
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginHorizontal: 15,
    marginTop: 5,
    marginBottom: 10,
  },

  exercise: {
    backgroundColor: "#FFFFFF",
    marginHorizontal: 15,
    marginVertical: 5,
    padding: 15,
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
  },

  number: {
    width: 35,
    height: 35,
    borderRadius: 18,
    backgroundColor: "#222222",
    justifyContent: "center",
    alignItems: "center",
  },

  numberText: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },

  exerciseName: {
    flex: 1,
    marginLeft: 15,
    fontSize: 15,
    fontWeight: "600",
  },

  arrow: {
    fontSize: 25,
    color: "#777777",
  },

  startButton: {
    backgroundColor: "#222222",
    margin: 15,
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
  },

  startText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "bold",
  },
});