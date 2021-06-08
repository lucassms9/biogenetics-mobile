import React, { useState } from 'react';
import { View, Text } from 'react-native';

import logoBio from '@assets/biogenetics-logo.png';
import { useTranslation } from 'react-i18next';
import Header from '~/components/Header';
import Container from '~/components/Container';
import ButtonGradient from '~/components/ButtonGradient';
import TextInput from '~/components/TextInput';
import Alert from '~/components/Alert';
import { useAuth } from '~/contexts/auth';

const Recover = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [erros, setErros] = useState({});
  const [loading, setLoading] = useState(false);
  const [visibleAlert, setVisibleAlert] = useState(false);
  const [messageAlert, setMessageAlert] = useState('');

  const { t } = useTranslation();
  const { handleRecover } = useAuth();

  const hasErrors = () => {
    const errosHandle = {};

    if (!email) {
      errosHandle.email = t('fieldRequired');
    }

    setErros(errosHandle);
    if (Object.keys(errosHandle).length > 0) {
      return false;
    }
    return true;
  };

  const recoverSub = async () => {
    try {
      setLoading(true);
      const valid = hasErrors();

      if (valid) {
        const res = await handleRecover(email);
        setMessageAlert(res.message);
        setVisibleAlert(true);
        setEmail('');
      }
    } catch (error) {
      setMessageAlert(error.response.data.result.message);
      setVisibleAlert(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container style={{ flex: 1 }}>
      <Header navigation={navigation} title={t('Esqueci minha senha')} />
      <View
        style={{ flex: 0.3, justifyContent: 'center', marginLeft:25 }}
      >
        <Text style={{ fontWeight: '700', fontSize: 18, color:'#1C2D53' }}>Recuperar senha</Text>
        <Text style={{marginTop:19, maxWidth:290, }}>Insira o seu endereço de e-mail cadastrado,
          que lhe enviaremos uma senha
          de acesso provisório.</Text>
      </View>

      <View
        style={{
          marginHorizontal: 20,

          justifyContent: 'flex-start',
        }}
      >
        <TextInput
          placeholder={t('Email')}
          mode="outlined"
          autoCapitalize="none"
          keyboardType="email-address"
          value={email}
          onChangeText={(text) => setEmail(text)}
          errorMessage={erros.email}
        />

        <ButtonGradient
          style={{ marginTop: 20 }}
          text={t('Recuperar Senha')}
          onPress={recoverSub}
          loading={loading}
        />
      </View>
      <Alert
        visible={visibleAlert}
        hideDialog={() => setVisibleAlert(false)}
        message={messageAlert}
      />
    </Container>
  );
};

export default Recover;
