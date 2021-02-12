import React, { useState } from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
} from 'react-native';
import { TextInput, HelperText } from 'react-native-paper';
import { useTranslation } from 'react-i18next';
import { Feather } from '@expo/vector-icons';

import logoBio from '@assets/biogenetics-logo.png';

import { useAuth } from '~/contexts/auth';

import Container from '~/components/Container';
import ButtonPrimary from '~/components/ButtonPrimary';
import Alert from '~/components/Alert';
import ModalLanguage from '~/components/ModalLanguage';

const SignIn = ({ navigation }) => {
  const [visibleAlert, setVisibleAlert] = useState(false);
  const [messageAlert, setMessageAlert] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [erros, setErros] = useState({});
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);

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
    if (Object.keys(errosHandle).length > 0) {
      return false;
    }
    return true;
  };

  const signSubIn = async () => {
    try {
      setLoading(true);
      const valid = hasErrors();

      if (valid) {
        await handleSignIn(email, password);
      }
    } catch (error) {
      setMessageAlert(error.response.data.result.message);
      setVisibleAlert(true);
    } finally {
      setLoading(false);
    }
  };

  const showModal = () => {
    Keyboard.dismiss();
    setVisible(true);
  };
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
        <View>
          <Text
            style={{
              color: '#0F6FA7',
              fontSize: 17,
              justifyContent: 'flex-end',
              fontWeight: '500',
              alignItems: 'flex-end',

              right: -65,
            }}
          >
            {t('D I A G N Ó S T I C O S')}
          </Text>
        </View>
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
          loading={loading}
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
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-end',
            alignSelf: 'flex-end',
            marginBottom: 10,
          }}
        >
          <TouchableOpacity onPress={showModal}>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ fontSize: 18 }}>{LANGS[selectedLngCode]} </Text>
              <Feather
                style={{ marginTop: Platform.OS === 'ios' ? 0 : 3 }}
                name="globe"
                size={20}
                color="black"
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <Alert
        visible={visibleAlert}
        hideDialog={() => setVisibleAlert(false)}
        message={messageAlert}
      />
      <ModalLanguage visible={visible} hideModal={hideModal} />
    </Container>
  );
};

export default SignIn;
