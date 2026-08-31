import { View, Text, StyleSheet } from "react-native";

export default function ProgressCard({ goal, progress }) {
  return (
    <View style={styles.card}>
      <Text style={styles.goal}>{goal}</Text>
      <Text>Progress: {progress}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFE082",
    margin: 10,
    padding: 15,
    borderRadius: 10,
  },
  goal: {
    fontSize: 18,
    fontWeight: "bold",
  },
});