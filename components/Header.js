import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function Header() {
  return (
    <View style={styles.header}>

      <View>
        <Text style={styles.smallText}>FITLIFE</Text>
        <Text style={styles.title}>Your Fitness Journey 💪</Text>
      </View>

      <TouchableOpacity
        style={styles.notification}
        onPress={() => alert("No new notifications 🔔")}
      >
        <Text style={styles.bell}>🔔</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#222222",
    paddingHorizontal: 20,
    paddingTop: 25,
    paddingBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  smallText: {
    color: "#AAAAAA",
    fontSize: 12,
    fontWeight: "bold",
    letterSpacing: 2,
  },

  title: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 5,
  },

  notification: {
    width: 45,
    height: 45,
    borderRadius: 23,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
  },

  bell: {
    fontSize: 21,
  },
});