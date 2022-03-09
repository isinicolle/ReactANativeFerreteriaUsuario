import React,{useEffect,useState} from 'react'
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
    const[direcciones,setDirecciones] = useState()
    useEffect( async () => {
        var a = await obtenerdirecciones(id);
        await setDirecciones(a)
      
      }, []);

    return (
        <View style={{width:'100%',flex:1,flexDirection:'column'}}>
        <View style={styles.Lista}>
            <FlatList horizontal={false} data={direcciones} keyExtractor={item=>item.id_direccionEnvio} renderItem={renderizarLista}  /> 
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

async function obtenerdirecciones(id){
    try{
        const res = await fetch('http://192.168.100.48:6001/api/direccionesEnvio/direccionEnvioXUsuario?id_usuarioCliente='+id,
        {method:'GET',
        headers:{
          Accept:'application/json',
          'Content-Type':'application/json'
        },
      }
      )
      const json = await res.json();
    return (json)

    } catch(err){
        console.log(err)
    }
}

const renderizarLista = ({item})=>{
    return(
        <TarjetaDireccion  direccion={item.direccion} nombre={item.Ciudades.codigoPostal} ciudad={item.Ciudades.nombre_ciudad} depto={item.Ciudades.Departamentos.nombreDepartamento}/>
    )
}
export default ListaDireccion