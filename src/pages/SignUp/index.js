import React, { useState } from 'react';
import { View, SafeAreaView, ScrollView } from 'react-native';
import { TextInput, Button, HelperText } from 'react-native-paper';
import Toast from 'react-native-tiny-toast';
import { useTranslation } from 'react-i18next';
import moment from 'moment';
import Header from '~/components/Header';
import Container from '~/components/Container';
import FormUser from '~/components/FormUser';
import Alert from '~/components/Alert';

import { useAuth } from '~/contexts/auth';

const SignUp = ({ navigation }) => {
  const [status, setStatus] = useState('');
  const [visibleAlert, setVisibleAlert] = useState(false);
  const [messageAlert, setMessageAlert] = useState('');
  const { t } = useTranslation();
  const { handleSignUp } = useAuth();

  const submitForm = async (values) => {
    try {
      setStatus('loading');
      const body = {
        ...values,
        celular: values.phone.replace(/[^\d]/g, ''),
        telefone: values.phone.replace(/[^\d]/g, ''),
        cpf: values.cpf.replace(/[^\d]/g, ''),
        rg: values.rg.replace(/[^\d]/g, ''),
        data_nascimento: moment(values.data_nascimento, 'DD-MM-YYYY').format(
          'YYYY-MM-DD'
        ),
        nome: values.name,
      };
      const res = await handleSignUp(body);
      Toast.showSuccess(t('Cadastro realizado com sucesso!'));
    } catch (error) {
      setVisibleAlert(true);
      setMessageAlert(error?.response?.data?.result?.message);
    } finally {
      setStatus('');
    }
  };
  return (
    <Container style={{ flex: 1 }}>
      <Header navigation={navigation} title="Cadastrar-se" />

      <ScrollView>
        <View
          style={{
            marginHorizontal: 20,
            flex: 1,
            justifyContent: 'flex-start',
          }}
        >
          <FormUser
            submitForm={submitForm}
            status={status}
            textButton="Enviar"
            initData={{}}
          />
        </View>
      </ScrollView>
      <Alert
        visible={visibleAlert}
        hideDialog={() => setVisibleAlert(false)}
        message={messageAlert}
      />
    </Container>
  );
};

export default SignUp;
