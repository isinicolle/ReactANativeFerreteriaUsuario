import { StatusBar } from 'expo-status-bar';

import { ScrollView,TextInput, StyleSheet, Text, View,Image,SafeAreaView} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
import PantallaInicio from './src/Panallas/InicioSesion'

export default function App() {
  return (
    <ScrollView style={{flex:1}}>
      <PantallaInicio />
    </ScrollView>
    
  );
}
