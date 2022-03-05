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
                <TextInput placeholder='Buscar producto' style={{flex:1}}>
                
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
        paddingTop:'3%',
        alignItems:'center',
        width:'100%',
        backgroundColor:'white'
    },
    btnHeader:{
        flex:1,
        marginHorizontal:5,
        borderRadius:20,
        maxWidth:50,
        marginVertical:'auto'
    },
    containerBusqueda:{
        flex:8,
        padding:10,
        borderWidth:1,
        borderColor:"#B9B9B9",
        backgroundColor:'#F2F2F2',
        borderRadius:50,
        alignItems:'center',
        flexDirection:'row',
        marginHorizontal:5,
    },
    header:{
        fontSize:20,
        fontWeight:'bold',
        flex:3,
        marginHorizontal:10,
        marginVertical:'auto'
        },

    btnCarrito:{
        backgroundColor:'#F2F2F2',
        borderWidth:2,
        borderColor:'#B9B9B9',
        marginHorizontal:5,
        borderRadius:50,
        alignItems:'center',
        justifyContent:'center',
        flex:1,
        marginHorizontal:5,
        borderRadius:20,
        padding:5,
        maxWidth:60,
        marginVertical:'auto'
        }
})
export default Header