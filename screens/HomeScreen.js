import { ScrollView } from "react-native";
import Header from "../components/Header";
import WelcomeCard from "../components/WelcomeCard";
import WorkoutCard from "../components/WorkoutCard";
import TrainerCard from "../components/TrainerCard";
import ProgressCard from "../components/ProgressCard";
import Footer from "../components/Footer";

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView>

      <Header />

      <WelcomeCard />

      {/* Workout Section */}

      <WorkoutCard
        title="Chest & Triceps"
        duration="45 Minutes"
        calories="320"
        difficulty="Intermediate"
      />

      <WorkoutCard
        title="Leg Workout"
        duration="60 Minutes"
        calories="420"
        difficulty="Advanced"
      />

      <WorkoutCard
        title="Yoga Session"
        duration="30 Minutes"
        calories="180"
        difficulty="Beginner"
      />

      {/* Trainers */}

      <TrainerCard
        name="John"
        specialty="Strength Coach"
      />

      <TrainerCard
        name="Sarah"
        specialty="Yoga Trainer"
      />

      {/* Progress */}

      <ProgressCard
        goal="Weight Loss"
        progress="70%"
      />

      <Footer />

    </ScrollView>
  );
}