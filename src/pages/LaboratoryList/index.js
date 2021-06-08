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

import {
  IconMobile,
  IconLocation,
} from '~/icons'
import ButtonCard from '~/components/ButtonCard';

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

      <View style={{ marginLeft: 27, marginBottom: 50 }}>
        <Text style={{ fontWeight: '700', fontSize: 18, marginTop: 45 }}>{t('Laboratórios')}</Text>
        <Text style={{ fontWeight: '300', marginTop: 18, maxWidth: 220 }}>{t('Aqui você consegue encontrar os laboratórios mais próximos de você.')}</Text>
      </View>

      <View style={{
        height: 400,
        marginHorizontal: 15,
        borderColor: '#ddd',
        shadowColor: Platform.OS === 'ios' ? '#000000' : '#000000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.2,
        elevation: Platform.OS === 'ios' ? null : 3,

      }}>

        <ScrollView >

          {loading && <Loader />}
          {clinics.map((clinic) => (
            <View
              key={clinic.id}
              style={{
                flex: 1,
                flexDirection: 'row',
                height: 115,
                borderBottomWidth: 1,
                borderBottomColor: '#C7C7C7',


              }}
              onPress={() => { }}
            >
              <View style={{ flex: 0.6, paddingLeft: 15 }}>
                <Text style={{ marginTop: 10, fontSize: 16 }}>{clinic.nome}</Text>
                <Text style={{ fontSize: 14, marginTop: 5 }}>{clinic.endereco}</Text>
                <Text style={{ fontSize: 14 }}>{clinic.bairro}</Text>
                <Text style={{ fontSize: 14 }}>{`${clinic.bairro} - ${clinic.cidade} - ${clinic.uf}`}</Text>
                <Text style={{ fontSize: 14 }}>{`${t('TELEFONE')}: ${clinic.responsavel_telefone}`}</Text>
              </View>
              <View style={{ flex: 0.4, backgroundColor: '#F2F2F2', justifyContent: 'center', alignItems: 'center' }}>
                <View style={{}}>
                  <IconLocation />
                </View>
                <Text style={{ marginBottom: 11, fontWeight: '700', marginTop: 5 }}>0.5 Km</Text>
                <View style={{
                  shadowColor: "#000",
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.25,
                  shadowRadius: 3.84,

                  elevation: 5,
                }}>
                  <ButtonCard icon={IconMobile} text={t('LIGAR')} />
                </View>

              </View>

            </View>
          ))}
        </ScrollView>


      </View>

    </Container>
  );
};

export default LaboratoryList;
