import { createNativeStackNavigator } from "@react-navigation/native-stack";

import RegistrationScreen from "../screens/RegistrationScreen";
import LoginScreen from "../screens/LoginScreen";
import HomeScreen from "../screens/HomeScreen";
import WorkoutDetailsScreen from "../screens/WorkoutDetailsScreen";
import WorkoutScreen from "../screens/WorkoutScreen";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Registration">

      <Stack.Screen
        name="Registration"
        component={RegistrationScreen}
      />

      <Stack.Screen
        name="Login"
        component={LoginScreen}
      />

      <Stack.Screen
        name="Home"
        component={HomeScreen}
      />

      <Stack.Screen
        name="WorkoutDetails"
        component={WorkoutDetailsScreen}
      />

      <Stack.Screen
        name="Workout"
        component={WorkoutScreen}
      />

    </Stack.Navigator>
  );
}