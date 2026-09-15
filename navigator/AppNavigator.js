import { createNativeStackNavigator } from "@react-navigation/native-stack";

import RegistrationScreen from "../screens/RegistrationScreen";
import LoginScreen from "../screens/LoginScreen";
import WorkoutDetailsScreen from "../screens/WorkoutDetailsScreen";
import WorkoutScreen from "../screens/WorkoutScreen";
import WorkoutHistoryScreen from "../screens/WorkoutHistoryScreen";
import TrainerBookingScreen from "../screens/TrainerBookingScreen";
import EditProfileScreen from "../screens/EditProfileScreen";
import ChangePasswordScreen from "../screens/ChangePasswordScreen";
import BottomTabs from "./BottomTabs";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Registration">

      {/* Registration */}
      <Stack.Screen
        name="Registration"
        component={RegistrationScreen}
      />

      {/* Login */}
      <Stack.Screen
        name="Login"
        component={LoginScreen}
      />

      {/* Main App */}
      <Stack.Screen
        name="Main"
        component={BottomTabs}
        options={{ headerShown: false }}
      />

      {/* Trainer Booking */}
      <Stack.Screen
        name="TrainerBooking"
        component={TrainerBookingScreen}
        options={{ title: "Book Trainer" }}
      />

      {/* Workout Details */}
      <Stack.Screen
        name="WorkoutDetails"
        component={WorkoutDetailsScreen}
      />

      {/* Workout */}
      <Stack.Screen
        name="Workout"
        component={WorkoutScreen}
      />

      {/* Workout History */}
      <Stack.Screen
        name="WorkoutHistory"
        component={WorkoutHistoryScreen}
        options={{ title: "Workout History" }}
      />

      {/* Edit Profile */}
      <Stack.Screen
        name="EditProfile"
        component={EditProfileScreen}
        options={{ title: "Edit Profile" }}
      />

      {/* Change Password */}
      <Stack.Screen
        name="ChangePassword"
        component={ChangePasswordScreen}
        options={{ title: "Change Password" }}
      />

    </Stack.Navigator>
  );
}