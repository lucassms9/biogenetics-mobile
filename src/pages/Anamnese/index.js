import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import moment from 'moment';
import Toast from 'react-native-tiny-toast';

import { useTranslation } from 'react-i18next';

import { ScrollView } from 'react-native-gesture-handler';
import Container from '~/components/Container';
import Header from '~/components/Header';
import Alert from '~/components/Alert';

import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';

import ButtonPrimary from '~/components/ButtonPrimary';
import { getStateById, getCityById } from '~/services/ibge';
import { createAnamnese } from '~/services/clinics';

const Anamnese = ({ navigation, route }) => {
  const [messageAlert, setMessageAlert] = useState('');
  const [visibleAlert, setVisibleAlert] = useState(false);
  const [step, setStep] = useState(1);
  const [textButton, setTextButton] = useState('PRÓXIMO');
  const [data, setData] = useState({});
  const [status, setStatus] = useState('');

  const { t } = useTranslation();

  const setChecked = (name) => {
    const handleName = data[name] || false;
    setData({ ...data, [name]: !handleName });
  };

  const setInput = (name, value) => {
    setData({ ...data, [name]: value });
  };
  const handleSubmit = async () => {
    // console.log('handleSubmit');
    // console.log(data);
    try {
      setStatus('loading');
      let dataBody = {};

      if (data.viagem_brasil_estado) {
        const { data: resState } = await getStateById(
          data.viagem_brasil_estado
        );
        const { data: resCity } = await getCityById(data.viagem_brasil_cidade);

        let handleHistorico = '';
        let handleHistoricoOption = '';

        if (data.viagem_brasil || data.viagem_exterior) {
          handleHistoricoOption = 'SIM';
          if (data.viagem_brasil) {
            handleHistorico += `Brasil: ${resState.nome} - ${resCity.nome}`;
          }

          if (data.viagem_exterior) {
            handleHistorico += ` Exterior: ${data.viagem_exteriorobs_pais}`;
          }
        } else {
          handleHistoricoOption = 'NÃO';
        }
        dataBody = {
          ...data,
          viagem_brasil_cidade: resCity.nome,
          viagem_brasil_estado: resState.nome,

          paciente_his_deslocamento_14_dias: handleHistorico,
          paciente_historico_viagem_14_dias: handleHistoricoOption,
        };
      }

      const handleDate = moment()
        .subtract(data.data_primeiros_sintomas, 'days')
        .format('YYYY-MM-DD');
      dataBody = {
        ...data,
        data_primeiros_sintomas: handleDate,
        cliente_id: route.params.cliente_id, // todo - set o cliente de forma auto
      };

      const res = await createAnamnese(dataBody);
      Toast.showSuccess(t('Dados enviados com sucesso'));
      navigation.navigate('Main', { screen: 'MyExams' });
    } catch (error) {
      console.log(error);
      setMessageAlert(error.response.data.result.message);
      setVisibleAlert(true);
    } finally {
      setStatus('');
    }
  };

  const nextStep = () => {
    if (step === 1) {
      if (data.sintoma_outros && !data.sintoma_outros_observacao) {
        setMessageAlert('Preencher o campo OUTROS em sintomas');
        setVisibleAlert(true);
        return;
      }
    }
    if (step === 2) {
      if (data.clinico_outros && !data.clinico_outros_observacao) {
        setMessageAlert('Preencher o campo OUTROS em sinais clínicos');
        setVisibleAlert(true);
        return;
      }
    }

    if (step >= 3) {
      if (data.viagem_brasil && !data.viagem_brasil_estado) {
        setMessageAlert('Escolha o estado para continuar');
        setVisibleAlert(true);
        return;
      }

      if (
        data.viagem_brasil &&
        data.viagem_brasil_estado &&
        !data.viagem_brasil_cidade
      ) {
        setMessageAlert('Escolha a cidade para continuar');
        setVisibleAlert(true);
        return;
      }

      if (data.viagem_exterior && !data.viagem_exteriorobs_pais) {
        setMessageAlert('Preencher o campo país para continuar');
        setVisibleAlert(true);
        return;
      }

      if (!data.paciente_contato_pessoa_com_suspeita_covid) {
        setMessageAlert(
          'Escolha ao menos uma opção sobre a suspeita de covid do paciente '
        );
        setVisibleAlert(true);
        return;
      }

      if (
        data.paciente_contato_pessoa_com_suspeita_covid === 'SIM' &&
        !data.paciente_contato_pessoa_com_suspeita_covid_local
      ) {
        setMessageAlert(
          'Escolha ao menos uma opção sobre o local de suspeita de covid do paciente '
        );
        setVisibleAlert(true);
        return;
      }

      if (
        data.paciente_contato_pessoa_com_suspeita_covid_local === 'OUTRO' &&
        !data.paciente_contato_pessoa_com_suspeita_covid_local_desc
      ) {
        setMessageAlert(
          'Preencher o campo Especificação de OUTROS para continuar'
        );
        setVisibleAlert(true);
        return;
      }
      if (
        data.paciente_contato_pessoa_com_confirmado_covid === 'SIM' &&
        !data.paciente_contato_pessoa_com_confirmado_covid_caso_fonte
      ) {
        setMessageAlert('Preencher o campo Caso Fonte');
        setVisibleAlert(true);
        return;
      }
      console.log('aqui4');
      if (
        data.paciente_unidade_saude_14_dias === 'SIM' &&
        !data.paciente_unidade_saude_14_dias_local
      ) {
        setMessageAlert(
          'Preencher o campo Nome, Endereço e Contato para continuar'
        );
        setVisibleAlert(true);
        return;
      }

      return handleSubmit();
    }

    setStep(step + 1);
  };
  const backStep = () => {
    setStep(step - 1);
  };

  useEffect(() => {
    if (step >= 3) {
      setTextButton('FINALIZAR');
    } else {
      setTextButton('PRÓXIMO');
    }
  }, [step]);

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <StepOne data={data} setInput={setInput} setChecked={setChecked} />
        );

      case 2:
        return (
          <StepTwo data={data} setInput={setInput} setChecked={setChecked} />
        );
      default:
        return (
          <StepThree data={data} setInput={setInput} setChecked={setChecked} />
        );
    }
  };
  return (
    <Container style={{ flex: 1 }}>
      <Header navigation={navigation} title="Informações Clínicas" />
      <ScrollView>
        <View style={{ marginHorizontal: 15 }}>
          <View style={{ marginTop: 20 }}>
            {renderStep()}

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginVertical: 15,
              }}
            >
              <View>
                {step > 1 && (
                  <ButtonPrimary
                    loading={status === 'loading'}
                    onPress={backStep}
                    text="VOLTAR"
                  />
                )}
              </View>
              <View>
                <ButtonPrimary
                  loading={status === 'loading'}
                  onPress={nextStep}
                  text={textButton}
                />
              </View>
            </View>
          </View>
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

export default Anamnese;
