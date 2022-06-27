import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const IconButton = ({ onPress, icon, color = "white", size = 24 }) => {
  return (
    <Pressable
      omPress={onPress}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <Ionicons name={icon} size={size} color={color} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7,
  },
});

export default IconButton;
