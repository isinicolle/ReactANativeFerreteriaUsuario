import { StyleSheet, Text, View} from 'react-native';
import {Header, Footer} from '../componentes/'

export default function App() {
    return (
        <View style={styles.container}>
            <Header text={'Misión y Visión'} icon={'chevron-left'}></Header >
            <View style={styles.contenedorApp}>
                <View style={styles.contenedorTexto}>
                    <View style={styles.textcontrol}>
                        <View style={styles.atributos}>
                            <Text style={styles.subtitulo}> Misión </Text>
                            <Text style={styles.atributos}>
                            Atender a nuestra clientela en forma profesional, 
                            asesorándolos con honestidad, servicio de calidad, entusiasmo, actitud positiva y lealtad; 
                            ofreciendo productos de calidad a precios justos, a través del buen uso de nuestras relaciones y de la 
                            administración de recursos financieros, para generar beneficios a los empleados, socios y a la sociedad.</Text>

                            <Text style={styles.subtitulo}> Visión</Text>
                            <Text style={styles.atributos}>
                            Incrementar la sensibilidad a la dinámica del cambio continuo del entorno
                            trabajar en equipo, ser mejor asesor, aumentar los locales , incrementar ventas, incrementar utilidades / márgenes
                            mayor participación del mercado, ser más eficientes y efectivos y bajar costos.</Text>

                        </View>
                    </View>
                    
                </View>

                <View>
                    <Footer></Footer>
                </View>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        backgroundColor: '#e9ecef',
        alignItems: 'center',
        justifyContent: "center",
        margin: 0,
        padding: 20,
        width: "100%",
        height: "100%",
    },
    contenedorApp: {
        flex: 7,
        alignItems: "stretch",
        justifyContent: 'center',
        height: "100%",
        width: 360,
        minHeight: 600,
    },
    contenedorTitulo: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        paddingLeft: 20,
        backgroundColor: "#fff"
    },
    subtitulo: {
        textAlign:'center',
        color: "#110000",
        fontSize: 15,
        fontWeight: 'bold',
    },
    contenedorTexto: {
        flex: 13,
        flexDirection: "column",
        alignItems: "stretch",
        justifyContent: "center",
        backgroundColor: "#fff",
        padding: 10,
        margin: 10,
        borderRadius: 5,
    },
    textcontrol: {
        flex: 5,
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
    },
    atributos: {
        flex: 1,
        flexDirection: "column",
        alignItems: "stretch",
        justifyContent: "flex-start",
        padding: 10,
        textAlign: 'justify'
    },   

});