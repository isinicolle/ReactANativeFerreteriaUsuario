import { StatusBar } from 'expo-status-bar';
import React, { Component} from 'react';
import { TextInput, StyleSheet, Text, View,Image,SafeAreaView, Alert} from 'react-native';
import {Boton,HiperVinculo,TextBox,PasswordBox,Footer} from '../componentes/'
import { useState } from 'react';

const Pantalla = ()=> {
  const [nombre, setNombre]= useState(null);
    const [correo, setCorreo]= useState(null);
    const [contrasenia, setContrasenia]= useState(null);
    const usuarioNuevo = async() =>{
      if(2<1){
        console.log("Escriba todos los datos");
        Alert.alert("Ferretear","Revise sus datos")
      }else{
        try{
        const respuesta = await fetch(
          'http://192.168.0.10:6001/api/usuarioCliente/insertarUsuarioCliente',{
            method: 'POST',
           headers:{
             Accept: 'application/json',
             'Content-Type': 'application/json'
           },
           body: JSON.stringify({
             nombre_usuario: nombre,
             contraenia_usuario: contrasenia,
             correo_usuario: correo
           })
          })
          const json = await respuesta.json;
          console.log(json);
          Alert.alert("Ferretear", "Peticion procesada");
         } catch(error){
           console.log(error);
        }
      }
    }
  return (
    <SafeAreaView style={styles.container}>
    <Image style={styles.logo} source={require('../../assets/Images/Imagotipo.png')}/>
    <Text style={styles.header}>¡Nos encantará que seas parte de nosotros!</Text>
  
    <View style={styles.tarjeta}>
        <TextBox text={'Nombre'} icon={'face'} value={nombre} onChangeText={setNombre}/>
        <TextBox text={'Correo electrónico'} icon={'email'} value={correo} onChangeText={setCorreo}/>
        <PasswordBox text={'Contraseña'} />
        <PasswordBox text={'Confirmar contraseña'} value={contrasenia} onChangeText={setContrasenia}/>
        <Boton text={'Crear Cuenta'} onPress={usuarioNuevo}/>
    </View>
    <Footer/>
  </SafeAreaView>
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
    fontFamily:'Arial' ,
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
    fontFamily:'Arial',
    fontStyle:'normal',
    fontWeight:'bold',
    fontSize:18,
   textAlign:'center',
   paddingTop:20
  },
  h2Tarjeta:{
    color:'#000',
    fontFamily:'Arial',
    fontStyle:'normal',
    fontWeight:'normal',
    fontSize:16,
    textAlign:'center',
    paddingTop:20
  }

})

export default Pantalla;