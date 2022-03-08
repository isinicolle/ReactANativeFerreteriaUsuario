import React from 'react'
import { View,TextInput,StyleSheet,Text,TouchableOpacity } from 'react-native'
import Icons from 'react-native-vector-icons/MaterialIcons'

const TextBox = ({value,setValue,text})=>{
    return (
        <View style={styles.container}>
    <Icons name={'lock'} size={20}/>
        <TextInput 
        style={styles.input}
        placeholder={text}
        secureTextEntry={true} 
        value={value}
        onChangeText={setValue}
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