import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import * as Linking from 'expo-linking';
import Container from '~/components/Container';
import Header from '~/components/Header';

const Suport = ({ navigation }) => (
  <Container style={{ flex: 1 }}>
    <Header navigation={navigation} title="SAC" />

    <View
      style={{
        margin: 20,
        flex: 1,
      }}
    >
      <Text style={{ fontSize: 16, marginBottom: 10 }}>
        Entre em contato com nosso suporte por e-mail ou telefone.
      </Text>
      <TouchableOpacity onPress={() => Linking.openURL('tel:+55123456789')}>
        <Text
          style={{
            fontSize: 16,
            marginBottom: 10,
            textDecorationLine: 'underline',
          }}
        >
          Telefone: (99) 3333-3333
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => Linking.openURL('mailto://bio@bio.io')}>
        <Text
          style={{
            fontSize: 16,
            marginBottom: 10,
            textDecorationLine: 'underline',
          }}
        >
          E-mail: bio@bio.com.br
        </Text>
      </TouchableOpacity>
    </View>
  </Container>
);

export default Suport;
