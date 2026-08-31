import { View, Text, StyleSheet } from "react-native";

export default function Footer() {
  return (
    <View style={styles.footer}>
      <Text style={styles.text}>
        Stay Fit • Stay Healthy 💪
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    backgroundColor: "#2E7D32",
    padding: 15,
    alignItems: "center",
    marginTop: 20,
  },
  text: {
    color: "white",
    fontWeight: "bold",
  },
});