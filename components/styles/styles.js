import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  header: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
  },

  text: {
    fontSize: 16,
    marginTop: 8,
  },

  card: {
    padding: 20,
    marginVertical: 10,
    borderRadius: 15,
    backgroundColor: "#ffffff",
    elevation: 3,
  },

  button: {
    padding: 15,
    borderRadius: 10,
    marginTop: 15,
    alignItems: "center",
  },

  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default styles;