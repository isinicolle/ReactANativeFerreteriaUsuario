import React from 'react'
import { Pressable,StyleSheet,Text,TouchableOpacity, View,TextInput,Image } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { useNavigation } from '@react-navigation/native';
const TarjetaDireccion = ({idUsu,onPress,enviar=false,nombre,direccion,ciudad, depto})=>{
    const nav =useNavigation();
    return (

       
        <TouchableOpacity onPress={()=>{nav.navigate('Direcciones',idUsu)}}>
            
        <View style={styles.container}>
        {enviar? 
            ( <View style={styles.containerEnviar}>
             <Text style={styles.enviar}>Enviar a:</Text>
            </View> 
            
            )
             //Verdadero
                :  
            <View></View>
            }  
            <View style={styles.descripciones}>
           
            <Text style={styles.texto}>
                {direccion}
            </Text>
            <Text style={styles.texto2}>
                {nombre}
            </Text>
            <Text style={styles.texto2}>
                {ciudad}
            </Text>
            <Text style={styles.texto2}>
                {depto}
            </Text>
            </View>
            <View style={styles.icon}>
            <Icon name={'chevron-right'} size={40}/>
            </View>
        </View>
        </TouchableOpacity>
    )
};
const styles = StyleSheet.create({

    container:{
        flex:1,
        padding:10,
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
        minWidth: 300
        
    },
    containerEnviar:{
        flex:2,
        padding:"2%",
        alignItems:'flex-start',
        justifyContent: "flex-start",
        flexDirection:'row',
        marginHorizontal:5,
    },

    texto:{
        
       fontSize:16,
       fontWeight:'700',
       textAlign:'left',
       marginVertical:4
    },
    texto2:{
        fontWeight: '500',
        fontSize:16,
        fontWeight:'500',
        textAlign:'left',
        marginVertical:4
     },
    enviar:{
        
        fontSize:18,
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
        flex:5,
        justifyContent: 'center',
        alignItems: "flex-start",
        marginLeft:"5%"
    }
    
   
})
export default TarjetaDireccion