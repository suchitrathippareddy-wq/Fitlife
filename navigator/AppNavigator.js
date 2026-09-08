import { createNativeStackNavigator } from "@react-navigation/native-stack";

import RegistrationScreen from "../screens/RegistrationScreen";
import LoginScreen from "../screens/LoginScreen";
import WorkoutDetailsScreen from "../screens/WorkoutDetailsScreen";
import WorkoutScreen from "../screens/WorkoutScreen";
import BottomTabs from "./BottomTabs";

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
        name="Main"
        component={BottomTabs}
        options={{ headerShown: false }}
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