import { createNativeStackNavigator } from "@react-navigation/native-stack";

import RegistrationScreen from "../screens/RegistrationScreen";
import LoginScreen from "../screens/LoginScreen";
import WorkoutDetailsScreen from "../screens/WorkoutDetailsScreen";
import WorkoutScreen from "../screens/WorkoutScreen";
import WorkoutHistoryScreen from "../screens/WorkoutHistoryScreen";
import TrainerBookingScreen from "../screens/TrainerBookingScreen";
import MyBookingsScreen from "../screens/MyBookingsScreen";
import EditProfileScreen from "../screens/EditProfileScreen";
import ChangePasswordScreen from "../screens/ChangePasswordScreen";
import BottomTabs from "./BottomTabs";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Registration"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="Registration"
        component={RegistrationScreen}
      />

      <Stack.Screen
        name="Login"
        component={LoginScreen}
      />

      <Stack.Screen
        name="Main"
        component={BottomTabs}
      />

      <Stack.Screen
        name="TrainerBooking"
        component={TrainerBookingScreen}
      />

      <Stack.Screen
        name="MyBookings"
        component={MyBookingsScreen}
      />

      <Stack.Screen
        name="WorkoutDetails"
        component={WorkoutDetailsScreen}
      />

      <Stack.Screen
        name="Workout"
        component={WorkoutScreen}
      />

      <Stack.Screen
        name="WorkoutHistory"
        component={WorkoutHistoryScreen}
      />

      <Stack.Screen
        name="EditProfile"
        component={EditProfileScreen}
      />

      <Stack.Screen
        name="ChangePassword"
        component={ChangePasswordScreen}
      />
    </Stack.Navigator>
  );
}