import React, { useState } from 'react';
import { View, SafeAreaView, ScrollView } from 'react-native';
import { Text, Button, Modal } from 'react-native-paper';
import Toast from 'react-native-tiny-toast';
import { useTranslation } from 'react-i18next';
import moment from 'moment';
import Header from '~/components/Header';
import Container from '~/components/Container';
import FormUser from '~/components/FormUser';
import Alert from '~/components/Alert';
import ModalWebView from '~/components/ModalWebView';

import { term } from './terms';

import { useAuth } from '~/contexts/auth';

const SignUp = ({ navigation }) => {
  const [status, setStatus] = useState('');
  const [checked, setChecked] = useState(false);
  const [modalVisiable, setModalVisiable] = useState(false);
  const [visibleAlert, setVisibleAlert] = useState(false);
  const [messageAlert, setMessageAlert] = useState('');
  const { t } = useTranslation();
  const { handleSignUp } = useAuth();

  const submitForm = async (values) => {
    try {
      if (!checked) {
        setVisibleAlert(true);
        setMessageAlert(t('Você precisa marcar como lido o termo de uso'));
        return;
      }
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

  const openModel = () => {
    setModalVisiable(true);
  };
  const hideModal = () => {
    setModalVisiable(false);
  };

  return (
    <Container style={{ flex: 1 }}>
      <Header navigation={navigation} title={t('Cadastrar-se')} />

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
            textButton={t('Enviar')}
            initData={{}}
            checked={checked}
            setChecked={setChecked}
            openModel={openModel}
            termShow
          />
        </View>
      </ScrollView>
      <Alert
        visible={visibleAlert}
        hideDialog={() => setVisibleAlert(false)}
        message={messageAlert}
      />

      <ModalWebView
        visible={modalVisiable}
        hideModal={hideModal}
        url="http://biogenetics.test/termo_de_uso.pdf"
      />
    </Container>
  );
};

export default SignUp;
