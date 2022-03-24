import React,{ useState,useEffect } from 'react';
import { View,TextInput,StyleSheet,Text,TouchableOpacity, Picker } from 'react-native'
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'

const Pickers = ({label,items,selectedValue,setSelectedValue,text,icon})=>{
    
    const renderItem= ()=>{
        if (items.length>0)
        return items.map((item)=>{
            return <Picker.Item value={item}  label={item[''+label]}/>
        });
        else 
        return <Picker.Item label={text}/>

    }
    
    

    return (
      
        <View style={styles.container}>
    <Icons name={icon} size={20}/>
        <Picker 
        style={styles.input}
        selectedValue={selectedValue}
        onValueChange={(itemValue,itemIndex)=>{
        setSelectedValue(itemValue);
       
        }} 
        placeholder={text}>

             {renderItem()}
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
        padding:'3%',
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