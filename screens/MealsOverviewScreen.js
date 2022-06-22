import { View, Text, FlatList, StyleSheet } from "react-native";
import MealItem from "../components/MealItem";
import { MEALS } from "../data/data";

const MealsOverviewScreen = ({ route }) => { // or use useRoute instead of route props
  const { categoryId } = route.params;
  const displayedMeals = MEALS.filter(
    (mealItem) => mealItem.categoryIds.indexOf(categoryId) >= 0
  );
  const renderMealItem = ({item}) => {
    const mealItemProps = {
        title: item.title,
        imageUrl: item.imageUrl,
        affordability: item.affordability,
        complexity: item.complexity,
        duration: item.duration
    } 
    return <MealItem {...mealItemProps}></MealItem>
  }

  return (
    <View style={styles.container}>
      <FlatList data={displayedMeals} keyExtractor={(item) => item.id} renderItem={renderMealItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default MealsOverviewScreen;
