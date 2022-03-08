import React from 'react'
import { FlatList,StyleSheet,Text,TouchableOpacity,View } from 'react-native'
import TarjetaBusqueda from './tarjetaBusqueda'
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
const ListaBusqueda  = ({ onPress,text,tipo,id})=>{
    return (
        <View >
            <FlatList contentContainerStyle={styles.Lista}  ListFooterComponent={RenderFooter} ListHeaderComponent={HeaderLista} data={dataProducto} keyExtractor={item=>item.id_producto} renderItem={renderizarLista}  /> 
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
        <TarjetaBusqueda item={item}/>
    )
}
const HeaderLista = ()=>{
   return (<Header  icon={'chevron-left'} busqueda={true} carrito={true} />)
}
const RenderFooter= ()=>{
    return(
        <View style={{width:'100%',alignItems:'center'}}>

        <View  style={{width:'95%'}}>
            <Footer/>
        </View>
        </View>
       
    )
}

async function conseguirProductos(nombre){

}
export default ListaBusqueda