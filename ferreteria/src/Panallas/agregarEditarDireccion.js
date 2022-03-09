import { StyleSheet, Text, View, SafeAreaView,ScrollView} from 'react-native';

import {Boton,TextBox,Footer, Texts, Header} from '../componentes/'

export default function App() {
    return (
        

        
    <SafeAreaView style={styles.container}>
        <Header text={'Agregar/Editar Direccion de Envio'} icon={'chevron-left'}></Header >
        <View style={styles.contenedorApp}>
            <Texts text={'Nombre'}/>
            <TextBox text={''} icon={'location-pin'} />
            <Texts text={'Direccion'}/>
            <TextBox text={''} icon={'location-pin'} />
            <Texts text={'Direccion 2 (opcional)'}/>
            <TextBox text={''} icon={'location-pin'} />           
            <View style={styles.atributos}>
                <Text style={styles.tituloAtributos}> Ciudad </Text>
                    <View style={styles.combo}>
                        
                    </View>
            </View>
            <View style={styles.atributos}>
                <Text style={styles.tituloAtributos}> Departamento </Text>
                    <View>
                       
                    </View>
            </View>
            <Boton text={'Guardar Cambios'}/>
        </View>
        <View><Footer></Footer></View>
  </SafeAreaView>

    );
}

const styles = StyleSheet.create({

    tituloAtributos: {
        color: "#110000",
        fontSize:18,
        margin:5,
        width:"auto",
    },
    atributos: {
        flexDirection: "column",
        alignItems: "stretch",
        justifyContent: "flex-start",
        padding: 5,
        width:"auto",
    },
    container: {
        flex:1,
        backgroundColor: '#F8F8F8',
        alignItems:'center',
        flexDirection:'column',
        flexWrap:'wrap',
        alignContent:'center',
        height:'100%',
        borderRadius: 10,
    },
    contenedorApp:{
        flex:1,
        padding:10,
        margin:10,
        backgroundColor: '#fff',
        width:'90%',
        flexGrow:1,
        borderRadius:20,
        maxWidth:500,
        borderRadius: 5,
    },

});