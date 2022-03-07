import { StatusBar } from 'expo-status-bar';

import { ScrollView,TextInput, StyleSheet, Text, View,Image,SafeAreaView} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'

import Configuraciones from './src/Panallas/informacionUsuario'

export default function App() {
  return (
    <ScrollView style={{flex:1}}>
      <Configuraciones />

    </ScrollView>
    
  );
}
