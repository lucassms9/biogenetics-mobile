import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import * as Linking from 'expo-linking';
import { Feather } from '@expo/vector-icons';
import { useTranslation } from 'react-i18next';
import Container from '~/components/Container';
import Header from '~/components/Header';

const Suport = ({ navigation }) => {
  const { t } = useTranslation();
  return (
    <Container style={{ flex: 1 }}>
      <Header navigation={navigation} title={t('SAC')} />

      <View
        style={{
          margin: 10,
          flex: 1,
        }}
      >
        <View
          style={{
            height: 180,
            backgroundColor: '#fff',
            padding: 20,
            borderRadius: 15,
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
          <Text style={{ fontSize: 17, marginBottom: 20, fontWeight: 'bold' }}>
            {t('Entre em contato com nosso suporte por e-mail ou telefone')}
          </Text>
          <TouchableOpacity
            style={{ flexDirection: 'row' }}
            onPress={() => Linking.openURL('tel:+55123456789')}
          >
            <Feather name="phone" size={22} color="black" />
            <Text
              style={{
                fontSize: 17,
                marginLeft: 10,
                marginBottom: 10,
                textDecorationLine: 'underline',
              }}
            >
              {t('Telefone')}: (99) 3333-3333
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ flexDirection: 'row' }}
            onPress={() => Linking.openURL('mailto://sac@imunoscan.com')}
          >
            <Feather name="mail" size={22} color="black" />
            <Text
              style={{
                fontSize: 17,
                marginLeft: 10,
                marginBottom: 10,
                textDecorationLine: 'underline',
              }}
            >
              E-mail: sac@imunoscan.com
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Container>
  );
};

export default Suport;
