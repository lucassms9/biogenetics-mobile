import React, { useState } from 'react';
import { View, Image } from 'react-native';

import { TextInput, HelperText } from 'react-native-paper';
import logoBio from '@assets/biogenetics-logo.png';
import { useTranslation } from 'react-i18next';
import Header from '~/components/Header';
import Container from '~/components/Container';
import ButtonPrimary from '~/components/ButtonPrimary';
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
        style={{ flex: 0.4, justifyContent: 'center', alignItems: 'center' }}
      >
        <Image
          resizeMode="contain"
          style={{ width: '85%', height: 95, top: 20 }}
          source={logoBio}
        />
      </View>

      <View
        style={{
          marginHorizontal: 20,
          flex: 0.6,
          justifyContent: 'flex-start',
        }}
      >
        <TextInput
          label={t('Email')}
          mode="outlined"
          autoCapitalize="none"
          keyboardType="email-address"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <HelperText type="error" visible={!!erros.email}>
          {erros.email}
        </HelperText>

        <ButtonPrimary
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
