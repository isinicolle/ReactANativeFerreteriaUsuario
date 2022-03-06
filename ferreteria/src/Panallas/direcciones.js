import { StatusBar } from 'expo-status-bar';
import { TextInput, StyleSheet, Text, View, Image, SafeAreaView,Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
import { Boton, HiperVinculo, TextBox, PasswordBox, Footer, Header, TarjetaDireccion } from '../componentes/'


const Pantalla = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Header busqueda={false} carrito={true} icon={'chevron-left'}></Header>
            <View style={styles.tarjeta}>
            <TarjetaDireccion nombre={'Jungkook'} direccion={"Juan ramon molina"} ciudad={"San Pedro Sula"} depto={"Cortes"} icon='email'/>

            </View>

            <Footer></Footer>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8F8F8',
        alignItems: 'center',
        flexDirection: 'column',
        flexWrap: 'wrap',
        alignContent: 'center',
        height: '100%'
    },
    tarjeta:{
   flex:1
    }

    
})
export default Pantalla;