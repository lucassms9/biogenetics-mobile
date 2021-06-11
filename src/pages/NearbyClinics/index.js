import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Platform } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { useTranslation } from 'react-i18next';
import { CheckBox } from 'react-native-elements';
import * as Location from 'expo-location';

import Container from '~/components/Container';
import ButtonCard from '~/components/ButtonCard';
import TextInput from '~/components/TextInput';
import Header from '~/components/Header';
import Loader from '~/components/Loader';
import NoContent from '~/components/NoContent';
import { list, listAll } from '~/services/clinics';
import { IconMobile, IconLocation, IconSearch } from '~/icons';
import { maskOnlyCEP } from '~/helpers';
import { useAuth } from '~/contexts/auth';

const NearbyClinics = ({ navigation }) => {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [autoHandle, setAutoHandle] = useState([]);
  const [zipCode, setZipCode] = useState('');
  const [choose, setChoose] = useState(false);
  const [hideResults, setHideResults] = useState(false);
  const [hasFilter, setHasFilter] = useState(false);
  const [remoteClinics, setRemoteClinics] = useState([]);
  const [clinics, setClinics] = useState([]);
  const [handleOS, setHandleOS] = useState('');
  const [listAllMode, setListAllMode] = useState(false);
  const { t } = useTranslation();
  const { user } = useAuth();

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

  const getClinics = async () => {
    console.log('getClinics');
    try {
      setLoading(true);
      let location;
      const { status } = await Location.requestPermissionsAsync();
      if (status === 'granted') {
        location = await Location.getCurrentPositionAsync({});
      }

      console.log(listAllMode);
      if (listAllMode) {
        const {
          data: {
            result: {
              result: { clientes },
            },
          },
        } = await listAll(
          zipCode,
          location?.coords?.latitude,
          location?.coords?.longitude
        );

        clientes.sort((a, b) =>
          a.distance < b.distance ? -1 : a.distance > b.distance ? 1 : 0
        );

        setClinics(clientes);
        setRemoteClinics(clientes);
      } else {
        const res = await list(
          zipCode,
          location?.coords?.latitude,
          location?.coords?.longitude
        );
        console.log(res);
        const {
          data: {
            result: {
              result: { clientes },
            },
          },
        } = res;
        setClinics(clientes);
        setRemoteClinics(clientes);
      }
    } catch (error) {
      console.log(error);
      console.log(error.response);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getClinics();
  }, [listAllMode]);

  useEffect(() => {
    setComplete(query);
  }, [query]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getClinics();
    });

    return unsubscribe;
  }, [navigation]);

  useEffect(() => {
    getClinics();
    const handle = Platform.OS === 'ios' ? 'zIndex' : 'elevation';
    setHandleOS(handle);
  }, []);

  const filterBiZipcode = () => {
    console.log('filterBiZipcode');
    getClinics();
  };

  return (
    <Container>
      <Header noBack navigation={navigation} title={t('Início')} />
      <View style={{ marginTop: 50, marginLeft: 27, marginBottom: 30 }}>
        <View>
          <Text style={{ fontWeight: '700', fontSize: 18 }}>
            {`${t('Olá!')} ${user?.nome}`}
          </Text>
        </View>

        <View style={{ marginTop: 16 }}>
          <Text style={{ maxWidth: 215, fontWeight: '300', fontSize: 16 }}>
            {t('Aqui estão os laboratórios mais próximos de você.')}
          </Text>
        </View>
      </View>

      <View style={{ marginBottom: 30 }}>
        <TextInput
          placeholder={t('Buscar por CEP')}
          mode="outlined"
          autoCapitalize="none"
          value={zipCode}
          onChangeText={(text) => setZipCode(maskOnlyCEP(text))}
          rightIcon={
            <TouchableOpacity onPress={filterBiZipcode}>
              <IconSearch />
            </TouchableOpacity>
          }
        />
      </View>

      <View
        style={{
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
        }}
      >
        <ScrollView>
          {loading && <Loader />}
          {clinics.length === 0 && <NoContent type={t('Laboratório')} />}
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
                <Text numberOfLines={1} style={{ marginTop: 10, fontSize: 16 }}>
                  {clinic.nome}
                </Text>
                <Text numberOfLines={1} style={{ fontSize: 14, marginTop: 5 }}>
                  {clinic.endereco}
                </Text>
                <Text numberOfLines={1} style={{ fontSize: 14 }}>
                  {clinic.bairro}
                </Text>
                <Text
                  numberOfLines={1}
                  style={{ fontSize: 14 }}
                >{`${clinic.bairro} - ${clinic.cidade} - ${clinic.uf}`}</Text>
                <Text numberOfLines={1} style={{ fontSize: 14 }}>{`${t(
                  'TELEFONE'
                )}: ${clinic.responsavel_telefone}`}</Text>
              </View>
              <View
                style={{
                  flex: 0.4,
                  backgroundColor: '#F2F2F2',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <View style={{}}>
                  <IconLocation />
                </View>
                <Text
                  style={{ marginBottom: 11, fontWeight: '700', marginTop: 5 }}
                >
                  {clinic.distancia_label}
                </Text>
                <View
                  style={{
                    shadowColor: '#000',
                    shadowOffset: {
                      width: 0,
                      height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,

                    elevation: 5,
                  }}
                >
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

export default NearbyClinics;
