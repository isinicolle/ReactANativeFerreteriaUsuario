import React from 'react'
import { Pressable,StyleSheet,Text,TouchableOpacity } from 'react-native'


const Boton = ({ onPress,text,color='#C70039'})=>{
    return (
        <TouchableOpacity onPress={onPress} style={[styles.container,{backgroundColor:color}]}>
            <Text style={styles.text}>
                {text}
            </Text>
        </TouchableOpacity>


    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#C70039',
        width:'100%',
        padding:15,
        alignItems:'center',
        borderRadius:10,
        marginVertical:10
    },
    text:{
        fontWeight:'bold',
        color:'white',
        fontSize:20
    }
})

export default Boton;