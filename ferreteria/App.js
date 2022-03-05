import { StatusBar } from 'expo-status-bar';
import { ScrollView,TextInput, StyleSheet, Text, View,Image,SafeAreaView} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
import PantallaInicio from './src/Panallas/InicioSesion'
import PantallaRegistro from './src/Panallas/crearUsuario'
import PantallaRegistroDos from './src/Panallas/registroDos'


export default function App() {
  return (
    <ScrollView style={{flex:1}}>
      <PantallaRegistroDos/>
    </ScrollView>
    
  );
}
