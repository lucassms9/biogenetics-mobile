import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { TextInput, Modal, HelperText } from 'react-native-paper';
import { useTranslation } from 'react-i18next';
import { Feather } from '@expo/vector-icons';

import logoBio from '@assets/biogenetics-logo.png';

import { useAuth } from '~/contexts/auth';

import Container from '~/components/Container';
import ButtonPrimary from '~/components/ButtonPrimary';
import ModalLanguage from '~/components/ModalLanguage';

const SignIn = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [erros, setErros] = useState({});
  const [visible, setVisible] = useState(false);

  const { handleSignIn } = useAuth();
  const { t, i18n } = useTranslation();
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

  const hasErrors = () => {
    const errosHandle = {};

    if (!email) {
      errosHandle.email = t('fieldRequired');
    }

    if (!password) {
      errosHandle.password = t('fieldRequired');
    }
    setErros(errosHandle);
    return errosHandle;
  };

  const signSubIn = () => {
    // handleSignIn();
    hasErrors();
  };

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  return (
    <Container>
      <View
        style={{
          flex: 0.4,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Image
          resizeMode="contain"
          style={{ width: '85%', height: 95, top: 20 }}
          source={logoBio}
        />
      </View>
      <View
        style={{
          flex: 0.6,
          marginHorizontal: 20,
        }}
      >
        <TextInput
          label={t('signin:inputEmail')}
          mode="outlined"
          autoCapitalize="none"
          keyboardType="email-address"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <HelperText type="error" visible={!!erros.email}>
          {erros.email}
        </HelperText>
        <TextInput
          mode="outlined"
          label={t('signin:inputPassword')}
          autoCapitalize="none"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <HelperText type="error" visible={!!erros.password}>
          {erros.password}
        </HelperText>

        <ButtonPrimary
          style={{ marginTop: 20 }}
          text={t('signin:buttonLogin')}
          onPress={signSubIn}
        />

        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
          }}
        >
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text style={{ fontSize: 15 }}>
              {t('signin:createAccount')}{' '}
              <Text style={{ fontWeight: 'bold' }}>
                {t('signin:createAccount2')}
              </Text>
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
          }}
        >
          <TouchableOpacity onPress={() => navigation.navigate('Recover')}>
            <Text style={{ fontSize: 15, textDecorationLine: 'underline' }}>
              {t('signin:recoverPassword')}
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{ position: 'absolute', right: 0, bottom: 10 }}>
          <TouchableOpacity onPress={showModal}>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ fontSize: 18 }}>{LANGS[selectedLngCode]} </Text>
              <Feather name="globe" size={20} color="black" />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <ModalLanguage visible={visible} hideModal={hideModal} />
    </Container>
  );
};

export default SignIn;
