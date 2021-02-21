import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { useTranslation } from 'react-i18next';
import { Feather } from '@expo/vector-icons';
import Container from '~/components/Container';
import Header from '~/components/Header';
import Loader from '~/components/Loader';
import ButtonPrimary from '~/components/ButtonPrimary';

import { list } from '~/services/clinics';

const LaboratoryList = ({ navigation, route }) => {
  const [loading, setLoading] = useState(false);
  const [clinics, setClinics] = useState([]);
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
      } = await list();
      setClinics(clientes);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getClinics();
    });

    return unsubscribe;
  }, [navigation]);

  useEffect(() => {
    getClinics();
  }, []);

  return (
    <Container style={{ flex: 1 }}>
      <Header navigation={navigation} title={t('Laboratórios')} />

      <ScrollView>
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
