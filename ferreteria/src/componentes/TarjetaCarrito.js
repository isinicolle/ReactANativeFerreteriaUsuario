import React,{useState}from 'react'
import { Pressable,StyleSheet,Text,TouchableOpacity, View,TextInput,Image } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import ScrollerNumero from './ScrollerNumero'
import Boton from './Boton'
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
const TarjetaCarrito = ({Cartitem,pago=false})=>{
    const {item}={Cartitem};
    const cantidadProp =Cartitem.cantidad
    const [cantidad,setCantidad] =useState(cantidadProp)
    return (
        <View style={styles.container}>
        <View style={styles.tarjeta}>
            <View style={styles.container1}>
                <Image source={{uri:('http://192.168.100.48:6001/img/'+Cartitem.Productos.imagen)}} style={styles.imagen}/>
                <View style={styles.descripciones}>
                    <Text style={{fontWeight:'bold',fontSize:20,textAlign:'left'}}>
                    {Cartitem.Productos.descripcion_producto}
                    </Text>
                    <Text>
                     {Cartitem.Productos.Categorias.descripcion_categoria} 
                    </Text>
                    <Text>
                      {Cartitem.Productos.Marcas.descripcion_marca}  
                    </Text>
                </View>
            </View>
            {pago?
            <View>
            <View style={styles.container2}>
            <Text>Cantidad: {Cartitem.cantidad}</Text>
            <Text>Lps. {Cartitem.Productos.precio_actual}</Text>
            </View>
            </View>
        
            :  <View>
            <View style={styles.container2}>
            <ScrollerNumero  setCantidad={setCantidad} cantidad={cantidad}/>
            <Text>Lps. {Cartitem.Productos.precio_actual}</Text>
            </View>
            <Boton text={'Eliminar del carrito'} />
            </View>}
            
            
            
        </View>
        </View>
    )
};
const styles = StyleSheet.create({
    container:{
        width:'100%',
        alignItems:'center',
        backgroundColor:"#F8F8F8"
    },
    tarjeta:{
        flex:1,
        padding:10,
        backgroundColor: '#fff',
        width:'90%',
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
        
        elevation: 2,
        marginVertical:10
    },
    imagen:{
        width:150,
        height:150,
        maxHeight:'100%',
        maxWidth:'100%',
        resizeMode:'center',
        borderRadius:25,
        backgroundColor:'white',
    },
    container1:{
        flex:2,
        flexDirection:'row',
        justifyContent:'space-between',
        marginVertical:5
    },
    descripciones:{
        flex:1,
        flexDirection:'column'
    },
    container2:{
        flexDirection:'row',
        justifyContent:'space-between',
        
    },
})


export default TarjetaCarrito
