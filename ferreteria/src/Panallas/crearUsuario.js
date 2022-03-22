import { StatusBar } from 'expo-status-bar';
import React, { Component} from 'react';
import { TextInput, StyleSheet, Text, View,Image,SafeAreaView,ScrollView , Alert} from 'react-native';
import {Boton,HiperVinculo,TextBox,PasswordBox,Footer} from '../componentes/'
import { useState } from 'react';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Pantalla = ()=> {
  const nav = useNavigation();
  const [nombre, setNombre]= useState('');
    const [correo, setCorreo]= useState('');
    const [contrasenia, setContrasenia]= useState('');
    const usuarioNuevo = async() =>{
      
      console.log(nombre);
        try{
        /*const respuesta = await fetch(
          'http://192.168.0.8:6001/api/usuarioCliente/insertarUsuarioCliente',{
            method: 'POST',
           headers:{
             Accept: 'application/json',
             'Content-Type': 'application/json'
           },
           body: JSON.stringify({
             nombre_usuario: nombre,
             contraenia_usuario: contrasenia,
             correo_usuario: correo,
           })
          });
          const json = await respuesta.json();
          console.log(json);*/
          nav.navigate('RegistroTerminado');
          
         } catch(error){
           console.log(error);
        }
    }
  return (
    <ScrollView>
    <SafeAreaView style={styles.container}>
    <Image style={styles.logo} source={require('../../assets/Images/Imagotipo.png')}/>
    <Text style={styles.header}>¡Nos encantará que seas parte de nosotros!</Text>
  
    <View style={styles.tarjeta}>
        <TextBox text={'Nombre'} icon={'face'} setValue={setNombre} value={nombre}/>
        <TextBox text={'Correo electrónico'} icon={'email'} setValue={setCorreo} value={correo}/>
        <PasswordBox  text={'Contraseña'} />
        <PasswordBox text={'Confirmar contraseña'} setValue={setContrasenia} value={contrasenia}/>
        <Boton text={'Crear Cuenta'} onPress={usuarioNuevo}/>
    </View>
    <Footer/>
  </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#F8F8F8',
    alignItems:'center',
    flexDirection:'column',
    flexWrap:'wrap',
    alignContent:'center',
    height:'100%'
  },
  logo:{
    width:102,
    height:102,
    marginTop:'10%',
    marginBottom:'2%',
    padding:10,
  },
  tarjeta:{
    flex:1,
    padding:10,
    backgroundColor: '#fff',
    shadowColor: "#C70039",
    shadowOffset: 
      {
	    width: 0,
	    height: 13,
      },
    
    shadowOpacity: 0.44,
    shadowRadius: 28,
    elevation: 16,
    width:'90%',
    flexGrow:1,
    borderRadius:20,
    maxWidth:500
    }
  ,
  
  header:{
    color:'#000',
    fontFamily:'Arial' || null ,
    fontFamily:'sans-serif',
    fontStyle:'normal',
    fontWeight:'bold',
    fontSize:18,
    flex:0,
    marginLeft:'10%',
    marginRight:'10%',
    textAlign:'center',
    marginBottom:20
  },
 
  h1Tarjeta:{
    color:'#000',
    fontFamily:'Arial' || null,
    fontStyle:'normal',
    fontWeight:'bold',
    fontSize:18,
   textAlign:'center',
   paddingTop:20
  },
  h2Tarjeta:{
    color:'#000',
    fontFamily:'Arial' || null,
    fontStyle:'normal',
    fontWeight:'normal',
    fontSize:16,
    textAlign:'center',
    paddingTop:20
  }

})

export default Pantalla;