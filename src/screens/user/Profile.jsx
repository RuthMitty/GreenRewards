import React from "react";
import {View, Image, FlatList, StyleSheet, Text, TouchableOpacity, ImageBackground} from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import circleImage from "../user/user2.png";
import ImageBg from "../user/Group20.png";
import BottomBar from "../../components/BottomBar";
import TaskButton from "../../components/TaskButton";


const Drawer = createDrawerNavigator();

export default TaskScreen = () => {
  const navigation = useNavigation();

  const tasks = [
    { id: 1, name: "Acción verde", completed: true },
    { id: 2, name: "Acción verde", completed: true },
    { id: 3, name: "Acción verde", completed: false },
  ];

  const handleButtonPress = (item) => {
    console.log(`Botón presionado: ${item.name}`);
  };

  const openDrawer = () => {
    navigation.openDrawer();
  };

 
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={openDrawer} style={styles.menuButton}>
        <Text>☰</Text>
      </TouchableOpacity>

      <Image source={circleImage} style={styles.circleImage} />
      <View style={styles.taskContainer}>
        <Text style={styles.taskTitle}>Tareas en proceso</Text>
        <FlatList
          data={tasks}
          renderItem={({ item }) => (
            <TaskButton item={item} onPress={() => handleButtonPress(item)} />
          )}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.taskList}
        />
      </View>
      <BottomBar />
      <ImageBackground source={ImageBg} style={styles.backgroundImage} />
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  backgroundImage: {
    position: "absolute",
    bottom: "35%",
    left: 0,
    right: 0,
    width: "100%",
    height: "65%",
    zIndex: -1,
  },
  circleImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20,
  },
  taskContainer: {
    width: "100%",
    paddingHorizontal: 50,
    marginTop: 30,
  },
  taskTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "green",
    alignSelf: "flex-start",
  },
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
  checkIcon: {
    width: 20,
    height: 20,
  },
  menuButton: {
    position: "absolute",
    top: 20,
    left: 20,
    zIndex: 1,
  },
});


