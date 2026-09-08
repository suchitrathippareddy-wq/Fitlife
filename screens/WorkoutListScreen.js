import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";

export default function WorkoutListScreen({ navigation }) {

  const workouts = [
    {
      title: "🔥 Full Body Workout",
      duration: "45 Minutes",
      calories: "350",
      difficulty: "Intermediate",
    },
    {
      title: "💪 Chest & Triceps",
      duration: "45 Minutes",
      calories: "320",
      difficulty: "Intermediate",
    },
    {
      title: "🦵 Leg Workout",
      duration: "60 Minutes",
      calories: "420",
      difficulty: "Advanced",
    },
    {
      title: "🧘 Yoga Session",
      duration: "30 Minutes",
      calories: "180",
      difficulty: "Beginner",
    },
  ];

  return (
    <ScrollView style={styles.container}>

      <Text style={styles.heading}>
        💪 Workouts
      </Text>

      <Text style={styles.subtitle}>
        Choose your workout
      </Text>

      {workouts.map((workout, index) => (

        <TouchableOpacity
          key={index}
          style={styles.card}
          onPress={() =>
            navigation.navigate("WorkoutDetails", {
              title: workout.title.replace(/^.{2}/, ""),
              duration: workout.duration,
              calories: workout.calories,
              difficulty: workout.difficulty,
            })
          }
        >

          <Text style={styles.title}>
            {workout.title}
          </Text>

          <View style={styles.infoRow}>

            <Text style={styles.info}>
              ⏱️ {workout.duration}
            </Text>

            <Text style={styles.info}>
              🔥 {workout.calories} kcal
            </Text>

          </View>

          <Text style={styles.difficulty}>
            📈 {workout.difficulty}
          </Text>

          <View style={styles.startRow}>
            <Text style={styles.start}>
              VIEW WORKOUT
            </Text>

            <Text style={styles.arrow}>
              →
            </Text>
          </View>

        </TouchableOpacity>

      ))}

    </ScrollView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    padding: 15,
  },

  heading: {
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 15,
  },

  subtitle: {
    fontSize: 15,
    color: "#777777",
    marginTop: 5,
    marginBottom: 15,
  },

  card: {
    backgroundColor: "#FFFFFF",
    padding: 20,
    borderRadius: 18,
    marginBottom: 15,
    elevation: 4,
  },

  title: {
    fontSize: 21,
    fontWeight: "bold",
    marginBottom: 15,
  },

  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  info: {
    fontSize: 14,
    color: "#555555",
  },

  difficulty: {
    marginTop: 12,
    fontSize: 14,
    color: "#666666",
  },

  startRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 18,
  },

  start: {
    fontSize: 14,
    fontWeight: "bold",
  },

  arrow: {
    fontSize: 22,
    fontWeight: "bold",
  },

});