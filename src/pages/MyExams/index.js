import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';

import Container from '~/components/Container';
import Header from '~/components/Header';
import Divider from '~/components/Divider';

const MyExams = ({ navigation }) => {
  const [visibleAlert, setVisibleAlert] = useState(false);
  const [exams, setExams] = useState([
    {
      id: 1,
      status: 'Em Atendimento',
      codigo: '652738183',
      amostra_tipo: 'Saliva',
      resultado: 'Positivo',
    },
    {
      id: 2,
      status: 'Em Atendimento',
      codigo: '652738183',
      amostra_tipo: 'Saliva',
      resultado: 'Positivo',
    },
  ]);

  return (
    <Container style={{ flex: 1 }}>
      <Header noBack navigation={navigation} title="Meus Laudos" />

      <ScrollView>
        {exams.map((exam) => (
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
            onPress={() => navigation.navigate('MyExamDetail')}
          >
            <View>
              <View style={{ marginBottom: 10 }}>
                <Text
                  style={{ fontSize: 20, fontWeight: 'bold', color: '#ff8500' }}
                >
                  {`Pedido ${exam.codigo}`}
                </Text>
              </View>
              <View style={{ marginBottom: 10 }}>
                <Text style={{ fontSize: 15 }}>{`Status: ${exam.status}`}</Text>
                <Text
                  style={{ fontSize: 15 }}
                >{`Tipo de amostra: ${exam.amostra_tipo}`}</Text>
                <Text
                  style={{ fontSize: 15 }}
                >{`Resultado: ${exam.resultado}`}</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </Container>
  );
};

export default MyExams;
