import React from "react";
import { AuthProvider } from "./src/context/AuthContext";
import TaskScreen from "./src/screens/user/TaskScreen";
import Menu from "./src/screens/Menu";
import AppNav from "./src/screens/AppNav";


export default function App() {
  return (
    <AuthProvider>
     <AppNav></AppNav>
    </AuthProvider>
  );
}
