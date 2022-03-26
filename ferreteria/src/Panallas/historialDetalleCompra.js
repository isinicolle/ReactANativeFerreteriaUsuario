import { TextInput, StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';
import { Footer, Header } from '../componentes/'
import { useState, useEffect } from 'react'

export default function App() {

    const [info, setinfo] = useState([]);
    useEffect(() => {
        try {
            const response = fetch("http://192.168.0.3:6001/api/ventas/ventaid?id_Venta=78")
                .then((response) => response.json())
                .then((json) => {
                    setinfo(json);
                });

        } catch (error) {
            console.error(error);
        }
    }, [])

    const prueba = info.map(item => {
        let producto = item;
        let impuesto = (producto.DetallesVentas[0].Productos.precio_actual) * (producto.ISV)
        let total = (producto.DetallesVentas[0].Productos.precio_actual) + impuesto
        return (
            <View style={{flex: 1}}>
                <View style={styles.carta}>
                    <Image style={styles.imagen} source={{uri: producto.DetallesVentas[0].Productos.imagen}} />
                    <View style={styles.resultado}>
                        {prueba}
                        <Text style={styles.tituloAtributos}>Nombre: {producto.DetallesVentas[0].Productos.descripcion_producto}</Text>
                        <Text style={styles.tituloAtributos}>ID Marca: {producto.DetallesVentas[0].Productos.id_marca}</Text>
                        <Text style={styles.tituloAtributos}>Categoria: {producto.DetallesVentas[0].Productos.id_categoria}</Text>
                    </View>
                    <View style={styles.resultado}>
                        <Text style={styles.tituloAtributos}>Cantidad: {producto.DetallesVentas[0].cantidad}</Text>
                        <Text style={styles.tituloAtributos}>Fecha: {producto.fecha}</Text>
                    </View>
                </View>
                <View style={styles.carta}>
                    <Text style={styles.tituloAtributos}>Enviado a: {producto.id_cliente}</Text>
                </View>
                <View style={styles.cartaDetalle}>
                    <View style={styles.dato}>
                        <Text style={styles.cantidad}>Subtotal: </Text>
                        <Text style={styles.unidad}>{producto.DetallesVentas[0].Productos.precio_actual}</Text>
                    </View>

                    <View style={styles.dato}>
                        <Text style={styles.cantidad}>ID Direccion de envio: </Text>
                        <Text style={styles.unidad}>{producto.id_direccionEnvio}</Text>
                    </View>

                    <View style={styles.dato}>
                        <Text style={styles.cantidad}>Impuesto: </Text>
                        <Text style={styles.unidad}>{impuesto}</Text>
                    </View>

                    <View style={styles.dato}>
                        <Text style={styles.cantidad}>Total: </Text>
                        <Text style={styles.unidad}>{total}</Text>
                    </View>

                </View>
            </View>

        )
    })

    return (
        <SafeAreaView style={styles.container}>
            <Header text={'Regresar'} icon={'chevron-left'}></Header>
                {prueba}
            <Footer></Footer>
        </SafeAreaView>
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
    carta: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 10,
        backgroundColor: '#fff',
        shadowOffset:
        {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        elevation: 5,
        borderColor: "#f2f5f4",
        borderRadius: 5,
        width: 400,
        maxWidth: 400,
    },
    cartaDetalle: {
        flex: 3,
        padding: 10,
        backgroundColor: '#fff',
        shadowOffset:
        {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        elevation: 5,
        flexGrow: 1,
        borderRadius: 5,
        height: "100%",
        margin: 10,
        width: 400,
        maxWidth: 400,
    },
    cantidad: {
        fontSize: 18,
        fontFamily: 'Arial' || null,
        fontFamily: 'sans-serif',
        fontStyle: 'normal',
        fontWeight: 'bold',
    },
    unidad: {
        fontSize: 18,
        fontFamily: 'Arial' || null,
        fontFamily: 'sans-serif',
        fontStyle: 'normal',
    },
    dato: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        paddingVertical: 7,
        paddingHorizontal: 10,
        borderBottomColor: '#111111',
        borderBottomWidth: 1,
        flexDirection: "row",
    },
    resultado: {
        flex: 2,
        flexDirection: "column",
        alignItems: 'flex-start',
        justifyContent: "flex-start",
        color: "#110000",
    },
    tituloAtributos: {
        flex: 1,
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        color: "#110000",
        fontSize: 17,
        fontWeight: "500",
        paddingLeft: 5,
        paddingTop: 5,
        margin: 2,
    },
    imagen: {
        flex: 1,
        flexDirection: "row",
        width: 80,
        height: 80,
        marginTop: '5%',
        padding: 5,
    },

});