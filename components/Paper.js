import { View, StyleSheet } from "react-native";

const Paper = ({ children }) => <View style={styles.paper}>{children}</View>;

const styles = StyleSheet.create({
  paper: {
    marginHorizontal: 8,
    padding: 8,
    backgroundColor: "#fff",
    borderRadius: 10,
  },
});

export default Paper;
