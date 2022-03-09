import { TextInput, StyleSheet, Text, View, Image, SafeAreaView} from 'react-native';
import {Footer, Header } from '../componentes/'


export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <Header text={'Regresar'} icon={'chevron-left'}></Header>

            <View style={styles.carta}>
                        <Image style={styles.imagen} source={require('../../assets/Images/Imagotipo.png')}/>
                        <View style={styles.resultado}>
                        <Text style={styles.tituloAtributos}>Nombre</Text>
                            <Text style={styles.tituloAtributos}>Marca</Text>
                            <Text style={styles.tituloAtributos}>Categoria</Text>
                        </View>
                        <View style={styles.resultado}>
                            <Text style={styles.tituloAtributos}>Cantidad: L.500</Text>
                            <Text style={styles.tituloAtributos}>Fecha: </Text>
                        </View>
            </View>
            <View style={styles.carta}>
            <Text style={styles.tituloAtributos}>Enviado a:</Text>
                        <View style={styles.resultado}>
                        <Text style={styles.tituloAtributos}>Nombre Cliente</Text>
                            <Text style={styles.tituloAtributos}>Direccion</Text>
                            <Text style={styles.tituloAtributos}>Ciudad</Text>
                            <Text style={styles.tituloAtributos}>Departamento</Text>
                        </View>
            </View>
            <View style={styles.cartaDetalle}>
                        <View style={styles.dato}>
                        <Text style={styles.cantidad}>Subtotal: </Text>
                        <Text style={styles.unidad}>##.##</Text>
                        </View>
                        
                        <View style={styles.dato}>
                        <Text style={styles.cantidad}>Envio: </Text>
                        <Text style={styles.unidad}>##.##</Text>
                        </View>

                        <View style={styles.dato}>
                        <Text style={styles.cantidad}>Impuesto: </Text>
                        <Text style={styles.unidad}>##.##</Text>
                        </View>

                        <View style={styles.dato}>
                        <Text style={styles.cantidad}>Total: </Text>
                        <Text style={styles.unidad}>##.##</Text>
                        </View>

                    </View>

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
        marginTop:10,
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
        borderRadius:5,
        width:400,
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
        borderRadius:5,
        height: "100%",
        margin: 10,
        width:400,
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
        borderBottomColor:'#111111',
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
        paddingLeft:5,
        paddingTop:5,
        margin:2,
    },
    imagen:{
        flex: 1,
        flexDirection: "row",
        width:80,
        height:80,
        marginTop:'5%',
        padding:5,
      },

});