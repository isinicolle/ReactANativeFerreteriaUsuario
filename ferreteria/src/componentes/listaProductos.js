import React,{useEffect,useState} from 'react'
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

const ListaProducto  = ({ text,tipo,id, navigation})=>{
    const[productos,setProductos] = useState()
    
    useEffect( async () => {
        var a 
       (tipo==1? (a= await conseguirCategoria(id)):a=await(conseguirMarca(id)))
        await setProductos(a)
      
      }, []);
    return (
        <View style={{width:'100%',flex:1,flexDirection:'column'}}>
        <TouchableOpacity style={styles.HeaderContainer}>
                <Text style={styles.Header}>
                    {text}
                </Text>
                <Icon name={'chevron-right'} style={{flex:1}} size={30}/>
            </TouchableOpacity>
        <View style={styles.Lista}>
            <FlatList horizontal={true} data={productos} keyExtractor={item=>item.id_producto} renderItem={renderizarLista} navigation={navigation}/> 
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
async function conseguirCategoria(id){
    try{
        const res = await fetch('http://192.168.100.48:6001/api/categoria/listarCategoriaPorProducto?idcategoria='+id,
        {method:'GET',
        headers:{
          Accept:'application/json',
          'Content-Type':'application/json'
        },
      }
      )
      const json = await res.json()
    return (json[0].Productos)

    } catch(err){
        console.log(err)
    }
}
async function conseguirMarca(id){
    try{
        const res = await fetch('http://192.168.100.48:6001/api/marca/ProductoPorMarca?idmarca='+id,
        {method:'GET',
        headers:{
          Accept:'application/json',
          'Content-Type':'application/json'
        },
      }
      )
      const json = await res.json()
        return (json[0].Productos)

    } catch(err){
        console.log(err)
    }
}
const renderizarLista = ({item, navigation})=>{
    return(
        <TarjetaProducto  item={item} navigation={navigation}/>
    )
}

export default ListaProducto