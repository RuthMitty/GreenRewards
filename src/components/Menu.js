import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import TaskScreen from "./user/TaskScreen";
import CustomDrawer from "../components/CustomDrawer"
import Profile from "./user/Profile"

const Drawer = createDrawerNavigator();

const Menu = () => {
  return (

    <Drawer.Navigator drawerContent={props => <CustomDrawer {...props}/> }>
    <Drawer.Screen
        name="Mis Acciones"
        component={TaskScreen}
        options={{ headerShown: false }} 
      />
      <Drawer.Screen
        name="Mis Datos"
        component={Profile}
      />
  </Drawer.Navigator>
  );
};

export default Menu;