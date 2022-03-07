import React from 'react'
import { View,TextInput,StyleSheet,Text,TouchableOpacity, Picker } from 'react-native'
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'

const Pickers = ({value,setValue,text,icon})=>{
    return (
        <View style={styles.container}>
    <Icons name={icon} size={20}/>
        <Picker 
        style={styles.input}
        value={value}
        onChangeText={setValue} 
        autoComplete
        placeholder={text}>
             <Picker.Item label={text}/>
        </Picker>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:0,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#fff',
        padding:'5%',
        borderWidth:1.5,
        borderRadius:10,
        borderColor:'#6B6B6B',
        marginVertical:10,
    },
    input:{
        flex:1,
        fontSize:18,
        borderRadius:10,
        borderWidth:0,
        overflow:'hidden',
        backgroundColor:'#fff',
    }
    

})
export default Pickers;