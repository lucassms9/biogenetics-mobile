import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import * as WebBrowser from 'expo-web-browser';

import Container from '~/components/Container';
import Header from '~/components/Header';
import Loader from '~/components/Loader';
import { list } from '~/services/exams';

const MyExams = ({ navigation }) => {
  const [visibleAlert, setVisibleAlert] = useState(false);
  const [loading, setLoading] = useState(false);
  const [exams, setExams] = useState([]);
  const [result, setResult] = useState(null);

  const getExams = async () => {
    try {
      setLoading(true);
      const {
        data: {
          result: {
            result: { pedidos },
          },
        },
      } = await list();
      setExams(pedidos);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getExams();
  }, []);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getExams();
    });

    return unsubscribe;
  }, [navigation]);

  const openLaudo = async (id) => {
    console.log(id);
    const result = await WebBrowser.openBrowserAsync(
      'http://biogenetics.com/admin/pedidos/laudo-viwer/36'
    );
    console.log(result);
    setResult(result);
  };

  return (
    <Container style={{ flex: 1 }}>
      <Header noBack navigation={navigation} title="Meus Laudos" />
      {loading && <Loader />}
      <ScrollView>
        {exams.map((exam) => (
          <View
            key={exam.id}
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
          >
            <View>
              <View style={{ marginBottom: 10 }}>
                <Text
                  style={{ fontSize: 20, fontWeight: 'bold', color: '#ff8500' }}
                >
                  {`Pedido ${exam.codigo}`}
                </Text>
              </View>
              <View
                style={{
                  marginBottom: 10,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}
              >
                <View>
                  <Text
                    style={{ fontSize: 15 }}
                  >{`Status: ${exam.status}`}</Text>
                  <Text
                    style={{ fontSize: 15 }}
                  >{`Tipo de amostra: ${exam.amostra_tipo}`}</Text>
                  <Text
                    style={{ fontSize: 15 }}
                  >{`Resultado: ${exam.resultado}`}</Text>
                </View>

                <TouchableOpacity
                  style={{
                    justifyContent: 'flex-end',
                    alignSelf: 'flex-end',
                  }}
                  onPress={() => openLaudo(exam.id)}
                >
                  <View>
                    <Text>Ver Laudo</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </Container>
  );
};

export default MyExams;
