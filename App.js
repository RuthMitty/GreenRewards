import React from "react";

import { AuthProvider } from "./src/context/AuthContext";
import AppNav from "./src/screens/AppNav";
// import AnimacionInicio from './src/screens/AnimacionInicio';



export default function App() {
  return (
    <AuthProvider>
      <AppNav></AppNav>
    </AuthProvider>
  );
}


