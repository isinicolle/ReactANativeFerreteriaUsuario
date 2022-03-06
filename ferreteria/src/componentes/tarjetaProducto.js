import React from 'react'
import { Pressable,StyleSheet,Text,TouchableOpacity, View,TextInput,Image } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
const TarjetaProducto = ({text,precio,imagen })=>{
    return (
        <TouchableOpacity>
        <View style={styles.container}>
            
            <Image source = {{uri:imagen}} style={styles.imagen} />
            <Text style={styles.detalle}>
                {text}
            </Text>
            <Text style={styles.precio}>
                {precio}
            </Text>
        </View>
        </TouchableOpacity>
    )
};
const styles = StyleSheet.create({

    container:{
        flex:1,
        padding:10,
        backgroundColor: '#fff',
        width:'90%',
        flexGrow:1,
        borderRadius:20,
        maxWidth:500,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        
        elevation: 2,
        marginVertical:10
    },
    detalle:{
       fontSize:20,
       fontWeight:'bold',
       textAlign:'left',
       marginVertical:5
    },
    precio:{
      fontSize:18,
      textAlign:'left',
      marginVertical:5
    },
    imagen:{
       width:200,
       height:200,
       maxHeight:'100%',
       maxWidth:'100%',
       resizeMode:'center'
    }
   
})
export default TarjetaProducto