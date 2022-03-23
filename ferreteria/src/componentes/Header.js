import React,{useEffect, useState} from 'react'
import { Pressable,StyleSheet,Text,TouchableOpacity, View,TextInput } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Header = ({navigation, onPress,text,icon,busqueda=false,carrito=false})=>{
    let [user,setUser] = useState('')
    useEffect(  async ()=>{
        await AsyncStorage.getItem("idUsuario").then((data)=>{
            setUser(data);
        })
    },[navigation] )
    const nav = useNavigation();
    if(user)
    return (
        
        <View style={styles.container}>
            <>
            { (icon=='chevron-left')?  <TouchableOpacity onPress={()=> nav.pop()} style={styles.btnHeader}>
                    <Icon name={icon} size={50}/>
                </TouchableOpacity> : <TouchableOpacity onPress={()=> nav.pop()} style={styles.btnHeader}>
                    <Icon name={icon} size={50}/>
                </TouchableOpacity>  }
            </>
               
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
            
                <TouchableOpacity  onPress={()=> nav.navigate('Carrito', {idUsuario:user})}style={styles.btnCarrito}>
                    <Icon name='shopping-cart' size={30}/>
                </TouchableOpacity>
          
            : <View></View>}
        </View>


    )
    else return (<View></View>)
};
const styles = StyleSheet.create({
   
    container:{
        flex:1,
        maxHeight:150,
        flexDirection:'row',
        paddingVertical:'3%',
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