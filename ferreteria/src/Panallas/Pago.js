import { StatusBar } from 'expo-status-bar';
import { TextInput, StyleSheet, Text, View,Image,SafeAreaView,FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
import {Boton,HiperVinculo,TextBox,PasswordBox,Footer,Header,TarjetaProducto,TarjetaCarrito,TarjetaDireccion} from '../componentes/'
import React, { useState,useEffect} from 'react'
import { Direcciones } from '.';
import { useNavigation } from '@react-navigation/native';
var total,subtotal,descuento,imp,envio
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

const Pago = ({route})=> {
    const[productos,setProductos] = useState()
    const id = route.params.idUsuario
    useEffect( async () => {
        var a = await obtenerCarrito(id);
        await setProductos(a)
      
      }, []);

      



  return (
    <SafeAreaView style={styles.container}>
        <FlatList ListEmptyComponent={RenderVacio} ListFooterComponent={RenderFooter(id)} ListHeaderComponent={RenderHeader} data={productos} keyExtractor={item=>item.Productos.id_producto} renderItem={RenderLista} />
    </SafeAreaView>
  );


    

}
const styles = StyleSheet.create({
    containerFinal:{
        width:'90%',
        alignItems:'center',
        backgroundColor:"#F8F8F8"
    },
    containerTabla:{
        width:'100%',
        alignItems:'center',
        backgroundColor:"#F8F8F8"
    },
 tablaTotales:{
     width:'90%',
     backgroundColor:'white',
     flex:1,
     flexDirection:'column',
     padding:20,
     borderRadius:25,
     fontSize:18
 },
 filaTotal:{
     flex:1,
     flexDirection:'row',
     justifyContent:'space-between',
     marginVertical:10
 }
})
const RenderVacio = ()=>{
    return(
    <View style={{marginTop:1}}>
        <Text> No hay productos</Text>
    </View>
    )
}
const RenderFooter = (id)=>{
    const nav = useNavigation();
    const[direccion,setDireccion] = useState()
    useEffect( async () => {
         await obtenerdirecciones(id).then((data)=>{setDireccion(data)});
      }, []);

      const handleProcesar = async ()=>
        {
        try{
            const res = await fetch('http://192.168.100.48:6001/api/ventas/procesarCarrito?idUsuario='+id,
            {method:'POST',
            headers:{
              Accept:'application/json',
              'Content-Type':'application/json'
            },body: JSON.stringify({
                idDireccionEnvio:direccion.id_direccionEnvio
                ,rtn:false
              })
          }
         

          )
          const json = await res.json()
          console.log(json)
          nav.navigate('Inicio');
        }catch(err){
         console.log(err);
        }
    }


      if (direccion)
    return(
        <>
       
            <View style={styles.containerTabla}>
            <View style={styles.tablaTotales}>
                <View style={styles.filaTotal}>
                    <Text style={{fontSize:20}}>Subtotal</Text>
                    <Text style={{fontSize:20}}>Lps. {global.subtotal}</Text>
                </View>
                <View style={styles.filaTotal}>
                    <Text style={{fontSize:20}}>Envio</Text>
                    <Text style={{fontSize:20}}>Lps. {global.envio}</Text>
                </View>
                <View style={styles.filaTotal}>
                    <Text style={{fontSize:20}}>Impuesto</Text>
                    <Text style={{fontSize:20}}>Lps. {global.imp}</Text>
                </View>
                <View style={[styles.filaTotal,{borderBottomWidth:1}]}>
                    <Text style={{fontSize:20}}>Descuento</Text>
                    <Text style={{fontSize:20}}>Lps.  {global.descuento}</Text>
                </View>
                <View style={styles.filaTotal}>
                    <Text style={{fontSize:20}}>Total</Text>
                    <Text style={{fontSize:20}}>Lps. {global.total}</Text>
                </View>
            </View>
            </View>
            <View style={{width:'100%',flex:1, alignItems:'center'}}>
                <View style={{width:'90%',flex:1, alignContent:'center'}}>
                    <TarjetaDireccion idUsu={{id}} enviar={true} direccion={direccion.direccion} nombre={direccion.Ciudades.codigoPostal} ciudad={direccion.Ciudades.nombre_ciudad} depto={direccion.Ciudades.Departamentos.nombreDepartamento} />
                </View>
            </View>
            <View style={styles.containerTabla}>
            <View style={styles.containerFinal}>
            <Text style={{fontSize:16,color:'gray',marginVertical:20}}>Al realizar este pedido acepta nuestras condiciones de uso y aviso de privacidad</Text>
            <Boton onPress={handleProcesar} text={'Confirmar y pagar'}/>
            </View>
            </View>
       
        </>
    )
    else return (<>
     <View style={styles.containerTabla}>
            <View style={styles.tablaTotales}>
                <View style={styles.filaTotal}>
                    <Text style={{fontSize:20}}>Subtotal</Text>
                    <Text style={{fontSize:20}}>Lps. {global.subtotal}</Text>
                </View>
                <View style={styles.filaTotal}>
                    <Text style={{fontSize:20}}>Envio</Text>
                    <Text style={{fontSize:20}}>Lps. {global.envio}</Text>
                </View>
                <View style={styles.filaTotal}>
                    <Text style={{fontSize:20}}>Impuesto</Text>
                    <Text style={{fontSize:20}}>Lps. {global.imp}</Text>
                </View>
                <View style={[styles.filaTotal,{borderBottomWidth:1}]}>
                    <Text style={{fontSize:20}}>Descuento</Text>
                    <Text style={{fontSize:20}}>Lps.  {global.descuento}</Text>
                </View>
                <View style={styles.filaTotal}>
                    <Text style={{fontSize:20}}>Total</Text>
                    <Text style={{fontSize:20}}>Lps. {global.total}</Text>
                </View>
            </View>
            </View>
            <TarjetaDireccion onPress={()=>{}} enviar={true} direccion={'No tiene direcciones, agregue una'}  />
            <View style={styles.containerTabla}>
            <View style={styles.containerFinal}>
            <Text style={{fontSize:16,color:'gray',marginVertical:20}}>Al realizar este pedido acepta nuestras condiciones de uso y aviso de privacidad</Text>
            <Boton onPress={handleProcesar} text={'Confirmar y pagar'}/>
            </View>
            </View></>
    )
    }
    
    async function obtenerdirecciones(id,index=0){
        try{
            const res = await fetch('http://192.168.100.48:6001/api/direccionesEnvio/direccionEnvioXUsuario?id_usuarioCliente='+id,
            {method:'GET',
            headers:{
              Accept:'application/json',
              'Content-Type':'application/json'
            },
          }
          )

          const json = await res.json();
          console.log(json[0]);
        return await (json[index])
    
        } catch(err){
            console.log(err)
        }
    }



    async function obtenerCarrito(id,total=false)
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
      //console.log(json);
      global.subtotal = await json.totalCarrito
      global.descuento = global.subtotal *0
      global.imp =Math.round((global.subtotal *.15) * 100) / 100 
      global.envio=Math.round(global.subtotal*.05)
      global.total= (global.subtotal-global.descuento)+global.imp+global.envio
    return (json.CarritoItem)
    } catch(err){
        console.log(err)
    }
}


    const  RenderHeader = ()=>{
        return (<Header text={'Pago'} icon={'chevron-left'} />)
    }
    const  RenderLista = ({item,index})=>{
        return (<TarjetaCarrito Cartitem={item} pago={true}/>)
    }
export default Pago