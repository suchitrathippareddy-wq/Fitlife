import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function Footer() {
  return (
    <View style={styles.footer}>

      <TouchableOpacity
        style={styles.item}
        onPress={() => alert("Home 🏠")}
      >
        <Text style={styles.icon}>🏠</Text>
        <Text style={styles.activeText}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.item}
        onPress={() => alert("Workouts 💪")}
      >
        <Text style={styles.icon}>💪</Text>
        <Text style={styles.text}>Workouts</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.item}
        onPress={() => alert("Progress 📊")}
      >
        <Text style={styles.icon}>📊</Text>
        <Text style={styles.text}>Progress</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.item}
        onPress={() => alert("Profile 👤")}
      >
        <Text style={styles.icon}>👤</Text>
        <Text style={styles.text}>Profile</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    marginTop: 15,
    paddingVertical: 15,
    borderTopWidth: 1,
    borderTopColor: "#E5E5E5",
  },

  item: {
    alignItems: "center",
    flex: 1,
  },

  icon: {
    fontSize: 22,
    marginBottom: 4,
  },

  text: {
    fontSize: 11,
    color: "#777777",
  },

  activeText: {
    fontSize: 11,
    fontWeight: "bold",
  },
});