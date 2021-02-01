import React, { useEffect, useState } from 'react';
import { View, ScrollView } from 'react-native';
import moment from 'moment';
import Toast from 'react-native-tiny-toast';
import { Text, Modal } from 'react-native-paper';
import { useTranslation } from 'react-i18next';
import FormUser from '~/components/FormUser';

import Container from '~/components/Container';
import Header from '~/components/Header';
import Alert from '~/components/Alert';
import Loader from '~/components/Loader';

import { getProfile, edit } from '~/services/auth';
import { maskOnlyCPF, maskOnlyPhone, maskOnlyCEP } from '~/helpers';
import { term } from '~/pages/SignUp/terms';

const Profile = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const [dataProfile, setDataProfile] = useState({});
  const [status, setStatus] = useState('');
  const [visibleAlert, setVisibleAlert] = useState(false);
  const [messageAlert, setMessageAlert] = useState('');
  const [modalVisiable, setModalVisiable] = useState(false);

  const { t } = useTranslation();

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
      const res = await edit(body);
      Toast.showSuccess(t('Dados atualizados com sucesso!'));
    } catch (error) {
      setVisibleAlert(true);
      setMessageAlert(error?.response?.data?.result?.message);
    } finally {
      setStatus('');
    }
  };

  const getData = async () => {
    try {
      setLoading(true);
      const {
        data: {
          result: {
            result: { paciente },
          },
        },
      } = await getProfile();
      const handlePaciente = {
        ...paciente,
        name: paciente.nome,
        cpf: maskOnlyCPF(paciente.cpf),
        data_nascimento: moment(paciente.data_nascimento).format('DD/MM/YYYY'),
        phone: maskOnlyPhone(paciente.celular),
        cep: maskOnlyCEP(paciente.cep),
      };

      setDataProfile(handlePaciente);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const openModel = () => {
    setModalVisiable(true);
  };
  const hideModal = () => {
    setModalVisiable(false);
  };

  return (
    <Container style={{ flex: 1 }}>
      <Header navigation={navigation} title="Meus Dados" />
      <ScrollView>
        <View
          style={{
            marginHorizontal: 20,
            flex: 1,
            justifyContent: 'flex-start',
          }}
        >
          {loading && <Loader />}
          {!loading && (
            <FormUser
              submitForm={submitForm}
              status={status}
              textButton="Enviar"
              initData={dataProfile}
              openModel={openModel}
            />
          )}
        </View>
      </ScrollView>
      <Alert
        visible={visibleAlert}
        hideDialog={() => setVisibleAlert(false)}
        message={messageAlert}
      />
      <Modal
        visible={modalVisiable}
        onDismiss={hideModal}
        contentContainerStyle={{ backgroundColor: 'white', padding: 20 }}
      >
        <ScrollView>
          <Text>{term}</Text>
        </ScrollView>
      </Modal>
    </Container>
  );
};

export default Profile;
