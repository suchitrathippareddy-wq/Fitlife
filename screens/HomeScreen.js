import React from "react";
import {
  View,
  ImageBackground,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>

      <ImageBackground
        source={{
          uri: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1200&q=90",
        }}
        style={styles.image}
        resizeMode="cover"
      >

        <View style={styles.overlay}>

          <Text style={styles.title}>
            FitLife 💪
          </Text>

          <Text style={styles.subtitle}>
            Your fitness journey starts here
          </Text>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("TrainerBooking")}
            activeOpacity={0.8}
          >
            <Text style={styles.buttonText}>
              📅 BOOK TRAINER
            </Text>
          </TouchableOpacity>

        </View>

      </ImageBackground>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
  },

  image: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
  },

  overlay: {
    alignItems: "center",
    paddingBottom: 60,
    paddingHorizontal: 20,
  },

  title: {
    color: "#FFFFFF",
    fontSize: 34,
    fontWeight: "bold",
    marginBottom: 8,
  },

  subtitle: {
    color: "#FFFFFF",
    fontSize: 16,
    textAlign: "center",
    marginBottom: 25,
  },

  button: {
    backgroundColor: "#035efc",
    paddingVertical: 16,
    paddingHorizontal: 45,
    borderRadius: 14,
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },

});