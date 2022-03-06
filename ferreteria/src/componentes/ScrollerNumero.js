import React from 'react'
import { Pressable,StyleSheet,Text,TouchableOpacity, View,TextInput,Image } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
let cantidad =0
const ScrollerNumero = ({cantidad,setCantidad,item,index})=>{
    const enMenos = ()=>{
        setCantidad(Math.max(0,cantidad-1));
    }
    const enMas = ()=>{
        setCantidad(Math.max(cantidad+1));
    }
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.boton} onPress={enMenos}>
              <Text>-</Text>
            </TouchableOpacity>
            <View style={styles.boton} >
            <Text>{cantidad}</Text>
            </View >
            <TouchableOpacity style={styles.boton} onPress={enMas} >
            <Text>+</Text>
            </TouchableOpacity>
        </View>
    )
};


const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'row',
        borderWidth:1,
        borderColor:'#B9B9B9',
        borderRadius:5,
        maxWidth:'33%',
        justifyContent:'space-around'
    },
    boton:{
        margin:0,
        padding:5,
        borderColor:'#B9B9B9'
    }
});
export default ScrollerNumero
