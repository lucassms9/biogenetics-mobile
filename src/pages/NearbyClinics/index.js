import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Autocomplete from 'react-native-autocomplete-input';
import { Feather } from '@expo/vector-icons';
import Container from '~/components/Container';
import Header from '~/components/Header';

const NearbyClinics = ({ navigation }) => {
  const [query, setQuery] = useState('');
  const [films, setFilms] = useState([
    {
      title: 'lucas',
    },
    {
      title: 'silva',
    },
    {
      title: 'santos',
    },
  ]);

  const [filmsHandle, setFilmsHandle] = useState([]);
  const [visibleAlert, setVisibleAlert] = useState(false);
  const [hideResults, setHideResults] = useState(false);
  const [clinics, setClinics] = useState([
    {
      id: 1,
      nome: 'Nome da clinica 1',
      endereco: 'rua casa da joana casa da joana casa da joana',
      bairro: 'bairro teste teste',
      cidade: 'Sorocaba',
      uf: 'SP',
      handleCity: 'Sorocaba - SP',
      cep: '18550-000',
      responsavel_telefone: '15-99788-5245',
    },
    {
      id: 2,
      nome: 'Nome da clinica 2',
      endereco: 'rua casa da joana casa da joana casa da joana',
      bairro: 'bairro teste teste',
      cidade: 'Boituva',
      uf: 'SP',
      handleCity: 'Boituva - SP',
      responsavel_telefone: '15-99788-5245',
    },
  ]);

  const setComplete = (query) => {
    if (!query) {
      return setFilmsHandle({});
    }
    setHideResults(false);
    const queryHandle = query.toLowerCase().trim();
    const regex = new RegExp(`${queryHandle}`, 'i');

    const getData = clinics.filter((clinic) => {
      const title = clinic.handleCity.toLowerCase().trim();

      return title.search(regex) >= 0;
    });
    setFilmsHandle(getData);
  };

  useEffect(() => {
    setComplete(query);
  }, [query]);

  const selectItem = (item) => {
    alert(item.title);
    setHideResults(true);
  };
  return (
    <Container style={{ flex: 1 }}>
      <Header noBack navigation={navigation} title="Laboratórios" />
      <View style={{ marginVertical: 20, zIndex: '1', marginHorizontal: 20 }}>
        <View>
          <Text style={{ fontSize: 15, fontWeight: 'bold', marginBottom: 10 }}>
            Selecione a cidade:
          </Text>
        </View>
        <View style={{ backgroundColor: '#fff', padding: 7, borderRadius: 15 }}>
          <Autocomplete
            data={filmsHandle}
            autoCorrect={false}
            hideResults={hideResults}
            listContainerStyle={{ borderWidth: 0 }}
            inputContainerStyle={{ borderWidth: 0 }}
            listStyle={{ borderBottomWidth: 1, borderRadius: 10, top: -5 }}
            defaultValue={query}
            onChangeText={(text) => setQuery(text)}
            renderItem={({ item, i }) => (
              <TouchableOpacity
                style={{
                  marginVertical: 15,
                  marginHorizontal: 20,
                }}
                onPress={() => selectItem(item)}
              >
                <Text>{item.handleCity}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
      <ScrollView>
        {clinics.map((clinic) => (
          <TouchableOpacity
            style={{
              padding: 15,
              backgroundColor: '#fff',
              borderRadius: 10,
              marginTop: 20,
              marginHorizontal: 20,
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 5,
              },
              shadowOpacity: 0.36,
              shadowRadius: 5.68,

              elevation: 20,
            }}
            onPress={() => navigation.navigate('ClinicDetail')}
          >
            <View>
              <View style={{ marginBottom: 7 }}>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    color: '#ff8500',
                  }}
                >
                  {clinic.nome}
                </Text>
              </View>
              <View style={{ marginBottom: 10 }}>
                <Text style={{ fontSize: 15 }}>{clinic.endereco}</Text>
                <Text style={{ fontSize: 15 }}>{clinic.bairro}</Text>
              </View>
              <View style={{ marginBottom: 10 }}>
                <Text
                  style={{ fontSize: 15 }}
                >{`${clinic.cidade} - ${clinic.uf}`}</Text>
              </View>

              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View
                  style={{
                    width: 45,
                    height: 45,
                    backgroundColor: '#199e19',
                    borderRadius: 22,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Feather name="phone" size={28} color="white" />
                </View>
                <Text style={{ marginLeft: 10, fontSize: 15 }}>
                  {clinic.responsavel_telefone}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </Container>
  );
};

export default NearbyClinics;
