import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Button, Pressable, SafeAreaView, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
import {Boton,HiperVinculo,TextBox,PasswordBox,Footer, Texts} from '../componentes/'

export default function App() {
    return (
        <ScrollView>
        <View style={styles.container}>
        <View style={styles.tarjeta}>
        <Texts text={'Nombre'}/>
        <TextBox text={'Andres'} icon={'face'} />
        <Texts text={'Apellido'}/>
        <TextBox text={'Martinez'} icon={'face'} />
        <Texts text={'Telefono'}/>
        <TextBox text={'95560237'} icon={'phone'} />
        <Texts text={'DNI'}/>
        <TextBox text={'0501200711245'} icon={'book'} />
        <Texts text={'RTN'}/>
        <TextBox text={'1230501200711245'} icon={'text-format'} />
            <Boton text={'Editar contraseña'}/>
            <Boton text={'Guardar Cambios'}/>
    </View>
    <Footer/>
  </View>
  </ScrollView>
    );
}

const styles = StyleSheet.create({

    container: {
        flex:1,
        backgroundColor: '#F8F8F8',
        alignItems:'center',
        flexDirection:'column',
        flexWrap:'wrap',
        alignContent:'center',
        height:'100%'
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
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        padding: 15,
        backgroundColor: "#fff"

    },
    tituloConfiguraciones: {

        color: "#110000",
        fontSize: 18,
        fontWeight: "500",

    },
    tituloEntradas: {
        color: "#110000",
        fontSize: 17,
        fontWeight: "500",

    },
    contenedorControles: {
        flex: 9,
        flexDirection: "column",
        alignItems: "stretch",
        justifyContent: "center",
        backgroundColor: "#fff",
        padding: 10,
        margin: 10,
        borderWidth: 1,
        borderColor: "#dedede",
        borderRadius: 25,
    },
    entradas: {
        flex: 5,
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",

    },
    individualEntras: {
        flex: 1,
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        padding: 5
    },
    botones: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",

    },
    button: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 7,
        paddingHorizontal: 10,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: '#C70039',
        margin: 5
    },
    text: {
        fontSize: 13,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },


    footer: {
        flex: 3,
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
    tarjeta:{
        flex:1,
        padding:10,
        backgroundColor: '#fff',
        shadowColor: "#C70039",
        shadowOffset: 
          {
            width: 0,
            height: 13,
          },
        
        shadowOpacity: 0.44,
        shadowRadius: 28,
        elevation: 16,
        width:'90%',
        flexGrow:1,
        borderRadius:20,
        maxWidth:500
        }

});
