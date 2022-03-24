import { StatusBar } from 'expo-status-bar';
import { TextInput, StyleSheet, Text, View,Image,SafeAreaView, Picker,ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
import {Boton,HiperVinculo,TextBox,PasswordBox,Footer, Pickers} from '../componentes/'
import { useState,useEffect } from 'react';

const Pantalla = ({navigation})=> {
  const [selectedCiudad,setSelectedCiudad] = useState('');
  const [selectedDepartamento,setSelectedDepartamento]= useState('');
  const [ciudades,setCiudades] = useState('');
  const [departamentos,setDepartamentos] = useState('');

  useEffect(()=>{
    fetchDepartamentos();
  },[navigation])

  useEffect(()=>{
    fetchCiudades();
  },[selectedDepartamento])

  
  const fetchCiudades =async ()=>{
    if (selectedDepartamento.id_departamento)
    try
    {
      const res = await fetch('http://192.168.100.48:6001/api/ciudades/listarCiudades?idDepartamento='+selectedDepartamento.id_departamento,
        {method:'GET',
          headers:{
          Accept:'application/json',
          'Content-Type':'application/json'
          }
        }
      );
      await res.json().then((data)=>{setCiudades(data);setSelectedCiudad(data[0])})
    }
    catch(err){
      console.log(err);
    }
  }


  const fetchDepartamentos= async ()=>{
    try
    {
      const res = await fetch('http://192.168.100.48:6001/api/departamentos/listar',
        {method:'GET',
          headers:{
          Accept:'application/json',
          'Content-Type':'application/json'
          }
        }
      );
      await res.json().then((data)=>{setDepartamentos(data);setSelectedDepartamento(data[0])})
    }
    catch(err){
      console.log(err);
    }
  
}
  





  return (
    <ScrollView>

    <SafeAreaView style={styles.container}>
    <Image style={styles.logo} source={require('../../assets/Images/Imagotipo.png')}/>
    <Text style={styles.header}>Solo unos detalles mas...</Text>
  
    <View style={styles.tarjeta}>
        <TextBox text={'Telefono'} icon={'phone'} />
        <Pickers label={'nombreDepartamento'} selectedValue={selectedDepartamento} setSelectedValue={setSelectedDepartamento} items={departamentos} text={'Departamento'} icon={'city'} />
        <Pickers label={'nombre_ciudad'} selectedValue={selectedCiudad} setSelectedValue={setSelectedCiudad} items={ciudades}  text={'Ciudad'} icon={'city-variant'}/>
        <TextBox text={'Direccion'} icon={'home'} />
        <Boton text={'Continuar'} onPress={()=>{console.log(selectedCiudad)}} />
    </View>
    <Footer/>
  </SafeAreaView>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#F8F8F8',
    alignItems:'center',
    flexDirection:'column',
    flexWrap:'wrap',
    alignContent:'center',
    height:'100%'
  },
  logo:{
    width:102,
    height:102,
    marginTop:'10%',
    marginBottom:'2%',
    padding:10,
  },
  tarjeta:{
    flex:1,
    padding:10,
    backgroundColor: '#fff',
    shadowColor: "#C70039",
    shadowOffset: 
      {
	    width: 0,
	    height: 13,
      },
    
    shadowOpacity: 0.44,
    shadowRadius: 28,
    elevation: 16,
    width:'90%',
    flexGrow:1,
    borderRadius:20,
    maxWidth:500
    }
  ,
  
  header:{
    color:'#000',
    fontFamily:'Arial' || null ,
    fontFamily:'sans-serif',
    fontStyle:'normal',
    fontWeight:'bold',
    fontSize:18,
    flex:0,
    marginLeft:'10%',
    marginRight:'10%',
    textAlign:'center',
    marginBottom:20
  },
 
  h1Tarjeta:{
    color:'#000',
    fontFamily:'Arial' || null,
    fontStyle:'normal',
    fontWeight:'bold',
    fontSize:18,
   textAlign:'center',
   paddingTop:20
  },
  h2Tarjeta:{
    color:'#000',
    fontFamily:'Arial' || null,
    fontStyle:'normal',
    fontWeight:'normal',
    fontSize:16,
    textAlign:'center',
    paddingTop:20
  }

})
export default Pantalla;
