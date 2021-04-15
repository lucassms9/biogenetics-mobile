import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Autocomplete from 'react-native-autocomplete-input';

import { useTranslation } from 'react-i18next';
import { Feather } from '@expo/vector-icons';
import Container from '~/components/Container';
import Header from '~/components/Header';
import Loader from '~/components/Loader';
import ButtonPrimary from '~/components/ButtonPrimary';

import { listAll } from '~/services/clinics';

const LaboratoryList = ({ navigation, route }) => {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [clinics, setClinics] = useState([]);
  const [handleOS, setHandleOS] = useState('');
  const [hasFilter, setHasFilter] = useState(false);
  const [remoteClinics, setRemoteClinics] = useState([]);
  const [autoHandle, setAutoHandle] = useState([]);
  const [hideResults, setHideResults] = useState(false);
  const [choose, setChoose] = useState(false);

  const { t } = useTranslation();
  const { serviceId } = route.params;

  const getClinics = async () => {
    try {
      setLoading(true);
      const {
        data: {
          result: {
            result: { clientes },
          },
        },
      } = await listAll();
      setClinics(clientes);
      setRemoteClinics(clientes);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  const setComplete = (query) => {
    if (!query) {
      setHasFilter(false);
      return setAutoHandle([]);
    }
    if (choose) {
      setChoose(false);
      return setAutoHandle([]);
    }
    setHideResults(false);
    setHasFilter(false);
    const queryHandle = query.toLowerCase().trim();
    const regex = new RegExp(`${queryHandle}`, 'i');

    const getData = remoteClinics.filter((Remoclinic) => {
      const title = Remoclinic.handleCity.toLowerCase().trim();

      return title.search(regex) >= 0;
    });
    const group = getData.reduce((acum, current) => {
      const test = acum.find((ac) => ac.handleCity === current.handleCity);
      if (!test) {
        return acum.concat(current);
      }
      return acum;
    }, []);

    setAutoHandle(group);
    setHasFilter(true);
    setHideResults(false);
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getClinics();
    });

    return unsubscribe;
  }, [navigation]);

  useEffect(() => {
    setComplete(query);
  }, [query]);

  useEffect(() => {
    getClinics();
    const handle = Platform.OS === 'ios' ? 'zIndex' : 'elevation';
    setHandleOS(handle);
  }, []);

  const clearFilter = () => {
    setClinics(remoteClinics);
    setQuery('');
  };

  const selectItem = (item) => {
    const newClinic = remoteClinics.filter(
      (remoClinic) =>
        remoClinic.uf === item.uf && remoClinic.cidade === item.cidade
    );
    setClinics(newClinic);
    setQuery(item.handleCity);

    setChoose(true);
  };

  return (
    <Container style={{ flex: 1 }}>
      <Header navigation={navigation} title={t('Laboratórios')} />

      <ScrollView>
        <View
          style={{ marginVertical: 20, [handleOS]: 1, marginHorizontal: 20 }}
        >
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'start',
              alignItems: 'center',
            }}
          >
            <View>
              <Text
                style={{ fontSize: 15, fontWeight: 'bold', marginBottom: 10 }}
              >
                {`${t('Buscar por Cidade')}:`}
              </Text>
            </View>
            <View />
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {hasFilter && (
              <TouchableOpacity
                style={{
                  padding: 10,
                }}
                onPress={() => clearFilter()}
              >
                <View>
                  <Text style={{ color: '#ff8500', fontWeight: 'bold' }}>
                    {t('Limpar filtro')}
                  </Text>
                </View>
              </TouchableOpacity>
            )}
          </View>
          <View
            style={{ backgroundColor: '#fff', padding: 7, borderRadius: 15 }}
          >
            <Autocomplete
              data={autoHandle}
              autoCorrect={false}
              hideResults={hideResults}
              listContainerStyle={{ borderWidth: 0 }}
              inputContainerStyle={{ borderWidth: 0, elevation: -3 }}
              listStyle={{ borderBottomWidth: 1, borderRadius: 10, top: -5 }}
              defaultValue={query}
              onChangeText={(text) => setQuery(text)}
              renderItem={({ item, i }) => (
                <TouchableOpacity
                  style={{
                    paddingVertical: 15,
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
        {loading && <Loader />}
        {clinics.map((clinic) => (
          <View
            key={clinic.id}
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
            onPress={() => {}}
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
              <View style={{ alignItems: 'center' }}>
                <ButtonPrimary
                  icon=""
                  text={t('Iniciar Exame')}
                  onPress={() => {
                    navigation.navigate('Anamnese', {
                      cliente_id: clinic.id,
                      serviceId,
                    });
                  }}
                >
                  <View
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  />
                </ButtonPrimary>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </Container>
  );
};

export default LaboratoryList;
