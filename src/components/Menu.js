import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import TaskScreen from "../screens/user/TaskScreen";
import CustomDrawer from "../components/CustomDrawer"
import Profile from "../screens/user/Profile"

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