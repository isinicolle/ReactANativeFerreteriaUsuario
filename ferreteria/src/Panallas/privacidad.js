import { StyleSheet, Text, View} from 'react-native';
import {Header, Footer} from '../componentes/'

export default function App() {
    return (
        <View style={styles.container}>
            <Header text={'Aviso de Privacidad'} icon={'chevron-left'}></Header >
            <View style={styles.contenedorApp}>
                <View style={styles.contenedorTexto}>
                    <View style={styles.textcontrol}>
                        <View style={styles.atributos}>
                            <Text style={styles.subtitulo}> Aviso de Privacidad </Text>
                            <Text style={styles.atributos}>
                            Ferretería @Ferretear, es responsable del uso y protección de sus datos personales, en este sentido y 
                            atendiendo las obligaciones legales establecidas en la Ley Federal de Protección de Datos Personales en 
                            Posesión de los Particulares, a través de este instrumento se informa a los titulares de los datos, la 
                            información que de ellos se recaba y los fines que se le darán a dicha información. Por otra parte, informamos 
                            a usted, que sus datos personales no serán compartidos con ninguna autoridad, empresa, organización o 
                            persona distintas a nosotros y serán utilizados exclusivamente para los fines señalados.</Text>

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