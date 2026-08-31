import { View, Text, Button, StyleSheet } from "react-native";
import { useState } from "react";

export default function WelcomeCard() {

  const [title, setTitle] = useState("Welcome Suchitra");
  const [theme, setTheme] = useState("Light");
  const [status, setStatus] = useState("Ready");

  return (
    <View
      style={[
        styles.card,
        {
          backgroundColor: theme === "Light" ? "#FFFFFF" : "#333333",
        },
      ]}
    >
      <Text
        style={[
          styles.title,
          {
            color: theme === "Light" ? "black" : "white",
          },
        ]}
      >
        {title}
      </Text>

      <Text style={{ color: theme === "Light" ? "black" : "white" }}>
        Theme : {theme}
      </Text>

      <Text style={{ color: theme === "Light" ? "black" : "white" }}>
        Status : {status}
      </Text>

      <Button
        title="Change Welcome"
        onPress={() => setTitle("Keep Training!")}
      />

      <Button
        title="Theme"
        onPress={() =>
          setTheme(theme === "Light" ? "Dark" : "Light")
        }
      />

      <Button
        title="Status"
        onPress={() =>
          setStatus(status === "Ready" ? "Workout Done" : "Ready")
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    margin: 15,
    padding: 15,
    borderRadius: 10,
    elevation: 5,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },
});