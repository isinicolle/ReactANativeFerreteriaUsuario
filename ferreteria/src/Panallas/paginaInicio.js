import React from 'react'
import { StatusBar,TouchableOpacity,TextInput, StyleSheet, Text, View,Image,SafeAreaView,ScrollView} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons'
import { Boton, HiperVinculo, TextBox, PasswordBox, Footer, Header, ListaProducto, TarjetaProducto } from '../componentes/'

const PantallaInicio = ({route,navigation})=> {
    
    return (
        <ScrollView>
        <SafeAreaView style={styles.container}>
        <Header busqueda={true} carrito={true}icon={'menu'}/>
        <View style={{paddingTop:10,flexDirection:'row',width:'100%',alignItems:'center',justifyContent:'center'}}>
        <TouchableOpacity>
            <View style={styles.accesoRapido}>
                <Text style={{color:'#B9B9B9'}}>Electronica</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity>
            <View style={styles.accesoRapido}>
                <Text style={{color:'#B9B9B9'}}>Hogar</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{navigation.navigate('Config')}}>
            <View style={styles.accesoRapido}>
                <Text style={{color:'#B9B9B9'}}>Configuracion</Text>
            </View>
        </TouchableOpacity>
        </View>
        <ListaProducto tipo={1} text={'Agricultura'} id={2} navigation={navigation}/>
        <ListaProducto tipo={2} text={'TRUPPER'} id={1} navigation={navigation}/>
        <ListaProducto tipo={1} text={'Soldadura'} id={1} navigation={navigation}/>
        
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
    accesoRapido:{
        marginTop:'5%',
        padding:10,
        borderWidth:1,
        borderColor:"#B9B9B9",
        backgroundColor:'#F2F2F2',
        borderRadius:50,
        alignItems:'center',
        flex:1,
        marginHorizontal:5,
        
    }
});
export default PantallaInicio;