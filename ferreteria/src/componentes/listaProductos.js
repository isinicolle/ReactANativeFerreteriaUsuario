import React from 'react'
import { FlatList, Pressable,StyleSheet,Text,TouchableOpacity,View } from 'react-native'
import TarjetaProducto from './tarjetaProducto'
import Icon from 'react-native-vector-icons/MaterialIcons'
class Producto{
    constructor(id_producto,descripcion_producto,imagen,precio){
        this.id_producto = id_producto,
        this.descripcion_producto = descripcion_producto,
        this.imagen = imagen,
        this.precio = precio
    }      
}
const dataProducto = [
    new Producto(1,"Gasolina",'https://m.media-amazon.com/images/I/71aQtUldu+L._AC_SL1500_.jpg','1200 peso'),
    new Producto(2,"Gasolina",'https://m.media-amazon.com/images/I/71aQtUldu+L._AC_SL1500_.jpg','1200 peso'),
    new Producto(3,"Gasolina",'https://m.media-amazon.com/images/I/71aQtUldu+L._AC_SL1500_.jpg','1200 peso'),
    new Producto(4,"Gasolina",'https://m.media-amazon.com/images/I/71aQtUldu+L._AC_SL1500_.jpg','1200 peso'),
] 
const ListaProducto  = ({ onPress,text,tipo,id})=>{
    return (
        <View style={{width:'100%',flex:1,flexDirection:'column'}}>
        <TouchableOpacity style={styles.HeaderContainer}  >
                <Text style={styles.Header}>
                    {text}
                </Text>
                <Icon name={'chevron-right'} style={{flex:1}} size={30}/>
            </TouchableOpacity>
        <View style={styles.Lista}>
            <FlatList horizontal={true} data={dataProducto} keyExtractor={item=>item.id_producto} renderItem={renderizarLista}  /> 
        </View>
        </View>
        )
      
}
const styles = StyleSheet.create({
    Lista:{
        width:'100%',
        paddingHorizontal:'3%',
        paddingVertical:'5%'
    },
    HeaderContainer:{
        width:'100%',
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-start',
        padding:'3%'
    },
    Header:{
       fontSize:20,
       fontWeight:'bold'
    },

})
function conseguirCategoria(){

}
const renderizarLista = ({item})=>{
    return(
        <TarjetaProducto precio={item.precio} imagen={item.imagen} text={item.descripcion_producto}/>
    )
}
export default ListaProducto