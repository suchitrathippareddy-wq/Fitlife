import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Modal,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function ChangePasswordScreen({ navigation }) {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showSuccess, setShowSuccess] = useState(false);

  const changePassword = async () => {
    // Check empty fields
    if (
      oldPassword.trim() === "" ||
      newPassword.trim() === "" ||
      confirmPassword.trim() === ""
    ) {
      Alert.alert(
        "Error",
        "Please fill all fields"
      );
      return;
    }

    // Check password length
    if (newPassword.length < 6) {
      Alert.alert(
        "Error",
        "New password must be at least 6 characters"
      );
      return;
    }

    // Check confirm password
    if (newPassword !== confirmPassword) {
      Alert.alert(
        "Error",
        "New passwords do not match"
      );
      return;
    }

    try {
      // Save new password
      await AsyncStorage.setItem(
        "userPassword",
        newPassword
      );

      // Show success popup
      setShowSuccess(true);

    } catch (error) {
      console.log(
        "Change Password Error:",
        error
      );

      Alert.alert(
        "Error",
        "Password change failed"
      );
    }
  };

  const closeSuccessPopup = () => {
    setShowSuccess(false);

    setOldPassword("");
    setNewPassword("");
    setConfirmPassword("");

    navigation.goBack();
  };

  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        Change Password 🔐
      </Text>

      <Text style={styles.subtitle}>
        Update your FitLife account password
      </Text>

      {/* Current Password */}
      <Text style={styles.label}>
        Current Password
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Enter current password"
        placeholderTextColor="#999999"
        secureTextEntry={true}
        value={oldPassword}
        onChangeText={setOldPassword}
      />

      {/* New Password */}
      <Text style={styles.label}>
        New Password
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Enter new password"
        placeholderTextColor="#999999"
        secureTextEntry={true}
        value={newPassword}
        onChangeText={setNewPassword}
      />

      {/* Confirm Password */}
      <Text style={styles.label}>
        Confirm New Password
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Confirm new password"
        placeholderTextColor="#999999"
        secureTextEntry={true}
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />

      {/* Change Password Button */}
      <TouchableOpacity
        style={styles.button}
        onPress={changePassword}
        activeOpacity={0.7}
      >
        <Text style={styles.buttonText}>
          🔐 CHANGE PASSWORD
        </Text>
      </TouchableOpacity>

      {/* Cancel */}
      <TouchableOpacity
        style={styles.cancelButton}
        onPress={() => navigation.goBack()}
        activeOpacity={0.7}
      >
        <Text style={styles.cancelText}>
          CANCEL
        </Text>
      </TouchableOpacity>

      {/* SUCCESS POPUP */}
      <Modal
        visible={showSuccess}
        transparent={true}
        animationType="fade"
        onRequestClose={closeSuccessPopup}
      >
        <View style={styles.modalBackground}>

          <View style={styles.successBox}>

            <Text style={styles.successIcon}>
              🎉
            </Text>

            <Text style={styles.successTitle}>
              Password Changed Successfully!
            </Text>

            <Text style={styles.successMessage}>
              Your new password has been saved successfully.
            </Text>

            <TouchableOpacity
              style={styles.okButton}
              onPress={closeSuccessPopup}
              activeOpacity={0.7}
            >
              <Text style={styles.okButtonText}>
                OK
              </Text>
            </TouchableOpacity>

          </View>

        </View>
      </Modal>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F7FA",
    padding: 20,
    justifyContent: "center",
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#172033",
    textAlign: "center",
  },

  subtitle: {
    fontSize: 15,
    color: "#777777",
    textAlign: "center",
    marginTop: 8,
    marginBottom: 35,
  },

  label: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#172033",
    marginBottom: 7,
  },

  input: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#DDDDDD",
    borderRadius: 12,
    padding: 15,
    fontSize: 16,
    marginBottom: 18,
    color: "#172033",
  },

  button: {
    backgroundColor: "#172033",
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 5,
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "bold",
  },

  cancelButton: {
    paddingVertical: 15,
    alignItems: "center",
    marginTop: 10,
  },

  cancelText: {
    color: "#777777",
    fontSize: 15,
    fontWeight: "600",
  },

  // SUCCESS POPUP

  modalBackground: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
    padding: 25,
  },

  successBox: {
    width: "100%",
    maxWidth: 450,
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 30,
    alignItems: "center",
    elevation: 10,
  },

  successIcon: {
    fontSize: 50,
    marginBottom: 10,
  },

  successTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#172033",
    textAlign: "center",
  },

  successMessage: {
    fontSize: 15,
    color: "#666666",
    textAlign: "center",
    marginTop: 10,
    lineHeight: 22,
  },

  okButton: {
    backgroundColor: "#172033",
    width: "100%",
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 25,
  },

  okButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});