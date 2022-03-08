import { StatusBar } from 'expo-status-bar';
import { TextInput, StyleSheet, Text, View,Image,SafeAreaView} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
import {Boton,HiperVinculo,TextBox,PasswordBox,Footer,Header,ListaCarrito,ListaBusqueda} from '../componentes'


const Busqueda = ({nombre})=> {
  return (
    <SafeAreaView style={styles.container}>
        <ListaBusqueda text={nombre}/>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container:{

  }
})


  export default Busqueda;