import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, FlatList } from 'react-native';

import { SimpleLineIcons } from '@expo/vector-icons';

import { useTranslation } from 'react-i18next';
import Container from '~/components/Container';
import Header from '~/components/Header';
import Loader from '~/components/Loader';
import { listServices } from '~/services/clinics';
import { IconCovid } from '~/icons';

const Services = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const [services, setServices] = useState([]);
  const { t } = useTranslation();

  const getServices = async () => {
    try {
      setLoading(true);
      const {
        data: {
          result: {
            result: { servicos },
          },
        },
      } = await listServices();
      setServices(servicos);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getServices();
  }, []);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getServices();
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <Container style={{ flex: 1 }}>
      <Header noBack navigation={navigation} title={t('Serviços')} />
      {loading && <Loader />}

      <View style={{marginLeft:27, marginBottom:50}}>
        <Text style={{ fontWeight: '700', fontSize: 18, marginTop:45 }}>{t('Exames')}</Text>
        <Text style={{ fontWeight: '300',marginTop:18, maxWidth:220 }}>{t('Como podemos te ajudar hoje? Escolha uma das opções abaixo.')}</Text>
      </View>
      {services.length > 0 && (
        <FlatList
          data={services}
          renderItem={({ item }) => {
            console.log(item)
            return (
              (
                <TouchableOpacity
                  style={{
                    flex: 1,
                    backgroundColor: '#FCFCFC',
                    marginVertical: 20,
                    marginHorizontal: 20,
                    width: 150,
                    height: 150,
                    borderRadius: 40,
                    justifyContent: 'center',
                    alignItems: 'center',

                    shadowOffset: {
                      width: 0,
                      height: 2,
                    },
                    shadowOpacity: 0.2,
                    elevation: Platform.OS === 'ios' ? null : 3,

                  }}
                  key={item.id}
                  onPress={() =>
                    navigation.navigate('LaboratoryList', { serviceId: item.id })
                  }
                >
                  <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                    <IconCovid />
                    <Text style={{ fontSize: 17, marginTop: 22 }}>{item.nome}</Text>
                  </View>

                </TouchableOpacity>
              )
            )
          }}
          //Setting the number of column
          numColumns={2}
          keyExtractor={(item, index) => index}
        />
      )}


    </Container>
  );
};

export default Services;
