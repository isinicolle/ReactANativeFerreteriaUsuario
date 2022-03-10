import React, { useState,useEffect} from 'react'
import { FlatList,StyleSheet,Text,TouchableOpacity,View } from 'react-native'
import TarjetaCarrito from './TarjetaCarrito'
import {Header,Footer,Boton} from './'
import { useFocusEffect } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
const ListaCarrito  = ({ onPress,id})=>{
    const[productos,setProductos] = useState()
    const nav = useNavigation();
    useEffect( async () => {
        await obtenerCarrito(id).then((data)=>{setProductos(data)});
      }, [id]);
      

      const RenderFooter= ()=>{
        return(
            <View style={{width:'100%',alignItems:'center'}}>
    
            <View  style={{width:'95%'}}>
                <Boton onPress={()=>{
                    nav.navigate('Pago',{idUsuario:id})
                }} text={'Procesar pago'}/>
                <Footer/>
            </View>
            </View>
           
        )
    }

    return (
        <View >
            <FlatList ListEmptyComponent={()=>{ return (<Text>No hay carrito</Text>)}} contentContainerStyle={styles.Lista} ListFooterComponent={RenderFooter} ListHeaderComponent={HeaderLista} data={productos} keyExtractor={item=>item.Productos.id_producto} renderItem={renderizarLista}  /> 
        </View>
        )
      
}
const styles = StyleSheet.create({
    Lista:{
     justifyContent:'center',
    },
})
function conseguirCategoria(){

}
const renderizarLista = ({item,index})=>{
    return(
        <TarjetaCarrito Cartitem={item}/>
    )
}
const HeaderLista = ()=>{
   return (<Header text={'Carrito'} icon={'chevron-left'} />)
}


async function obtenerCarrito(id)
{
    try{
        const res = await fetch('http://192.168.100.48:6001/api/carrito/carritoCliente?idUsuario='+id,
        {method:'GET',
        headers:{
          Accept:'application/json',
          'Content-Type':'application/json'
        },
      }
      )
      const json = await res.json()
      console.log(json);
     return (json.CarritoItem)

    } catch(err){
        console.log(err)
    }
}
export default ListaCarrito