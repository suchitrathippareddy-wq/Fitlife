import {
  View,
  Text,
  StyleSheet,
} from "react-native";

export default function WorkoutCard({
  title,
  duration,
  calories,
  difficulty,
}) {
  return (
    <View style={styles.card}>

      <Text style={styles.title}>
        {title}
      </Text>

      <View style={styles.infoRow}>

        <Text style={styles.info}>
          ⏱️ {duration}
        </Text>

        <Text style={styles.info}>
          🔥 {calories}
        </Text>

      </View>

      <Text style={styles.difficulty}>
        📈 {difficulty}
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({

  card: {
    backgroundColor: "#FFFFFF",
    padding: 20,
    borderRadius: 18,
    marginHorizontal: 15,
    marginBottom: 15,
    elevation: 4,
  },

  title: {
    fontSize: 21,
    fontWeight: "bold",
    marginBottom: 15,
  },

  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  info: {
    fontSize: 14,
    color: "#555555",
  },

  difficulty: {
    marginTop: 12,
    fontSize: 14,
    color: "#666666",
  },

});