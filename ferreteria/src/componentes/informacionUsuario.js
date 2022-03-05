import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'



export default function App() {
    return (
        <View style={styles.container}>
            <View style={styles.contenedorApp}>
                <View style={styles.contenedorTitulo}>

                    <Text style={styles.tituloConfiguraciones}>   Configuraciones</Text>
                </View>
               
                <View style={styles.footer}>
                    <Text style={styles.textoFooter}>Version 1.1.1.1</Text>
                    <Text style={styles.textoFooter}>Derechos reservados UNICAH@</Text>
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
        alignItems: "stretch",
        justifyContent: 'center',
        height: "100%",
        width: 360,
        minHeight: 600,
        borderWidth: 1,
        borderColor: "#dedede",
        borderRadius: 25,
    },
    contenedorTitulo: {
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        padding: 15,
    },
    tituloConfiguraciones: {
        color: "#495000",
        fontSize: 18,
        fontWeight: "500",

    },
   
    footer: {
        flex: 2,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        padding: 10,
    },
    textoFooter: {
        color: 'rgb( 194, 192, 192)',
        fontSize: 10,
        fontWeight: "200",
        opacity: 20,
        padding: 10
    },

});
