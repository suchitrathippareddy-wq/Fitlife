import React, { useState, useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
  Modal,
} from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function ProfileScreen({ navigation }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [workouts, setWorkouts] = useState(0);
  const [calories, setCalories] = useState(0);

  const [showLogout, setShowLogout] = useState(false);

  const loadProfile = async () => {
    try {
      const savedName = await AsyncStorage.getItem("userName");
      const savedEmail = await AsyncStorage.getItem("userEmail");
      const savedPhone = await AsyncStorage.getItem("userPhone");

      const savedWorkouts =
        Number(await AsyncStorage.getItem("workoutsCompleted")) || 0;

      const savedCalories =
        Number(await AsyncStorage.getItem("caloriesBurned")) || 0;

      setName(savedName || "User");
      setEmail(savedEmail || "No email available");
      setPhone(savedPhone || "No phone available");
      setWorkouts(savedWorkouts);
      setCalories(savedCalories);
    } catch (error) {
      console.log("Profile Error:", error);
    }
  };

  useFocusEffect(
    useCallback(() => {
      loadProfile();
    }, [])
  );

  // Logout popup open
  const handleLogout = () => {
    setShowLogout(true);
  };

  // Confirm Logout
  const confirmLogout = async () => {
    try {
      await AsyncStorage.removeItem("isLoggedIn");

      setShowLogout(false);

      navigation.reset({
        index: 0,
        routes: [{ name: "Login" }],
      });
    } catch (error) {
      console.log("Logout Error:", error);
    }
  };

  return (
    <View style={styles.mainContainer}>

      <ScrollView style={styles.container}>

        {/* Profile Header */}
        <View style={styles.profileHeader}>

          <View style={styles.profileCircle}>
            <Text style={styles.profileIcon}>
              👤
            </Text>
          </View>

          <Text style={styles.name}>
            {name}
          </Text>

          <Text style={styles.role}>
            FitLife Member 💪
          </Text>

        </View>

        {/* Personal Information */}
        <Text style={styles.sectionTitle}>
          Personal Information
        </Text>

        <View style={styles.card}>

          <View style={styles.infoRow}>

            <Text style={styles.icon}>
              📧
            </Text>

            <View>
              <Text style={styles.label}>
                Email
              </Text>

              <Text style={styles.value}>
                {email}
              </Text>
            </View>

          </View>

          <View style={styles.line} />

          <View style={styles.infoRow}>

            <Text style={styles.icon}>
              📱
            </Text>

            <View>
              <Text style={styles.label}>
                Phone
              </Text>

              <Text style={styles.value}>
                {phone}
              </Text>
            </View>

          </View>

        </View>

        {/* Edit Profile */}
        <TouchableOpacity
          style={styles.editButton}
          onPress={() => navigation.navigate("EditProfile")}
          activeOpacity={0.7}
        >
          <Text style={styles.editText}>
            ✏️ EDIT PROFILE
          </Text>
        </TouchableOpacity>

        {/* Change Password */}
        <TouchableOpacity
          style={styles.passwordButton}
          onPress={() => navigation.navigate("ChangePassword")}
          activeOpacity={0.7}
        >
          <Text style={styles.passwordText}>
            🔐 CHANGE PASSWORD
          </Text>
        </TouchableOpacity>

        {/* Fitness Goal */}
        <Text style={styles.sectionTitle}>
          Fitness Goal 🎯
        </Text>

        <View style={styles.goalCard}>

          <Text style={styles.goalIcon}>
            🔥
          </Text>

          <View>

            <Text style={styles.goalTitle}>
              Weight Loss
            </Text>

            <Text style={styles.goalText}>
              Keep working towards your goal!
            </Text>

          </View>

        </View>

        {/* Fitness Stats */}
        <Text style={styles.sectionTitle}>
          My Fitness Stats 📊
        </Text>

        <View style={styles.statsRow}>

          <View style={styles.statCard}>

            <Text style={styles.statIcon}>
              💪
            </Text>

            <Text style={styles.statValue}>
              {workouts}
            </Text>

            <Text style={styles.statLabel}>
              Workouts
            </Text>

          </View>

          <View style={styles.statCard}>

            <Text style={styles.statIcon}>
              🔥
            </Text>

            <Text style={styles.statValue}>
              {calories}
            </Text>

            <Text style={styles.statLabel}>
              Calories
            </Text>

          </View>

        </View>

        {/* Logout Button */}
        <TouchableOpacity
          style={styles.logoutButton}
          onPress={handleLogout}
          activeOpacity={0.7}
        >
          <Text style={styles.logoutText}>
            🚪 LOGOUT
          </Text>
        </TouchableOpacity>

        <View style={styles.bottomSpace} />

      </ScrollView>

      {/* LOGOUT CONFIRMATION POPUP */}
      <Modal
        visible={showLogout}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setShowLogout(false)}
      >
        <View style={styles.modalBackground}>

          <View style={styles.logoutBox}>

            <Text style={styles.logoutIcon}>
              🚪
            </Text>

            <Text style={styles.logoutTitle}>
              Logout
            </Text>

            <Text style={styles.logoutMessage}>
              Are you sure you want to logout?
            </Text>

            <View style={styles.logoutActions}>

              {/* Cancel */}
              <TouchableOpacity
                style={styles.cancelLogoutButton}
                onPress={() => setShowLogout(false)}
                activeOpacity={0.7}
              >
                <Text style={styles.cancelLogoutText}>
                  CANCEL
                </Text>
              </TouchableOpacity>

              {/* Confirm Logout */}
              <TouchableOpacity
                style={styles.confirmLogoutButton}
                onPress={confirmLogout}
                activeOpacity={0.7}
              >
                <Text style={styles.confirmLogoutText}>
                  LOGOUT
                </Text>
              </TouchableOpacity>

            </View>

          </View>

        </View>
      </Modal>

    </View>
  );
}

const styles = StyleSheet.create({

  mainContainer: {
    flex: 1,
    backgroundColor: "#F5F7FA",
  },

  container: {
    flex: 1,
    backgroundColor: "#F5F7FA",
  },

  profileHeader: {
    backgroundColor: "#172033",
    alignItems: "center",
    paddingVertical: 35,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },

  profileCircle: {
    width: 95,
    height: 95,
    borderRadius: 48,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },

  profileIcon: {
    fontSize: 50,
  },

  name: {
    color: "#FFFFFF",
    fontSize: 25,
    fontWeight: "bold",
  },

  role: {
    color: "#BFC7D5",
    fontSize: 14,
    marginTop: 5,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#172033",
    marginHorizontal: 18,
    marginTop: 25,
    marginBottom: 12,
  },

  card: {
    backgroundColor: "#FFFFFF",
    marginHorizontal: 15,
    borderRadius: 18,
    padding: 20,
    elevation: 3,
  },

  infoRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  icon: {
    fontSize: 25,
    marginRight: 15,
  },

  label: {
    fontSize: 12,
    color: "#888888",
  },

  value: {
    fontSize: 16,
    fontWeight: "600",
    color: "#172033",
    marginTop: 3,
  },

  line: {
    height: 1,
    backgroundColor: "#EEEEEE",
    marginVertical: 18,
  },

  editButton: {
    backgroundColor: "#FFFFFF",
    marginHorizontal: 15,
    marginTop: 15,
    paddingVertical: 14,
    borderRadius: 14,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#172033",
  },

  editText: {
    color: "#172033",
    fontSize: 15,
    fontWeight: "bold",
  },

  passwordButton: {
    backgroundColor: "#FFFFFF",
    marginHorizontal: 15,
    marginTop: 10,
    paddingVertical: 14,
    borderRadius: 14,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#172033",
  },

  passwordText: {
    color: "#172033",
    fontSize: 15,
    fontWeight: "bold",
  },

  goalCard: {
    backgroundColor: "#FFFFFF",
    marginHorizontal: 15,
    borderRadius: 18,
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
    elevation: 3,
  },

  goalIcon: {
    fontSize: 35,
    marginRight: 15,
  },

  goalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#172033",
  },

  goalText: {
    color: "#777777",
    marginTop: 4,
  },

  statsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },

  statCard: {
    width: "47%",
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    paddingVertical: 20,
    alignItems: "center",
    elevation: 3,
  },

  statIcon: {
    fontSize: 28,
  },

  statValue: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#172033",
    marginTop: 5,
  },

  statLabel: {
    color: "#777777",
    marginTop: 3,
  },

  logoutButton: {
    backgroundColor: "#D32F2F",
    marginHorizontal: 15,
    marginTop: 30,
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: "center",
  },

  logoutText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },

  bottomSpace: {
    height: 30,
  },

  /* Logout Modal */

  modalBackground: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
    padding: 25,
  },

  logoutBox: {
    width: "100%",
    maxWidth: 400,
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 30,
    alignItems: "center",
  },

  logoutIcon: {
    fontSize: 45,
    marginBottom: 10,
  },

  logoutTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#172033",
  },

  logoutMessage: {
    fontSize: 16,
    color: "#666666",
    marginTop: 10,
    textAlign: "center",
  },

  logoutActions: {
    flexDirection: "row",
    width: "100%",
    marginTop: 25,
  },

  cancelLogoutButton: {
    flex: 1,
    paddingVertical: 14,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#172033",
    alignItems: "center",
    marginRight: 5,
  },

  cancelLogoutText: {
    color: "#172033",
    fontWeight: "bold",
  },

  confirmLogoutButton: {
    flex: 1,
    paddingVertical: 14,
    borderRadius: 10,
    backgroundColor: "#D32F2F",
    alignItems: "center",
    marginLeft: 5,
  },

  confirmLogoutText: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },

});