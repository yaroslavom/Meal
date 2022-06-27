import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";

import CategoriesScreen from "./screens/CategoriesScreen";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailScreen from "./screens/MealDetailScreen";
import FavoritesScreen from "./screens/FavoritesScreen";

export default function App() {
  const Stack = createNativeStackNavigator();
  const Drawer = createDrawerNavigator();

  const DrawerNavigator = () => {
    return (
      <Drawer.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "#464374" },
          headerTintColor: "#fff",
          sceneContainerStyle: { backgroundColor: "#8785a6" },
          drawerContentStyle: { backgroundColor: "#8785a6" },
          drawerActiveTintColor: "#fff",
          drawerInactiveTintColor: "#e8e8e8",
          drawerActiveBackgroundColor: "#464374",
        }}
      >
        <Drawer.Screen
          name="Categories"
          component={CategoriesScreen}
          options={{
            title: "All Categories",
            drawerIcon: ({ color, size }) => (
              <Ionicons name="list" color={color} size={size} />
            ),
          }}
        />
        <Drawer.Screen
          name="Favorites"
          component={FavoritesScreen}
          options={{
            drawerIcon: ({ color, size }) => (
              <Ionicons name="star" color={color} size={size} />
            ),
          }}
        />
      </Drawer.Navigator>
    );
  };

  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#464374" },
            headerTintColor: "#fff", // background style for font
            contentStyle: { backgroundColor: "#8785a6" }, // background style for main container
          }}
        >
          <Stack.Screen
            name="Drawer"
            component={DrawerNavigator}
            options={{
              headerShown: false, // hide stack navigator
            }}
          />
          <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} />
          <Stack.Screen
            name="MealsDetail"
            component={MealDetailScreen}
            options={{ title: "About the Meal" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
