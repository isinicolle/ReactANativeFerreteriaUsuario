import React,{useState}from 'react'
import { Pressable,StyleSheet,Text,TouchableOpacity, View,TextInput,Image } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import ScrollerNumero from './ScrollerNumero'
import Boton from './Boton'
class Producto{
    constructor(id_producto,descripcion_producto,categoria,marca,precio,imagen,cantidad){
        this.id_producto = id_producto,
        this.descripcion_producto = descripcion_producto,
        this.categoria = categoria,
        this.marca = marca,
        this.precio = precio,
        this.imagen = imagen,
        this.cantidad=cantidad
    }      
}
const TarjetaBusqueda = ({item})=>{
    console.log(item.imagen)
    return (
        <View style={styles.container}>
            <TouchableOpacity>
            <View style={styles.tarjeta}>
                <Image source={{uri:item.imagen}} style={styles.imagen}/>
                <View style={styles.descripciones}>
                <Text style={{marginVertical:10,fontSize:20,fontWeight:'bold'}}>{item.descripcion_producto}</Text>
                <Text>{item.marca}</Text>
                <Text>{item.categoria}</Text>
                </View>
                <View style={styles.precio}>
                <Text>{item.precio}</Text>
                </View>

            </View>
            </TouchableOpacity>
        </View>
    )
};
const styles = StyleSheet.create({
    container:{
       width:'100%',
       backgroundColor:'#f8f8f8'
    },
    tarjeta:{
       flex:1,
       flexDirection:'row',
       borderBottomColor:'gray',
       borderBottomWidth:1,
       marginHorizontal:10,
       paddingVertical:10,
       justifyContent:'space-between',
       backgroundColor:'white'
    },
    imagen:{
        width:150,
        height:150,
        maxHeight:'100%',
        maxWidth:'100%',
        resizeMode:'center',
        borderRadius:25,
        backgroundColor:'white',
        marginVertical:10
    },
    descripciones:{
     flex:1,
     flexDirection:'column',
     justifyContent:'flex-start',
     marginLeft:15
    },
    precio:{
      justifyContent:'flex-end'  
    },
})


export default TarjetaBusqueda
