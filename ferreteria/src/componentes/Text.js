import React from 'react'
import { View,TextInput,StyleSheet,Text,TouchableOpacity } from 'react-native'
import Icons from 'react-native-vector-icons/MaterialIcons'

const Texts = ({value, setValue, text, icon})=>{
    return (
        <View style={styles.container}>
    <Icons name={icon} size={20}/>
        <Text style={styles.input}       
        >{text} </Text>
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
        borderWidth: 0,
        borderRadius:10,
        borderColor:'#6B6B6B',
        marginVertical:5,
        marginBottom: -25
    },
    input:{
        flex:1,
        fontSize:18,
        marginTop: -30,
        marginBottom: -30,
        marginLeft: -10
    }
})
export default Texts;