import React, { useState } from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  Platform,
  Keyboard,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import { Feather } from '@expo/vector-icons';

import logoBio from '@assets/biogenetics-logo.png';

import { useAuth } from '~/contexts/auth';

import Container from '~/components/Container';
import TextInput from '~/components/TextInput';
import ButtonGradient from '~/components/ButtonGradient';
import CheckBox from '~/components/CheckBox';
import Alert from '~/components/Alert';
import LanguageComponent from '~/language/LanguageComponent';

const SignIn = ({ navigation }) => {
  const [visibleAlert, setVisibleAlert] = useState(false);
  const [messageAlert, setMessageAlert] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [erros, setErros] = useState({});
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isSucure, setIsSucure] = useState(true);
  const [checked, setChecked] = useState(false);

  const { handleSignIn } = useAuth();
  const { t, i18n } = useTranslation();
  const selectedLngCode = i18n.language;

  const LANGS = {
    'pt-BR': t('Português'),
    en: t('Inglês'),
    es: t('Espanhol'),
  };

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
      console.log(error);
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
          style={{ width: '85%', height: 70, top: 20 }}
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
              right: -50,
            }}
          >
            {t('D I A G N Ó S T I C O S')}
          </Text>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          marginHorizontal: 20,
        }}
      >
        <TextInput
          placeholder={t('signin:inputEmail')}
          mode="outlined"
          autoCapitalize="none"
          keyboardType="email-address"
          value={email}
          errorMessage={erros.email}
          onChangeText={(text) => setEmail(text)}
        />

        <TextInput
          mode="outlined"
          style={{ borderWidth: 0 }}
          placeholder={t('signin:inputPassword')}
          autoCapitalize="none"
          secureTextEntry={isSucure}
          value={password}
          errorMessage={erros.password}
          onChangeText={(text) => setPassword(text)}

          rightIcon={
            <TouchableOpacity onPress={() => setIsSucure(!isSucure)}>
              <Feather
                style={{ marginTop: Platform.OS === 'ios' ? 0 : 3 }}
                name="eye"
                size={20}
                color="black"
              />
            </TouchableOpacity>
          }
        />

        <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
          <CheckBox checked={checked} onPress={() => setChecked(!checked)} />
          <Text style={{ color: '#0E2777', fontSize: 15 }}>
            {t('Salvar dados para login')}
          </Text>
        </View>

        <View style={{ marginHorizontal: 20 }}>
          <ButtonGradient
            style={{ marginTop: 20 }}
            text={t('signin:buttonLogin')}
            onPress={signSubIn}
            loading={loading}
          />
        </View>

        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
          }}
        >
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text style={{ fontSize: 13, color: '#0E2777', fontWeight: 'bold' }}>
              {t('signin:createAccount2')}
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
            <Text style={{ fontSize: 15, color: '#0E2777' }}>
              {t('signin:recoverPassword')}
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{ marginTop: 15 }}>
          <LanguageComponent />
        </View>
      </View>

      <Alert
        visible={visibleAlert}
        hideDialog={() => setVisibleAlert(false)}
        message={messageAlert}
      />
    </Container>
  );
};

export default SignIn;
