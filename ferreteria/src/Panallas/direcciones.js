import { StatusBar } from 'expo-status-bar';
import { TextInput, StyleSheet, Text, View, Image, SafeAreaView, Pressable, ScrollView, TurboModuleRegistry } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
import { Boton, HiperVinculo, TextBox, PasswordBox, Footer, Header, TarjetaDireccion, ListaDireccion } from '../componentes/'
const id = 3;

const PantallaDirecciones = ({ route }) => {
    let idUsu = route.params.idUsu;
    if (!idUsu)
        idUsu = route.params
    return (
        <ScrollView>
            <View style={styles.container}>
                <Header busqueda={false} text={"Direcciones Envio"} carrito={false} agregarDirec={true} icon={'chevron-left'}></Header>
                <View style={styles.tarjeta}>
                    <ListaDireccion editar={true} id={idUsu}></ListaDireccion>
                </View>
                <Footer></Footer>
            </View>
        </ScrollView>
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
    tarjeta: {
        flex: 1,
        flexDirection: 'column',
        alignContent: 'flex-start',

    }


})
export default PantallaDirecciones;