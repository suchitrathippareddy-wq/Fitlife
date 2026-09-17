import React, { useCallback, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function MyBookingsScreen({ navigation }) {
  const [bookings, setBookings] = useState([]);

  const loadBookings = async () => {
    try {
      const savedBookings =
        await AsyncStorage.getItem("trainerBookings");

      if (savedBookings) {
        setBookings(JSON.parse(savedBookings));
      } else {
        setBookings([]);
      }
    } catch (error) {
      console.log("Booking History Error:", error);
    }
  };

  useFocusEffect(
    useCallback(() => {
      loadBookings();
    }, [])
  );

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>
        📅 My Bookings
      </Text>

      <Text style={styles.subtitle}>
        Your trainer booking history
      </Text>

      {bookings.length === 0 ? (
        <View style={styles.emptyCard}>
          <Text style={styles.icon}>📅</Text>

          <Text style={styles.emptyText}>
            No bookings yet
          </Text>

          <Text style={styles.emptySubtext}>
            Book a trainer to see your booking here.
          </Text>
        </View>
      ) : (
        bookings.map((booking, index) => (
          <View style={styles.card} key={index}>
            <Text style={styles.name}>
              {booking.trainer}
            </Text>

            <Text style={styles.info}>
              💪 {booking.specialization}
            </Text>

            <Text style={styles.info}>
              🕐 {booking.time}
            </Text>

            <Text style={styles.info}>
              💰 {booking.price}
            </Text>

            <View style={styles.statusBox}>
              <Text style={styles.status}>
                ✓ BOOKED
              </Text>
            </View>
          </View>
        ))
      )}

      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
        activeOpacity={0.7}
      >
        <Text style={styles.backText}>
          ← Back
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F7FB",
    padding: 15,
  },

  heading: {
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 20,
  },

  subtitle: {
    fontSize: 15,
    color: "#777777",
    marginTop: 5,
    marginBottom: 20,
  },

  card: {
    backgroundColor: "#FFFFFF",
    padding: 20,
    borderRadius: 18,
    marginBottom: 15,
    elevation: 4,
  },

  name: {
    fontSize: 21,
    fontWeight: "bold",
    color: "#172033",
    marginBottom: 12,
  },

  info: {
    fontSize: 15,
    color: "#555555",
    marginBottom: 9,
  },

  statusBox: {
    backgroundColor: "#DCFCE7",
    padding: 10,
    borderRadius: 10,
    marginTop: 8,
    alignItems: "center",
  },

  status: {
    color: "#16A34A",
    fontWeight: "bold",
  },

  emptyCard: {
    backgroundColor: "#FFFFFF",
    padding: 30,
    borderRadius: 18,
    alignItems: "center",
    marginTop: 20,
    elevation: 3,
  },

  icon: {
    fontSize: 45,
    marginBottom: 15,
  },

  emptyText: {
    fontSize: 19,
    fontWeight: "bold",
  },

  emptySubtext: {
    fontSize: 14,
    color: "#777777",
    marginTop: 8,
    textAlign: "center",
  },

  backButton: {
    backgroundColor: "#035efc",
    paddingVertical: 15,
    borderRadius: 12,
    marginTop: 10,
    marginBottom: 30,
  },

  backText: {
    color: "#FFFFFF",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
});