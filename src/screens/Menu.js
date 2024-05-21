import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import TaskScreen from "./user/TaskScreen";

const Drawer = createDrawerNavigator();

const Menu = () => {
  return (

      <Drawer.Navigator>
      <Drawer.Screen
          name="Mis Acciones"
          component={TaskScreen}
          options={{ headerShown: false }} 
        />
      </Drawer.Navigator>
  );
};

export default Menu;