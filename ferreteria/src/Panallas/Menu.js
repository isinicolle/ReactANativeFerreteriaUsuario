import * as React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//Pantallas
import { Login,CrearUsuario, AgregarDireccion, Condiciones, HistorialCompra, HistorialDetalle, MisionVision, Privacidad, Inicio, Producto, Config, ConfirmarCorreo, Direcciones, Carrito, Pago, OlvidarContra, RegistroTerminado, Busqueda, InformacionUsuario } from './index';

const Stack = createNativeStackNavigator();
export default function Menu() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Inicio" component={Inicio} />
        <Stack.Screen name="Producto" component={Producto} />
        <Stack.Screen name="AgregarDireccion" component={AgregarDireccion} />
        <Stack.Screen name="Condiciones" component={Condiciones} />
        <Stack.Screen name="HistorialCompra" component={HistorialCompra} />
        <Stack.Screen name="HistorialDetalle" component={HistorialDetalle} />
        <Stack.Screen name="MisionVision" component={MisionVision} />
        <Stack.Screen name="Privacidad" component={Privacidad} />
        <Stack.Screen name="Config" component={Config} />
        <Stack.Screen name="ConfirmarCorreo" component={ConfirmarCorreo} />
        <Stack.Screen name="Direcciones" component={Direcciones} />
        <Stack.Screen name="Carrito" component={Carrito} />
        <Stack.Screen name="Pago" component={Pago} />
        <Stack.Screen name="OlvidarContra" component={OlvidarContra} />
        <Stack.Screen name="RegistroTerminado" component={RegistroTerminado} />
        <Stack.Screen name="Busqueda" component={Busqueda} />
        <Stack.Screen name="InformacionUsuario" component={InformacionUsuario} />
        <Stack.Screen name="crearUsuario" component={CrearUsuario}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}