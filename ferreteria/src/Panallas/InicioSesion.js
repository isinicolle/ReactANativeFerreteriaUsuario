import { StatusBar } from 'expo-status-bar';
import { TextInput, StyleSheet, Text, View,Image,SafeAreaView} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
import {Boton,HiperVinculo,TextBox,PasswordBox,Footer} from '../componentes/'


const Pantalla = ()=> {
  return (
    <SafeAreaView style={styles.container}>
    <Image style={styles.logo} source={require('../../assets/Images/Imagotipo.png')}/>
    <Text style={styles.header}>¡Hola! Nos alegramos de verte de nuevo.</Text>
  
    <View style={styles.tarjeta}>
        <TextBox text={'Correo electrónico'} icon={'email'} />
        <PasswordBox text={'Contraseña'} />
        <Boton text={'Iniciar Sesion'} />
        <HiperVinculo text={'¿Has olvidado la contraseña?'}/>
        <Text style={styles.h1Tarjeta}>¿Todavia no estas registrado?</Text>
        <Text style={styles.h2Tarjeta}>Registrate ya</Text>
        <Boton text={'Crear Cuenta'} />
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
