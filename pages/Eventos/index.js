import React, { useState, useEffect } from 'react';
import { Text, View, FlatList } from 'react-native';

import ItemEvento from '../../components/itemEvento/index';

const Eventos = () => {

    // let url = 'http://localhost:62602/api/Eventos';
    let url = 'https://5f7f873fd6aabe00166f06be.mockapi.io/nyous/eventos';

    const [eventos, setEventos] = useState([]);

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
        listarEventos();
    }, [])

    const renderItem = ({ item }) => (
        <ItemEvento nome={item.nome} imagem={item.urlImagem} link={item.link} />
      );

    return(
        <View>
            <Text>Eventos</Text>
            
            <FlatList
                data={eventos}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>
    )
}

export default Eventos;