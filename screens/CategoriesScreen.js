import { FlatList } from "react-native";
import CategoryGridTile from "../components/CatedoryGridTile";
import { CATEGORIES } from "../data/data";

const CategoriesScreen = ({ navigation }) => {
  const renderCategoryItem = ({ item }) => {
    function pressHandler() {
      navigation.navigate('MealsOverview', { 
        categoryId: item.id
      });
    }
    return (
      <CategoryGridTile
        title={item.title}
        color={item.color}
        onPress={pressHandler}
      />
    );
  };

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
};

export default CategoriesScreen;
