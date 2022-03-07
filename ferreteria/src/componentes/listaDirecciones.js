import React from 'react'
import { FlatList, Pressable,StyleSheet,Text,TouchableOpacity,View } from 'react-native'
import TarjetaDireccion from './tarjetaDireccion'
import Icon from 'react-native-vector-icons/MaterialIcons'

class Direccion{
    constructor(id_direccionEnvio,nombre,direccion,Ciudad,Departamento){
        this.id_direccionEnvio = id_direccionEnvio,
        this.nombre=nombre,
        this.direccion = direccion,
        this.Ciudad = Ciudad,
        this.Departamento = Departamento
    }      
}

const dataDireccion = [
    new Direccion(1,"Nallely Reyes","Juan Ramon Molina",'San Pedro Sula','Cortes'),
    new Direccion(4,"Nallely Reyes","Juan Ramon Molina",'San Pedro Sula','Cortes'),
    new Direccion(7,"Nallely Reyes","Juan Ramon Molina",'San Pedro Sula','Cortes'),
    new Direccion(9,"Nallely Reyes","Juan Ramon Molina",'San Pedro Sula','Cortes'),
] 

const ListaDireccion  = ({ onPress,text,tipo,id})=>{
    return (
        <View style={{width:'100%',flex:1,flexDirection:'column'}}>
        <View style={styles.Lista}>
            <FlatList horizontal={false} data={dataDireccion} keyExtractor={item=>item.id_direccionEnvio} renderItem={renderizarLista}  /> 
        </View>
        </View>
        )
      
}

const styles = StyleSheet.create({
    Lista:{
        width:'100%',
        paddingHorizontal:'3%',
        paddingVertical:'5%'
    },

})

const renderizarLista = ({item})=>{
    return(
        <TarjetaDireccion nombre={item.nombre} direccion={item.direccion} ciudad={item.Ciudad} depto={item.Departamento}/>
    )
}
export default ListaDireccion