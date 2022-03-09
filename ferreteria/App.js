import { StatusBar } from 'expo-status-bar';
import { ScrollView,TextInput, StyleSheet, Text, View,Image,SafeAreaView} from 'react-native';
import {
  Login,
  AgregarDireccion,
  Condiciones,
  HistorialCompra,
  HistorialDetalle
  ,MisionVision,
  Privacidad
  ,Inicio
  ,Producto
  ,Config,
  ConfirmarCorreo,
  Direcciones,Carrito,
  Pago,
  OlvidarContra
  ,RegistroTerminado
  ,Busqueda
  ,InformacionUsuario
  
  } from './src/Panallas'
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();
export default function App() {
  return (
    <SafeAreaView>
      {/*<Login/>*/}
     {/* <Inicio/>*/}
    {/*<AgregarDireccion/>*/}
    {/*<Condiciones/>*/}
    {/*<HistorialCompra/>*/}
    {/*<HistorialDetalle/>*/}
    {/*<MisionVision/>*/}
    {/*<Privacidad/>*/}
    {/*<Producto />*/}
    {/*<Config/>*/}
    {/*<ConfirmarCorreo/>*/}
    {/*<Direcciones/>*/}
    {/*<Carrito id={2}/>*/}
    {/*<Pago id={2}/>*/}
    {<OlvidarContra/>}
    {/*<RegistroTerminado/>*/}
    {/*<Busqueda/>*/}
    {/*<InformacionUsuario/>*/}
    </SafeAreaView>
  );
}
