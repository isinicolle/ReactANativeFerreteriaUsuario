import React, { useState,useEffect} from 'react'
import { FlatList,StyleSheet,Text,TouchableOpacity,View } from 'react-native'
import TarjetaCarrito from './TarjetaCarrito'
import {Header,Footer,Boton} from './'
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
const dataProducto = [
    new Producto(1,"Gasolina",'Gas','Super','100peso','https://m.media-amazon.com/images/I/71aQtUldu+L._AC_SL1500_.jpg',2 ),
    new Producto(2,"Gasolina",'Gas','Super','100peso','https://m.media-amazon.com/images/I/71aQtUldu+L._AC_SL1500_.jpg',1 ),
    new Producto(3,"Gasolina",'Gas','Super','100peso','https://m.media-amazon.com/images/I/71aQtUldu+L._AC_SL1500_.jpg',1 ),
    new Producto(4,"Gasolina",'Gas','Super','100peso','https://m.media-amazon.com/images/I/71aQtUldu+L._AC_SL1500_.jpg',1 ),
    new Producto(5,"Gasolina",'Gas','Super','100peso','https://m.media-amazon.com/images/I/71aQtUldu+L._AC_SL1500_.jpg',1 ),
] 
const ListaCarrito  = ({ onPress,id})=>{
    const[productos,setProductos] = useState()
    useEffect( async () => {
        var a = await obtenerCarrito(id);
        await setProductos(a)
        const idUser =  await AsyncStorage.getItem('idUsuario');
  console.log(idUser);
      
      }, []);
    return (
        <View >
            <FlatList  contentContainerStyle={styles.Lista} ListFooterComponent={RenderFooter} ListHeaderComponent={HeaderLista} data={productos} keyExtractor={item=>item.Productos.id_producto} renderItem={renderizarLista}  /> 
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
const RenderFooter= ()=>{
    return(
        <View style={{width:'100%',alignItems:'center'}}>

        <View  style={{width:'95%'}}>
            <Boton text={'Procesar pago'}/>
            <Footer/>
        </View>
        </View>
       
    )
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