import { StatusBar } from 'expo-status-bar';

import { ScrollView,TextInput, StyleSheet, Text, View,Image,SafeAreaView} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'

import Pantalla from './src/Panallas/direcciones'

export default function App() {
  return (
    <ScrollView style={{flex:1}}>
      <Pantalla />

    </ScrollView>
    
  );
}
