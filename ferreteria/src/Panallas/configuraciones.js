import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
import {useNavigation} from '@react-navigation/native';


export default function App() {
    const nav=useNavigation();
    return (
        <ScrollView>
        <View style={styles.container}>
            <View style={styles.contenedorApp}>
                <View style={styles.contenedorTitulo}>

                    <Text style={styles.tituloConfiguraciones}>   Configuraciones</Text>
                </View>
                <View style={styles.contenedorControles}>
                    <View style={styles.cuenta}>
                        <View style={styles.contenedorSubtitlo}>

                            <Text style={styles.subtituloConfiguraciones}>Inicio</Text>
                        </View>
                        <TouchableOpacity style={styles.contenedorTexto} onPress={() => {nav.navigate('Direcciones')}}>
                            <View style={styles.opcion}>
                                <Icon name="location-pin" size={20}></Icon>
                                <Text style={styles.texto}> Dirrecciones de envio</Text></View>
                            <View style={styles.nav}>
                                <Icon name="chevron-right" size={25}></Icon>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.contenedorTexto} onPress={() => {nav.navigate('InformacionUsuario')}}>
                            <View style={styles.opcion}>
                                <Icon name="location-pin" size={20}></Icon>
                                <Text style={styles.texto}> Información de cuenta</Text></View>
                            <View style={styles.nav}>
                                <Icon name="chevron-right" size={25}></Icon>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.contenedorTexto}>
                            <View style={styles.opcion}>
                                <Icon name="location-pin" size={20}></Icon>
                                <Text style={styles.texto}> Historial de compras</Text></View>
                            <View style={styles.nav}>
                                <Icon name="chevron-right" size={25}></Icon>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.contenedorTexto}>
                            <View style={styles.opcion}>
                                <Icon name="location-pin" size={20}></Icon>
                                <Text style={styles.texto}> Cerrar sesion</Text></View>
                            <View style={styles.nav}>
                                <Icon name="chevron-right" size={25}></Icon>
                            </View>
                        </TouchableOpacity>

                    </View>
                    <View style={styles.cuenta2}>
                        <View style={styles.contenedorSubtitlo}>

                            <Text style={styles.subtituloConfiguraciones}>Acerca de</Text>
                        </View>
                        <TouchableOpacity style={styles.contenedorTexto}>
                            <View style={styles.opcion}>
                                <Icon name="location-pin" size={20}></Icon>
                                <Text style={styles.texto}> Condiciones de uso</Text></View>
                            <View style={styles.nav}>
                                <Icon name="chevron-right" size={25}></Icon>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.contenedorTexto}>
                            <View style={styles.opcion}>
                                <Icon name="location-pin" size={20}></Icon>
                                <Text style={styles.texto}> Privacidad</Text></View>
                            <View style={styles.nav}>
                                <Icon name="chevron-right" size={25}></Icon>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.contenedorTexto}>
                            <View style={styles.opcion}>
                                <Icon name="location-pin" size={20}></Icon>
                                <Text style={styles.texto}> Misión y vision</Text>
                            </View>
                            <View style={styles.nav}>
                                <Icon name="chevron-right" size={25}></Icon>
                            </View>
                        </TouchableOpacity>

                    </View>

                </View>
                <View style={styles.footer}>
                    <Text style={styles.textoFooter}>Version 1.1.1.1</Text>
                    <Text style={styles.textoFooter}>Derechos reservados UNICAH@</Text>
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
    contenedorSubtitlo: {
        flex: 1,
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        margin: 5,
    },
    opcion: {
        flex: 2,
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "flex-start",
    },
    nav: {
        flex: 1,
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "flex-end",
    },

    subtituloConfiguraciones: {
        color: "#112226",
        fontSize: 25,
        fontWeight: "bold",
    },

    cuenta: {
        flex: 4,
        flexDirection: "column",
        alignItems: "stretch",
        justifyContent: "center",
        backgroundColor: "#fff",
        padding: 5,
    },

    cuenta2: {
        flex: 3,
        flexDirection: "column",
        alignItems: "stretch",
        justifyContent: "center",
        backgroundColor: "#fff",
        padding: 5,
    },

    contenedorControles: {
        flex: 6,
        flexDirection: "column",
        alignItems: "stretch",
        justifyContent: "center",
        backgroundColor: "#fff",
        padding: 10,
    },

    contenedorTexto: {
        flex: 1,
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        margin: 5
    },
    texto: {
        color: "#112226",
        fontSize: 15,
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
