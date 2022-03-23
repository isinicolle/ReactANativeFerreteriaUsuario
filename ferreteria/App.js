import React from "react";
import Configuraciones from "./src/Panallas/configuraciones";
import Menu from "./src/Panallas/Menu";
import { StatusBar } from "react-native";
export default function App() {
    return (<>
    <StatusBar></StatusBar>
    <Menu />
    </>
    );
  }