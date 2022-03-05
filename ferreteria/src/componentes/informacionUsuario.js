import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'



export default function App() {
    return (
        <View style={styles.container}>
            <View style={styles.contenedorApp}>
                <View style={styles.contenedorTitulo}>

                    <Text style={styles.tituloConfiguraciones}>  Información de usuario</Text>
                </View>
                <View style={styles.contenedorControles}>
                    <View style={styles.entradas}>
                      <View style={styles.individualEntras}>
                      <Text style={styles.tituloEntradas}>  Nombre</Text>
                      <TextInput placeholder="Nombre" style={styles.escribir}></TextInput>
                      </View>
                      <View style={styles.individualEntras}>
                      <Text style={styles.tituloEntradas}>  Apellido</Text>
                      <TextInput placeholder="Apellidos" style={styles.escribir}></TextInput>
                      </View>
                      <View style={styles.individualEntras}>
                      <Text style={styles.tituloEntradas}>  Telefono</Text>
                      <TextInput placeholder="Telefono" style={styles.escribir}></TextInput>
                      </View>
                      <View style={styles.individualEntras}>
                      <Text style={styles.tituloEntradas}>  DNI</Text>
                      <TextInput placeholder="DNI" style={styles.escribir}></TextInput>
                      </View>
                      <View style={styles.individualEntras}>
                      <Text style={styles.tituloEntradas}>  RTN</Text>
                      <TextInput placeholder="RTN" style={styles.escribir}></TextInput>
                      </View>
                    </View>
                    <View style={styles.botones}>

                    </View>
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
        margin:10,
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
    individualEntras:{
        
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    padding:10
    },
    escribir:{
        flex:1,
        alignItems:"flex-start",
        padding:10,
        margin: 5,
        fontSize: 12,
        fontWeight:"400",
        width:"169%",
        color: "#495057",
        backgroundColor:"#fff",
        borderWidth:1,
        borderStyle:"solid",
        borderColor: "#ced4da",
        borderRadius: 10,
      },
    botones:{
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
       
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

});
