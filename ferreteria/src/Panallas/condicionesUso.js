import { StyleSheet, Text, View,ScrollView} from 'react-native';
import {Header, Footer} from '../componentes/'

export default function App() {
    return (
        <ScrollView>

        <View style={styles.container}>
            <Header text={'Condiciones'} icon={'chevron-left'}></Header >
            <View style={styles.contenedorApp}>
                <View style={styles.contenedorTexto}>
                    <View style={styles.textcontrol}>
                        <View style={styles.atributos}>
                            <Text style={styles.subtitulo}> 1. Utilizacion</Text>
                            <Text style={styles.atributos}>
                            El Usuario se compromete a utilizar esta App de acuerdo con lo establecido en la legislación vigente, 
                            absteniéndose de utilizar la App para actividades contrarias a las leyes, a la moral, o usos lesivos de 
                            los derechos e intereses de terceros. </Text>

                            <Text style={styles.subtitulo}> 2. Derechos de modificación</Text>
                            <Text style={styles.atributos}>
                            UNICAH@ se reserva el derecho a modificar unilateralmente y en cualquier momento, sin previo aviso, 
                            la presentación y contenido de la App, sus servicios y las condiciones generales de uso.</Text>

                            <Text style={styles.subtitulo}> 3.Información Productos y Precios</Text>
                            <Text style={styles.atributos}>
                            La información publicada está basada en los datos proporcionados por UNICAH@ y no garantiza la corrección 
                            o la entereza. La información publicada es sólo indicativa y puede ser cambiada en cualquier momento 
                            sin notificación previa. En los precios el IVA no está incluido, los gastos de servicio del envío corren por 
                            cuenta del usuario, la empresa añadirá al 
                            total del importe de los productos seleccionados. </Text>
                        </View>
                    </View>
                    
                </View>

                <View>
                    <Footer></Footer>
                </View>
            </View>

        </View>
        </ScrollView>
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
        textAlign:'left',
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