import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import TaskScreen from "../screens/user/Profile";
import MyRewards from "../screens/user/MyRewards";

const Drawer = createDrawerNavigator();

const Menu = () => {
  return (

      <Drawer.Navigator>
      <Drawer.Screen
          name="Mis Acciones"
          component={TaskScreen}
          options={{ headerShown: false }} 
        />
        <Drawer.Screen
          name="Mis recompensas"
          component={MyRewards}
          options={{ headerShown: false }} 
        />
        
   
      </Drawer.Navigator>
  );
};

export default Menu;