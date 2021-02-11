import React, { useState } from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';

import { ScrollView } from 'react-native-gesture-handler';
import { MaterialIcons, FontAwesome5, Feather } from '@expo/vector-icons';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../../contexts/auth';

import Container from '~/components/Container';
import Header from '~/components/Header';
import ModalLanguage from '~/components/ModalLanguage';

const More = ({ navigation }) => {
  const [visible, setVisible] = useState(false);

  const { handleSignOut, user } = useAuth();

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  const { t, i18n } = useTranslation();

  const signOut = () => {
    handleSignOut();
  };

  const selectedLngCode = i18n.language;

  let LANGS = {
    'pt-BR': 'Português',
    en: 'Inglês',
  };

  if (selectedLngCode === 'en') {
    LANGS = {
      'pt-BR': 'Portuguese',
      en: 'English',
    };
  }

  return (
    <Container style={{ flex: 1 }}>
      <Header noBack navigation={navigation} title={t('Mais opções')} />
      <ScrollView>
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
          onPress={() => navigation.navigate('Profile')}
        >
          <View
            style={{ flexDirection: 'row', marginBottom: 10, marginLeft: 10 }}
          >
            <FontAwesome5 name="user-edit" size={24} color="black" />
            <Text style={{ marginLeft: 10, marginTop: 5, fontSize: 17 }}>
              {t('Meus Dados')}
            </Text>
          </View>
        </TouchableOpacity>

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
          onPress={() => navigation.navigate('Suport')}
        >
          <View
            style={{ flexDirection: 'row', marginBottom: 10, marginLeft: 10 }}
          >
            <Feather name="help-circle" size={28} color="black" />
            <Text style={{ marginLeft: 10, marginTop: 5, fontSize: 17 }}>
              {t('Suporte')}
            </Text>
          </View>
        </TouchableOpacity>

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
          onPress={signOut}
        >
          <View
            style={{ flexDirection: 'row', marginBottom: 10, marginLeft: 10 }}
          >
            <MaterialIcons name="logout" size={28} color="black" />
            <Text style={{ marginLeft: 10, marginTop: 5, fontSize: 17 }}>
              {t('Fazer logout')}
            </Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
      <View style={{ position: 'absolute', right: 10, bottom: 10 }}>
        <TouchableOpacity onPress={showModal}>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ fontSize: 18 }}>{LANGS[selectedLngCode]} </Text>
            <Feather name="globe" size={20} color="black" />
          </View>
        </TouchableOpacity>
      </View>
      <ModalLanguage visible={visible} hideModal={hideModal} />
    </Container>
  );
};

export default More;
