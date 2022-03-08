import React from 'react'
import { View,TextInput,StyleSheet,Text,TouchableOpacity } from 'react-native'
import Icons from 'react-native-vector-icons/MaterialIcons'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const TextBox = ({value,setValue,text,icon,tipo='default',max=100})=>{
    return (
        <View style={styles.container}>
        <Icons name={icon} size={20}/>
        <TextInput 
        style={styles.input}
        autoComplete
        placeholder={text}
        value={value}
        onChangeText={setValue}
        keyboardType={tipo}
        maxLength={max}
        />
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
        marginVertical:10
    },
    input:{
        flex:1,
        fontSize:18,
    }
    

})
export default TextBox;