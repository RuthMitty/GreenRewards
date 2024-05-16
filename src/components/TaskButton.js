import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { View, StyleSheet, Text } from "react-native";



export default function TaskButton  ({ item, onPress })  {
    return(
  <TouchableOpacity style={[styles.taskButton]} onPress={onPress}>
    <Text style={styles.taskText}>{item.name}</Text>
    <View style={styles.iconContainer}>
      <AntDesign name="down" size={24} color="#868686" />
    </View>
  </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
  taskButton: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 8,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    height: 55,
    backgroundColor: "#fff",
    shadowColor: "black",
    shadowOffset: {
      width: 1,
      height: 1,
    },
    elevation: 3,
  },
  iconContainer: {
    marginRight: 8,
  },
  taskText: {
    fontSize: 20,
    color: "green",
    flex: 1,
  },
  

});
