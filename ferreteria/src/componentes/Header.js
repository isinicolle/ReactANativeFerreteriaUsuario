import React from 'react'
import { Pressable,StyleSheet,Text,TouchableOpacity, View,TextInput } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
const Header = ({ onPress,text,icon,busqueda=false,carrito=false})=>{
    return (
        
        <View style={styles.container}>

                <TouchableOpacity style={styles.btnHeader}>
                    <Icon name={icon} size={50}/>
                </TouchableOpacity>
            {busqueda? 
            ( <View style={styles.containerBusqueda}>
                <TextInput placeholder='Buscar producto'>
                
                </TextInput>   
            </View> 
            
            )
             //Verdadero
                :  
            <Text style={styles.header}>{text}</Text>//Falso
            }  

            {carrito?   
            
                <TouchableOpacity style={styles.btnCarrito}>
                    <Icon name='shopping-cart' size={30}/>
            </TouchableOpacity>
          
            : <View></View>}
        </View>


    )
};
const styles = StyleSheet.create({

    container:{
        flex:1,
        maxHeight:150,
        flexDirection:'row',
        padding:'2%',
        alignContent:'space-around',
        alignItems:'center',
        width:'100%',
        backgroundColor:'white'
    },
    btnHeader:{
        flex:0.0,
        marginHorizontal:5,
        borderRadius:20,
    },
    containerBusqueda:{
        flex:2,
        padding:10,
        borderWidth:1,
        borderColor:"#B9B9B9",
        backgroundColor:'#F2F2F2',
        borderRadius:50,
        alignItems:'center',
        flexDirection:'row'
    },
    header:{
        fontSize:20,
        fontWeight:'bold',
        flex:3,
        marginHorizontal:10,
        },

        btnCarrito:{
            backgroundColor:'#F2F2F2',
            borderWidth:2,
            flex:0,
            borderColor:'#B9B9B9',
             flex:0.0,
        marginHorizontal:5,
        borderRadius:30,
        padding:10
        }
})
export default Header