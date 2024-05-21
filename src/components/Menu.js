import React from "react";
import { View, Image, FlatList, StyleSheet, Text, TouchableOpacity, ImageBackground } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
export default function Menu() {
    const Drawer = createDrawerNavigator();
    return (
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name="TaskScreen" component={TaskScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }
  