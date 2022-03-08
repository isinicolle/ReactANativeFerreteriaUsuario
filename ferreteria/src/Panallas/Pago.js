import { StatusBar } from 'expo-status-bar';
import { TextInput, StyleSheet, Text, View,Image,SafeAreaView,FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
import {Boton,HiperVinculo,TextBox,PasswordBox,Footer,Header,TarjetaProducto,TarjetaCarrito} from '../componentes/'

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

const Pago = ()=> {
  return (
    <SafeAreaView style={styles.container}>
        <FlatList ListFooterComponent={RenderFooter} ListHeaderComponent={RenderHeader} data={dataProducto} keyExtractor={item=>item.id_producto} renderItem={RenderLista} />
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

const RenderFooter = ()=>{
    return(
        <View style={styles.containerTabla}>
            <View style={styles.tablaTotales}>
                <View style={styles.filaTotal}>
                    <Text style={{fontSize:20}}>Subtotal</Text>
                    <Text style={{fontSize:20}}>100 peso</Text>
                </View>
                <View style={styles.filaTotal}>
                    <Text style={{fontSize:20}}>Subtotal</Text>
                    <Text style={{fontSize:20}}>100 peso</Text>
                </View>
                <View style={styles.filaTotal}>
                    <Text style={{fontSize:20}}>Subtotal</Text>
                    <Text style={{fontSize:20}}>100 peso</Text>
                </View>
                <View style={[styles.filaTotal,{borderBottomWidth:1}]}>
                    <Text style={{fontSize:20}}>Subtotal</Text>
                    <Text style={{fontSize:20}}>100 peso</Text>
                </View>
                <View style={styles.filaTotal}>
                    <Text style={{fontSize:20}}>Subtotal</Text>
                    <Text style={{fontSize:20}}>100 peso</Text>
                </View>
            </View>
            <View style={styles.containerFinal}>
            <Text style={{fontSize:16,color:'gray',marginVertical:20}}>Al realizar este pedido acepta nuestras condiciones de uso y aviso de privacidad</Text>
            <Boton text={'Confirmar y pagar'}/>
            </View>
        </View>
    )
    }
    
    const  RenderHeader = ()=>{
        return (<Header text={'Pago'} icon={'chevron-left'} />)
    }
    const  RenderLista = ({item,index})=>{
        return (<TarjetaCarrito Cartitem={item} pago={true}/>)
    }
export default Pago