import React from "react";
import { AuthProvider } from "./src/context/AuthContext";
import TaskScreen from "./src/screens/user/Profile";
import Menu from "./src/components/Menu";
import AppNav from "./src/screens/AppNav";


export default function App() {
  return (
    <AuthProvider>
     <AppNav></AppNav>
    </AuthProvider>
  );
}
