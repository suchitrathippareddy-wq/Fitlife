import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function WorkoutCard({
  title,
  duration,
  calories,
  difficulty,
}) {
  return (
    <View style={styles.card}>

      {/* Workout Title */}
      <Text style={styles.title}>{title}</Text>

      {/* Workout Information */}
      <View style={styles.infoRow}>
        <Text style={styles.info}>⏱️ {duration}</Text>
        <Text style={styles.info}>🔥 {calories} kcal</Text>
      </View>

      {/* Difficulty */}
      <Text style={styles.difficulty}>
        📈 {difficulty}
      </Text>

      {/* Start Button */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => alert(`${title} started! 💪`)}
      >
        <Text style={styles.buttonText}>START WORKOUT ▶</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFFFF",
    marginHorizontal: 15,
    marginVertical: 8,
    padding: 18,
    borderRadius: 16,

    elevation: 4,
    shadowOpacity: 0.15,
    shadowRadius: 5,
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 12,
  },

  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  info: {
    fontSize: 14,
  },

  difficulty: {
    marginTop: 10,
    fontSize: 14,
  },

  button: {
    backgroundColor: "#222222",
    marginTop: 15,
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
  },

  buttonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 14,
  },
});