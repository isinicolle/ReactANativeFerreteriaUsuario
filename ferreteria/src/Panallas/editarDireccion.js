import { StyleSheet, View, ScrollView, Alert } from 'react-native';
import { Boton, TextBox, Footer, Pickers, Texts, Header, tarjetaDireccion } from '../componentes/'
import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ConfiguracionDireccion = ({ navigation, route }) => {

    const [id_usuarioCliente, setUsuario] = useState('');
    useEffect(async () => {
        await AsyncStorage.getItem("idUsuario").then((data) => { setUsuario(data); });
    }, []);

    const buscarDireccion = "http://192.168.1.25:6001/api/direccionesEnvio/buscarDireccionesEnvio?id_direccionEnvio=";
    const actualizarDireccion = "http://192.168.1.25:6001/api/direccionesEnvio/actualizarDireccionEnvio?id_direccionEnvio=";
    const cuiXdepto = "http://192.168.1.25:6001/api/ciudades/listarCiudades?idDepartamento=";
    const listDeptos = "http://192.168.1.25:6001/api/departamentos/listar";

    const [selectedCiudad, setSelectedCiudad] = useState('');
    const [selectedDepartamento, setSelectedDepartamento] = useState('');
    const [ciudades, setCiudades] = useState('');
    const [departamentos, setDepartamentos] = useState('');

    const [direccion, setDireccion] = useState('');
    const [direccionOP, setDireccionOP] = useState('');

    useEffect(() => {
        fetchDepartamentos();
    }, [navigation])

    useEffect(() => {
        cargar();
    }, [])

    useEffect(() => {
        fetchCiudades();
    }, [selectedDepartamento])

    const fetchCiudades = async () => {
        if (selectedDepartamento.id_departamento)
            try {
                const res = await fetch(cuiXdepto + selectedDepartamento.id_departamento,
                    {
                        method: 'GET',
                        headers: {
                            Accept: 'application/json',
                            'Content-Type': 'application/json'
                        }
                    }
                );
                await res.json().then((data) => { setCiudades(data); setSelectedCiudad(data[0]) })
            }
            catch (err) {
                console.log(err);
            }
    }

    const fetchDepartamentos = async () => {
        try {
            const res = await fetch(listDeptos,
                {
                    method: 'GET',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json'
                    }
                }
            );
            await res.json().then((data) => { setDepartamentos(data); setSelectedDepartamento(data[0]) })
        }
        catch (err) {
            console.log(err);
        }

    }

    const cargar = async () => {
        fetch(buscarDireccion + route.params.idDir).then((response) => response.json())
            .then((json) => {
                setDireccion(json.direccion);
                setSelectedCiudad(json.id_ciudad);
                setDireccionOP(json.direccion_opcional);
            })
            .catch((error) => console.log(error))
    }

    const presGuardarCambio = async () => {
        try {
            const respuesta = await fetch(
                actualizarDireccion + route.params.idDir, {
                method: 'PUT',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    direccion: direccion,
                    direccion_opcional: direccionOP,
                    id_ciudad: Number(selectedCiudad['id_ciudad']),
                    id_usuarioCliente: Number(id_usuarioCliente),

                })

            });
            const json = await respuesta.json();
            console.log(json);
            Alert.alert("FERRETEAR", "Datos editados correctamente");
            cargar();
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <ScrollView>

            <View style={styles.container}>
                <Header text={'Editar Direccion de Envio'} icon={'chevron-left'}></Header>
                <View style={styles.tarjeta}>

                    <Texts text={'Direccion '} />
                    <TextBox number={''} setValue={setDireccion} value={direccion} icon={'location-pin'} max={150} />

                    <Texts text={'Direccion Opcional'} />
                    <TextBox number={''} setValue={setDireccionOP} value={direccionOP} icon={'location-pin'} max={150} />

                    <Texts text={'Departamento '} />
                    <Pickers label={'nombreDepartamento'} selectedValue={selectedDepartamento} setSelectedValue={setSelectedDepartamento}
                        items={departamentos} text={'Departamento'} icon={'city'} />

                    <Texts text={'Ciudad '} />
                    <Pickers label={'nombre_ciudad'} selectedValue={selectedCiudad} setSelectedValue={setSelectedCiudad}
                        items={ciudades} text={'Ciudad'} icon={'city-variant'} />

                    <Boton text={'Guardar Cambios'} onPress={presGuardarCambio} />
                </View>
                <Footer />
            </View >

        </ScrollView >
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8F8F8',
        alignItems: 'center',
        flexDirection: 'column',
        flexWrap: 'wrap',
        alignContent: 'center',
        height: '100%'
    },
    tarjeta: {
        flex: 1,
        padding: 10,
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
        width: '90%',
        flexGrow: 1,
        borderRadius: 20,
        maxWidth: 500
    },
})

export default ConfiguracionDireccion;
