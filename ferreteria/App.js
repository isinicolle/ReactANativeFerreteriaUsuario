import { StatusBar } from 'expo-status-bar';
import { ScrollView,TextInput, StyleSheet, Text, View,Image,SafeAreaView} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
import {Login,Inicio,Carrito} from './src/Panallas/'

export default function App() {
  return (
    <SafeAreaView>
      <Carrito />
    </SafeAreaView>
    
  );
}
