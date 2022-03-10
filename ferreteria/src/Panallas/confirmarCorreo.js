import { StatusBar } from 'expo-status-bar';
import React, { Component} from 'react';
import { TextInput, StyleSheet, Text, View,Image,SafeAreaView,ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Boton,HiperVinculo,TextBox,PasswordBox,Footer} from '../componentes/'


export default class ConfirmarCorreo extends Component{
  render() {
  return (
    <ScrollView>

    <SafeAreaView style={styles.container}>
    <Image style={styles.logo} source={require('../../assets/Images/Imagotipo.png')}/>
    <Text style={styles.header}>¡Confirma tu identidad!</Text>
  
    <View style={styles.tarjeta}>
        <Text style={styles.header}>Se ha enviado una nueva contraseña
        a su correo electrónico</Text>

        <Boton text={'Continuar'} />
    </View>
    <Footer/>
  </SafeAreaView>
    </ScrollView>
  );
}
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
    fontSize:16,
    flex:0,
    marginLeft:'10%',
    marginRight:'10%',
    textAlign:'center',
    marginBottom:30
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
