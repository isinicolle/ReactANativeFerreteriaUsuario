import { StatusBar } from 'expo-status-bar';
import { TextInput, StyleSheet, Text, View,Image,SafeAreaView} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'



const Footer = ()=> {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>Derechos reservados UNICAH®</Text>
    </View>
  );
}
const styles= StyleSheet.create({
    footer:{
        flex:0,
        alignItems:'center',
        flexDirection:'row',
        padding:'10%',
       
      },
      footerText:{
        color:'#B9B9B9',
    
        fontSize:12,
      },
}) 

export default Footer 
