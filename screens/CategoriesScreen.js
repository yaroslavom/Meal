import { FlatList } from "react-native";
import CategoryGridTile from "../components/CatedoryGridTile";
import { CATEGORIES } from "../data/data";

const renderCategoryItem = ({ item }) => (
  <CategoryGridTile title={item.title} color={item.color} />
);

const CategoriesScreen = () => {
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
