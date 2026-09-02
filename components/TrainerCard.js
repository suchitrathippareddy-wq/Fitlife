import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function TrainerCard({ name, specialty }) {
  return (
    <View style={styles.card}>

      <View style={styles.topRow}>

        <View style={styles.avatar}>
          <Text style={styles.avatarText}>👤</Text>
        </View>

        <View style={styles.details}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.specialty}>{specialty}</Text>

          <Text style={styles.rating}>⭐ 4.8  •  120+ clients</Text>
        </View>

      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => alert(`Booking ${name}...`)}
      >
        <Text style={styles.buttonText}>BOOK TRAINER</Text>
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
    borderRadius: 18,
    elevation: 4,
    shadowOpacity: 0.15,
    shadowRadius: 5,
  },

  topRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#E8E8E8",
    justifyContent: "center",
    alignItems: "center",
  },

  avatarText: {
    fontSize: 30,
  },

  details: {
    marginLeft: 15,
    flex: 1,
  },

  name: {
    fontSize: 19,
    fontWeight: "bold",
  },

  specialty: {
    fontSize: 14,
    color: "#666666",
    marginTop: 3,
  },

  rating: {
    fontSize: 13,
    marginTop: 7,
  },

  button: {
    backgroundColor: "#222222",
    marginTop: 15,
    paddingVertical: 11,
    borderRadius: 10,
    alignItems: "center",
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "bold",
  },
});