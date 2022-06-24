import { Image, ScrollView, Text, StyleSheet } from "react-native";
import MealDetails from "../components/MealDetails";
import Paper from "../components/Paper";

import { MEALS } from "../data/data";

const MealDetailScreen = ({ route }) => {
  const { mealId } = route.params;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  return (
    <ScrollView style={styles.container}>
      <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
      />
      <Text style={styles.subtitle}>Ingredients</Text>
      <Paper>
        {selectedMeal.ingredients.map((ingredient) => (
          <Text key={ingredient}> - {ingredient}</Text>
        ))}
      </Paper>
      <Text style={styles.subtitle}>Steps</Text>
      <Paper>
        {selectedMeal.steps.map((step) => (
          <Text key={step}> - {step}</Text>
        ))}
      </Paper>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "#da3",
  },
  subtitle: {
    fontWeight: "bold",
    fontSize: 18,
    margin: 14,
    textAlign: "center",
    color: "#fff",
  },
});

export default MealDetailScreen;
