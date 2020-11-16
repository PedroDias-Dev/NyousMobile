import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

const Eventos = () => {

    // let url = 'http://localhost:62602/api/Eventos';
    let url = 'https://5f7f873fd6aabe00166f06be.mockapi.io/nyous/eventos';

    const [token, setToken] = useState('');
    const [eventos, setEventos] = useState([]);

    const getToken = async () => {
        setToken(await AsyncStorage.getItem('@jwt'));
    }

    useEffect(() => {
        listarEventos();
    }, []);

    const listarEventos = () => {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setEventos(data);
                console.log(data);
            })
            .catch(err => console.error(err));
    }

    useEffect(()=>{
        getToken();
        listarEventos();
    }, [])

    return(
        <View>
            <Text>Eventos</Text>
            <Text>{token}</Text>
        </View>
    )
}

export default Eventos;