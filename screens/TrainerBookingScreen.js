import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function TrainerBookingScreen({ navigation }) {
  const handleBooking = async () => {
    const newBooking = {
      trainer: "John Smith",
      specialization: "Strength & Fitness Coach",
      time: "7:00 AM",
      price: "₹500 / Session",
    };

    try {
      const existingBookings =
        await AsyncStorage.getItem("trainerBookings");

      const bookings = existingBookings
        ? JSON.parse(existingBookings)
        : [];

      bookings.push(newBooking);

      await AsyncStorage.setItem(
        "trainerBookings",
        JSON.stringify(bookings)
      );

      alert("Trainer booked successfully! 🎉");

      navigation.navigate("MyBookings");
    } catch (error) {
      console.log("Booking Error:", error);
      alert("Booking failed");
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Image
        source={{
          uri: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=800&q=90",
        }}
        style={styles.image}
      />

      <View style={styles.content}>
        <Text style={styles.name}>
          John Smith
        </Text>

        <Text style={styles.specialization}>
          💪 Strength & Fitness Coach
        </Text>

        <View style={styles.ratingBox}>
          <Text style={styles.rating}>
            ⭐ 4.9
          </Text>

          <Text style={styles.reviews}>
            120+ Reviews
          </Text>
        </View>

        <Text style={styles.heading}>
          About Trainer
        </Text>

        <Text style={styles.description}>
          Certified fitness trainer helping people build
          strength, improve fitness and achieve their
          personal fitness goals.
        </Text>

        <View style={styles.infoCard}>
          <Text style={styles.info}>
            🏆 Experience: 8 Years
          </Text>

          <Text style={styles.info}>
            💪 Specialization: Strength Training
          </Text>

          <Text style={styles.info}>
            🔥 Training: Weight Loss & Muscle Gain
          </Text>

          <Text style={styles.info}>
            💰 Price: ₹500 / Session
          </Text>
        </View>

        <Text style={styles.heading}>
          Available Timings
        </Text>

        <View style={styles.timeRow}>
          <View style={styles.timeBox}>
            <Text style={styles.time}>
              7:00 AM
            </Text>
          </View>

          <View style={styles.timeBox}>
            <Text style={styles.time}>
              10:00 AM
            </Text>
          </View>

          <View style={styles.timeBox}>
            <Text style={styles.time}>
              5:00 PM
            </Text>
          </View>
        </View>

        <TouchableOpacity
          style={styles.bookButton}
          activeOpacity={0.8}
          onPress={handleBooking}
        >
          <Text style={styles.bookText}>
            📅 BOOK TRAINER
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backText}>
            ← Back
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F7FA",
  },

  image: {
    width: "100%",
    height: 320,
  },

  content: {
    padding: 20,
  },

  name: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#172033",
  },

  specialization: {
    fontSize: 16,
    color: "#555555",
    marginTop: 6,
  },

  ratingBox: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
  },

  rating: {
    fontSize: 17,
    fontWeight: "bold",
    marginRight: 15,
  },

  reviews: {
    color: "#777777",
    fontSize: 14,
  },

  heading: {
    fontSize: 21,
    fontWeight: "bold",
    color: "#172033",
    marginTop: 25,
    marginBottom: 10,
  },

  description: {
    fontSize: 15,
    color: "#555555",
    lineHeight: 23,
  },

  infoCard: {
    backgroundColor: "#FFFFFF",
    padding: 18,
    borderRadius: 16,
    marginTop: 20,
    elevation: 3,
  },

  info: {
    fontSize: 15,
    color: "#444444",
    marginVertical: 7,
  },

  timeRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  timeBox: {
    backgroundColor: "#FFFFFF",
    paddingVertical: 14,
    paddingHorizontal: 12,
    borderRadius: 12,
    elevation: 2,
  },

  time: {
    fontWeight: "bold",
    color: "#035efc",
  },

  bookButton: {
    backgroundColor: "#035efc",
    paddingVertical: 17,
    borderRadius: 14,
    marginTop: 25,
  },

  bookText: {
    color: "#FFFFFF",
    textAlign: "center",
    fontSize: 17,
    fontWeight: "bold",
  },

  backButton: {
    padding: 15,
    marginBottom: 20,
  },

  backText: {
    textAlign: "center",
    color: "#035efc",
    fontSize: 16,
    fontWeight: "bold",
  },
});