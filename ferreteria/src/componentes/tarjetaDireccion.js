import React from 'react'
import { Pressable,StyleSheet,Text,TouchableOpacity, View,TextInput,Image } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
const TarjetaDireccion = ({nombre,direccion,ciudad, depto, icon})=>{
    return (
        <TouchableOpacity>
        <View style={styles.container}>
            <View style={styles.descripciones}>
            <Text style={styles.texto}>
                {nombre}
            </Text>
            <Text style={styles.texto}>
                {direccion}
            </Text>
            <Text style={styles.texto}>
                {ciudad}
            </Text>
            <Text style={styles.texto}>
                {depto}
            </Text>
            </View>
            <View style={styles.icon}>
            <Icon name={icon} size={30}/>
            </View>
        </View>
        </TouchableOpacity>
    )
};
const styles = StyleSheet.create({

    container:{
        flex:1,
        padding:20,
        backgroundColor: '#fff',
        width:'100%',
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
        flexDirection: 'row',
        elevation: 2,
        marginVertical:10,
        margin:10,
        minWidth: 300
        
    },

    texto:{
        
       fontSize:16,
       fontWeight:'bold',
       textAlign:'left',
       marginVertical:4
    },
    icon:{
        flex:1,
        alignItems: "center",
        justifyContent: "center"
    },
    descripciones:{
        flex:3,
        justifyContent: 'center',
        alignItems: "flex-start",
    }
    
   
})
export default TarjetaDireccion