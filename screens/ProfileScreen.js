import React, { useState, useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
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

  const handleLogout = () => {
    setShowLogout(true);
  };

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
      <ScrollView
        style={styles.container}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.profileHeader}>
          <View style={styles.profileCircle}>
            <Text style={styles.profileIcon}>👤</Text>
          </View>

          <Text style={styles.name}>{name}</Text>

          <Text style={styles.role}>
            FitLife Member 💪
          </Text>

          <View style={styles.memberBadge}>
            <Text style={styles.memberBadgeText}>
              ACTIVE MEMBER
            </Text>
          </View>
        </View>

        <View style={styles.welcomeCard}>
          <View>
            <Text style={styles.welcomeTitle}>
              Welcome back, {name}!
            </Text>

            <Text style={styles.welcomeText}>
              Keep working towards your fitness goals.
            </Text>
          </View>

          <Text style={styles.welcomeIcon}>🔥</Text>
        </View>

        <Text style={styles.sectionTitle}>
          Personal Information
        </Text>

        <View style={styles.card}>
          <View style={styles.infoRow}>
            <View style={styles.iconBox}>
              <Text style={styles.icon}>📧</Text>
            </View>

            <View style={styles.infoContent}>
              <Text style={styles.label}>Email</Text>
              <Text style={styles.value}>{email}</Text>
            </View>
          </View>

          <View style={styles.line} />

          <View style={styles.infoRow}>
            <View style={styles.iconBox}>
              <Text style={styles.icon}>📱</Text>
            </View>

            <View style={styles.infoContent}>
              <Text style={styles.label}>Phone</Text>
              <Text style={styles.value}>{phone}</Text>
            </View>
          </View>
        </View>

        <Text style={styles.sectionTitle}>
          Account Settings
        </Text>

        <TouchableOpacity
          style={styles.actionCard}
          onPress={() => navigation.navigate("EditProfile")}
          activeOpacity={0.8}
        >
          <View style={styles.actionIconBox}>
            <Text style={styles.actionIcon}>✏️</Text>
          </View>

          <View style={styles.actionContent}>
            <Text style={styles.actionTitle}>
              Edit Profile
            </Text>

            <Text style={styles.actionSubtitle}>
              Update your personal information
            </Text>
          </View>

          <Text style={styles.arrow}>›</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.actionCard}
          onPress={() => navigation.navigate("ChangePassword")}
          activeOpacity={0.8}
        >
          <View style={styles.actionIconBox}>
            <Text style={styles.actionIcon}>🔐</Text>
          </View>

          <View style={styles.actionContent}>
            <Text style={styles.actionTitle}>
              Change Password
            </Text>

            <Text style={styles.actionSubtitle}>
              Keep your account secure
            </Text>
          </View>

          <Text style={styles.arrow}>›</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.actionCard}
          onPress={() => navigation.navigate("WorkoutHistory")}
          activeOpacity={0.8}
        >
          <View style={styles.actionIconBox}>
            <Text style={styles.actionIcon}>📜</Text>
          </View>

          <View style={styles.actionContent}>
            <Text style={styles.actionTitle}>
              Workout History
            </Text>

            <Text style={styles.actionSubtitle}>
              View your completed workouts
            </Text>
          </View>

          <Text style={styles.arrow}>›</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.actionCard}
          onPress={() => navigation.navigate("MyBookings")}
          activeOpacity={0.8}
        >
          <View style={styles.actionIconBox}>
            <Text style={styles.actionIcon}>📅</Text>
          </View>

          <View style={styles.actionContent}>
            <Text style={styles.actionTitle}>
              My Bookings
            </Text>

            <Text style={styles.actionSubtitle}>
              View your trainer bookings
            </Text>
          </View>

          <Text style={styles.arrow}>›</Text>
        </TouchableOpacity>

        <Text style={styles.sectionTitle}>
          Fitness Goal 🎯
        </Text>

        <View style={styles.goalCard}>
          <View style={styles.goalIconBox}>
            <Text style={styles.goalIcon}>🔥</Text>
          </View>

          <View style={styles.goalContent}>
            <Text style={styles.goalTitle}>
              Weight Loss
            </Text>

            <Text style={styles.goalText}>
              Keep working towards your goal!
            </Text>

            <View style={styles.goalProgressBackground}>
              <View
                style={[
                  styles.goalProgress,
                  {
                    width: `${Math.min(workouts * 20, 100)}%`,
                  },
                ]}
              />
            </View>
          </View>
        </View>

        <Text style={styles.sectionTitle}>
          My Fitness Stats 📊
        </Text>

        <View style={styles.statsRow}>
          <View style={styles.statCard}>
            <View style={styles.statIconBox}>
              <Text style={styles.statIcon}>💪</Text>
            </View>

            <Text style={styles.statValue}>
              {workouts}
            </Text>

            <Text style={styles.statLabel}>
              Workouts
            </Text>
          </View>

          <View style={styles.statCard}>
            <View style={styles.statIconBox}>
              <Text style={styles.statIcon}>🔥</Text>
            </View>

            <Text style={styles.statValue}>
              {calories}
            </Text>

            <Text style={styles.statLabel}>
              Calories
            </Text>
          </View>
        </View>

        <TouchableOpacity
          style={styles.logoutButton}
          onPress={handleLogout}
          activeOpacity={0.8}
        >
          <Text style={styles.logoutText}>
            🚪 LOGOUT
          </Text>
        </TouchableOpacity>

        <View style={styles.bottomSpace} />
      </ScrollView>

      <Modal
        visible={showLogout}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setShowLogout(false)}
      >
        <View style={styles.modalBackground}>
          <View style={styles.logoutBox}>
            <Text style={styles.logoutIcon}>🚪</Text>

            <Text style={styles.logoutTitle}>
              Logout
            </Text>

            <Text style={styles.logoutMessage}>
              Are you sure you want to logout?
            </Text>

            <View style={styles.logoutActions}>
              <TouchableOpacity
                style={styles.cancelLogoutButton}
                onPress={() => setShowLogout(false)}
                activeOpacity={0.7}
              >
                <Text style={styles.cancelLogoutText}>
                  CANCEL
                </Text>
              </TouchableOpacity>

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
    backgroundColor: "#F5F7FB",
  },

  container: {
    flex: 1,
    backgroundColor: "#F5F7FB",
  },

  profileHeader: {
    backgroundColor: "#172033",
    alignItems: "center",
    paddingTop: 35,
    paddingBottom: 30,
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
  },

  profileCircle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
    borderWidth: 4,
    borderColor: "#035efc",
  },

  profileIcon: {
    fontSize: 52,
  },

  name: {
    color: "#FFFFFF",
    fontSize: 27,
    fontWeight: "bold",
  },

  role: {
    color: "#BFC7D5",
    fontSize: 14,
    marginTop: 5,
  },

  memberBadge: {
    backgroundColor: "#035efc",
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 20,
    marginTop: 12,
  },

  memberBadgeText: {
    color: "#FFFFFF",
    fontSize: 11,
    fontWeight: "bold",
  },

  welcomeCard: {
    backgroundColor: "#FFFFFF",
    marginHorizontal: 15,
    marginTop: 18,
    padding: 18,
    borderRadius: 18,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    elevation: 3,
  },

  welcomeTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#172033",
  },

  welcomeText: {
    fontSize: 13,
    color: "#777777",
    marginTop: 5,
  },

  welcomeIcon: {
    fontSize: 35,
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

  iconBox: {
    width: 45,
    height: 45,
    borderRadius: 13,
    backgroundColor: "#EEF4FF",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 14,
  },

  icon: {
    fontSize: 23,
  },

  infoContent: {
    flex: 1,
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

  actionCard: {
    backgroundColor: "#FFFFFF",
    marginHorizontal: 15,
    marginBottom: 10,
    padding: 16,
    borderRadius: 16,
    flexDirection: "row",
    alignItems: "center",
    elevation: 2,
  },

  actionIconBox: {
    width: 48,
    height: 48,
    borderRadius: 14,
    backgroundColor: "#EEF4FF",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 14,
  },

  actionIcon: {
    fontSize: 23,
  },

  actionContent: {
    flex: 1,
  },

  actionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#172033",
  },

  actionSubtitle: {
    fontSize: 12,
    color: "#888888",
    marginTop: 4,
  },

  arrow: {
    fontSize: 28,
    color: "#777777",
    marginLeft: 8,
  },

  goalCard: {
    backgroundColor: "#FFFFFF",
    marginHorizontal: 15,
    borderRadius: 18,
    padding: 18,
    flexDirection: "row",
    alignItems: "center",
    elevation: 3,
  },

  goalIconBox: {
    width: 55,
    height: 55,
    borderRadius: 17,
    backgroundColor: "#FFF1E8",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },

  goalIcon: {
    fontSize: 30,
  },

  goalContent: {
    flex: 1,
  },

  goalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#172033",
  },

  goalText: {
    color: "#777777",
    marginTop: 4,
    fontSize: 13,
  },

  goalProgressBackground: {
    height: 7,
    backgroundColor: "#E5E7EB",
    borderRadius: 10,
    marginTop: 10,
    overflow: "hidden",
  },

  goalProgress: {
    height: 7,
    backgroundColor: "#035efc",
    borderRadius: 10,
  },

  statsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },

  statCard: {
    width: "48%",
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    paddingVertical: 20,
    alignItems: "center",
    elevation: 3,
  },

  statIconBox: {
    width: 52,
    height: 52,
    borderRadius: 16,
    backgroundColor: "#EEF4FF",
    justifyContent: "center",
    alignItems: "center",
  },

  statIcon: {
    fontSize: 27,
  },

  statValue: {
    fontSize: 27,
    fontWeight: "bold",
    color: "#172033",
    marginTop: 8,
  },

  statLabel: {
    color: "#777777",
    marginTop: 3,
    fontSize: 13,
  },

  logoutButton: {
    backgroundColor: "#D32F2F",
    marginHorizontal: 15,
    marginTop: 30,
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: "center",
    elevation: 2,
  },

  logoutText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },

  bottomSpace: {
    height: 35,
  },

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
    borderRadius: 22,
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