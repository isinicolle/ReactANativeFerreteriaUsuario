import { StyleSheet, Text, View, Image, SafeAreaView,ScrollView, Pressable} from 'react-native';
import {Footer, Header} from '../componentes'
import { useState, useEffect } from 'react'
import {useNavigation} from '@react-navigation/native';
export default function App({navigation}) {

    const [info, setinfo] = useState([]);
    const nav=useNavigation();
    useEffect(()=>{ },[navigation])
    useEffect(()=>{
        try {
            const response = fetch("http://192.168.0.3:6001/api/ventas/historial?idCliente=13")
              .then((response) => response.json())
              .then((json) => {
                setinfo(json);
              });
          } catch (error) {
            console.error(error);
        }
    }, [])

    const tarjetasCompras = info.map(item => {
        let productos = item.DetallesVentas[0].Productos;
        return(
                <Pressable onPress={()=>{ nav.navigate('HistorialDetalle')}} style={styles.carta}>
                    <Image style={styles.imagen} source={{uri: productos.imagen}}/>
                    <View style={styles.texto}>
                    <Text style={styles.tituloAtributos}>Fecha de venta: {item.fecha}</Text>
                    <Text style={styles.tituloAtributos}>ID Producto: {productos.id_producto}</Text>
                    <Text style={styles.tituloAtributos}>ID Marca: {productos.id_marca}</Text>
                    </View>
                    <View style={styles.texto}>
                        <Text style={styles.tituloAtributos}>Descripcion: {productos.descripcion_producto}</Text>
                        <Text style={styles.tituloAtributos}>Cantidad por unidad: {productos.cantidad_por_unidad}</Text>
                    </View>
                </Pressable>

        )
    })
    return (
        <ScrollView>
        <SafeAreaView style={styles.container}>
            <Header  busqueda={true} carrito={false} icon={'chevron-left'}></Header>
            <View style={styles.contenedorApp}>
                <View style={styles.contenedorCarta}>
                    {tarjetasCompras}
                </View>

                <View>
                    <Footer></Footer>
                </View>
            </View>
        </SafeAreaView>
        </ScrollView>
    );
}

const styles = StyleSheet.create({

    container: {
        backgroundColor: '#e9ecef',
        alignItems: 'center',
        justifyContent: "center",
        margin: 0,
        padding: 10,
        width: "100%",
        height: "100%",
    },
    contenedorApp: {
        flex: 7,
        alignItems: "center",
        justifyContent: 'center',
        height:  "100%",
        width:  "100%",
        minHeight: 600,
        backgroundColor: "#e9ecef",
    },
    contenedorTitulo: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        paddingLeft: 20,
        backgroundColor: "#fff",
    },
    contenedorCarta: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#e9ecef",
        padding: 5,
        margin: 5,
        borderRadius: 5,
    },
    carta: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        marginTop:10,
        backgroundColor: "#fff",
        shadowOffset:
        {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        elevation: 5,
        borderColor: "#f2f5f4",
        borderRadius:5,
        width:400,
        maxWidth: 400,
    },
    texto: {
        flex: 2,
        flexDirection: "column",
        alignItems: 'center',
        justifyContent: "center",
        color: "#110000",
    },
    tituloAtributos: {
        flex: 1,
        flexDirection: "row",
        alignItems: "flex-start",
        color: "#110000",
        fontSize: 17,
        fontWeight: "500",
        paddingLeft:10,
        paddingTop:5,
        margin:5,
    },
    imagen:{
        flex: 1,
        flexDirection: "row",
        width:80,
        height:80,
        marginTop:'5%',
        padding:5,
      },
    entradas: {
        flex: 5,
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
    },
    atributos: {
        flex: 1,
        flexDirection: "row",
        alignItems: "stretch",
        justifyContent: "flex-start",
        padding: 10,
    },

});
