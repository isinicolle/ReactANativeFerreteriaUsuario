import React from 'react'
import { Pressable,StyleSheet,Text,TouchableOpacity } from 'react-native'

const HyperText = ({ onPress,text})=>{
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Text style={styles.text}>
                {text}
            </Text>
        </TouchableOpacity>


    )
}

const styles = StyleSheet.create({
    container:{
        paddingTop:10,
    },
    text:{
        fontWeight:'normal',
        fontSize:15,
        color:'#B9B9B9'
    }
})

export default HyperText;