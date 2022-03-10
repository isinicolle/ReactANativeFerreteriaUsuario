import { StatusBar } from 'expo-status-bar';
import { TextInput, StyleSheet, Text, View,Image,SafeAreaView} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
import {Boton,HiperVinculo,TextBox,PasswordBox,Footer,Header,ListaCarrito} from '../componentes/'
import AsyncStorage from '@react-native-async-storage/async-storage';
const Carrito = ({id})=> {
  
 
  return (
    <SafeAreaView style={styles.container}>
        <ListaCarrito id={id}/>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
    container: {

    },
    logo:{
     
    },
    tarjeta:{
     
    }
    ,
    header:{
     
    },
   
    h1Tarjeta:{
     
    },
    h2Tarjeta:{
      
    }
  
  })
  export default Carrito;