import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./user/Actions";
import Rewards from "./user/Rewards";
import Profile from "./user/Profile";
import actions from "../.././assets/images/actions.png"
import rewards from "../.././assets/images/rewards.png"
import user from "../.././assets/images/user.png"
import Menu from "./Menu";
import TaskScreen from "./user/TaskScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();

const Tab = createBottomTabNavigator();

export default function TabNavigator(){
    return(
        <Tab.Navigator
        initialRouteName="Actions"
        screenOptions={{
          tabBarStyle: {
            shadowColor: "#12378C55",
            shadowOffset: { width: 0, height: 18.3 },
            shadowOpacity: 1,
            shadowRadius: 18.3,
            backgroundColor: "#FFFFFF",
            width: "100%",
            height: 'auto',
            paddingHorizontal: 23,
            paddingVertical: 19,
            flexDirection: "row",
            justifyContent: "space-between"
          },
          tabBarActiveTintColor: 'rgba(61, 153, 94, 0.2436)',
          tabBarInactiveTintColor: 'white'
        }}
      >
        <Tab.Screen
          name="Acciones"
          component={Home}
          options={{
            tabBarButton: (props) => (
              // Personaliza tu botón aquí
              <TouchableOpacity style={styles.botonMenu} {...props}>
                <Image source={actions} style={styles.iconMenu} />
                <Text style={styles.textMenu}>Acciones</Text>
              </TouchableOpacity>
            ),
          }}
        />
        <Tab.Screen
          name="Recompensas"
          component={Rewards}
          options={{
            tabBarButton: (props) => (
              // Personaliza tu botón aquí
              <TouchableOpacity style={styles.botonMenu} {...props}>
                <Image source={rewards} style={styles.iconMenu} />
                <Text style={styles.textMenu}>Recompensas</Text>
              </TouchableOpacity>
            ),
          }}
        />
        <Tab.Screen
          name="Perfil"
          component={Menu}
          options={{
            tabBarButton: (props) => (
              // Personaliza tu botón aquí
              <TouchableOpacity style={styles.botonMenu} {...props}>
                <Image source={user} style={styles.iconMenu} />
                <Text style={styles.textMenu}>Perfil</Text>
              </TouchableOpacity>
            ),
          }}
          
        />
        
      </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    contenedor: {
      flex: 1,
      width: "100%",
      height: "100%",
    },
    botonMenu: {
      flex: 1,
      columnGap: 10,
    },
    iconMenu: {
      height: 30,
      width: 30,
      resizeMode: "contain",
    },
    textMenu: {
      fontSize: 11,
    },
  });