import styles from "../components/styles/styles";
import { ScrollView } from "react-native";
import Header from "../components/Header";
import WelcomeCard from "../components/WelcomeCard";
import WorkoutCard from "../components/WorkoutCard";
import TrainerCard from "../components/TrainerCard";
import ProgressCard from "../components/ProgressCard";
import Footer from "../components/Footer";

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <Header />

      <WelcomeCard />

      <WorkoutCard
        title="Chest Workout"
        duration="45 Minutes"
      />

      <WorkoutCard
        title="Leg Workout"
        duration="60 Minutes"
      />

      <WorkoutCard
        title="Yoga Session"
        duration="30 Minutes"
      />

      <TrainerCard
        name="John"
        specialty="Strength Coach"
      />

      <TrainerCard
        name="Sarah"
        specialty="Yoga Trainer"
      />

      <ProgressCard
        goal="Weight Loss"
        progress="70%"
      />

      <Footer />
    </ScrollView>
  );
}