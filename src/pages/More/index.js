import React, { useState } from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';

import { ScrollView } from 'react-native-gesture-handler';
import { MaterialIcons, FontAwesome5, Feather } from '@expo/vector-icons';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../../contexts/auth';

import Container from '~/components/Container';
import Header from '~/components/Header';
import LanguageComponent from '~/language/LanguageComponent';
import { VERSION } from '~/configs/constantes';

import {
  IconMoreTerm,
  IconMoreSignout,
  IconMoreLang,
  IconMoreHelp,
  IconMoreAccount,
} from '~/icons';

const More = ({ navigation }) => {
  const { handleSignOut } = useAuth();

  const { t } = useTranslation();

  const signOut = () => {
    handleSignOut();
  };

  return (
    <Container style={{ flex: 1 }}>
      <Header noBack navigation={navigation} title={t('Menu')} />

      <View style={{ marginLeft: 27, marginBottom: 50 }}>
        <Text style={{ fontWeight: '700', fontSize: 18, marginTop: 45 }}>
          {t('Menu Biogenetics')}
        </Text>
        <Text style={{ fontWeight: '300', marginTop: 18, maxWidth: 220 }}>
          {t('Aqui você poderá editar os seus dados, pessoais idioma e mais')}
        </Text>
      </View>

      <ScrollView style={{ marginHorizontal: 15 }}>
        <TouchableOpacity
          style={{
            borderBottomWidth: 1,
            borderBottomColor: '#D1D1D1',
            marginBottom: 25,
          }}
          onPress={() => navigation.navigate('Profile')}
        >
          <View
            style={{ flexDirection: 'row', marginBottom: 10, marginLeft: 10 }}
          >
            <IconMoreAccount />
            <Text style={{ marginLeft: 37, marginTop: 5, fontSize: 15 }}>
              {t('DADOS DO USUÁRIO')}
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            borderBottomWidth: 1,
            borderBottomColor: '#D1D1D1',
            marginBottom: 25,
          }}
          onPress={() => navigation.navigate('TermUse')}
        >
          <View
            style={{ flexDirection: 'row', marginBottom: 10, marginLeft: 10 }}
          >
            <IconMoreTerm />
            <Text style={{ marginLeft: 37, marginTop: 5, fontSize: 15 }}>
              {t('TERMOS DE USO')}
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            borderBottomWidth: 1,
            borderBottomColor: '#D1D1D1',
            marginBottom: 25,
          }}
          onPress={() => { }}
        >
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              marginBottom: 10,
              marginLeft: 10,
            }}
          >
            <IconMoreLang />
            <Text style={{ marginLeft: 37, marginTop: 5, fontSize: 15 }}>
              {t('IDIOMAS')}
            </Text>
            <View style={{ flex: 1, alignItems: 'flex-end' }}>
              <LanguageComponent />
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            borderBottomWidth: 1,
            borderBottomColor: '#D1D1D1',
            marginBottom: 25,
          }}
          onPress={() => navigation.navigate('Suport')}
        >
          <View
            style={{ flexDirection: 'row', marginBottom: 10, marginLeft: 10 }}
          >
            <IconMoreHelp />
            <Text style={{ marginLeft: 37, marginTop: 5, fontSize: 15 }}>
              {t('CONTATO')}
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            borderBottomWidth: 1,
            borderBottomColor: '#D1D1D1',
            marginBottom: 25,
          }}
          onPress={signOut}
        >
          <View
            style={{ flexDirection: 'row', marginBottom: 10, marginLeft: 10 }}
          >
            <IconMoreSignout />
            <Text style={{ marginLeft: 37, marginTop: 5, fontSize: 15 }}>
              {t('SAIR')}
            </Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
      <View
        style={{ justifyContent: 'center', alignItems: 'center', top: -20 }}
      >
        <Text style={{ color: '#113CF3' }}>{VERSION}</Text>
      </View>
    </Container>
  );
};

export default More;
