import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';

import { SimpleLineIcons } from '@expo/vector-icons';

import Container from '~/components/Container';
import Header from '~/components/Header';
import Loader from '~/components/Loader';
import { listServices } from '~/services/clinics';

const Services = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const [services, setServices] = useState([]);

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
      console.log(servicos);
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
      <Header noBack navigation={navigation} title="Serviços" />
      {loading && <Loader />}
      <ScrollView>
        {services.map((service) => (
          <TouchableOpacity
            key={service.id}
            onPress={() => navigation.navigate('LaboratoryList')}
          >
            <View
              style={{
                flex: 1,
                justifyContent: 'space-between',
                paddingVertical: 15,
                paddingHorizontal: 5,
                flexDirection: 'row',
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
                alignItems: 'center',
              }}
            >
              <View>
                <Text>{service.nome}</Text>
              </View>
              <View>
                <SimpleLineIcons name="arrow-right" size={24} color="black" />
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </Container>
  );
};

export default Services;
