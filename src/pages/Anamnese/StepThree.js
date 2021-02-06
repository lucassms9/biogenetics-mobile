import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';
import { TextInput, HelperText } from 'react-native-paper';
import RNPickerSelect from 'react-native-picker-select';
import { Ionicons } from '@expo/vector-icons';
import CheckBox from '~/components/CheckBox';

import {} from '~/services/ibge';
import { getStates, getCity } from '~/services/geoName';

const StepThree = ({ data, setChecked, setInput }) => {
  const { t } = useTranslation();
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [citiesUnidades, setCitiesUnidades] = useState([]);

  const handleStates = async () => {
    const { data } = await getStates();

    const stateRes = data.map((state) => ({
      value: state.id,
      label: state.nome,
    }));
    setStates(stateRes);
  };
  const handleCities = async (state) => {
    const { data } = await getCity(state);
    const citiesRes = data.map((city) => ({
      value: city.id,
      label: city.nome,
    }));
    setCities(citiesRes);
  };
  const handleCitiesUnidades = async (state) => {
    const { data } = await getCity(state);
    const citiesRes = data.map((city) => ({
      value: city.id,
      label: city.nome,
    }));
    setCitiesUnidades(citiesRes);
  };

  useEffect(() => {
    handleStates();
  }, []);

  useEffect(() => {
    handleCities(data.viagem_brasil_estado);
  }, [data.viagem_brasil_estado]);

  useEffect(() => {
    handleCitiesUnidades(data.paciente_unidade_saude_14_dias_local_estado);
  }, [data.paciente_unidade_saude_14_dias_local_estado]);

  return (
    <View>
      <Text style={{ marginBottom: 10 }}>
        PACIENTE TEM HISTÓRICO DE VIAGEM ATÉ 14 DIAS ANTES DO INÍCIO DOS
        SINTOMAS?
      </Text>
      <View
        style={{ flexDirection: 'row', flexWrap: 'wrap', marginBottom: 10 }}
      >
        <CheckBox
          title={t('Brasil')}
          checked={data.viagem_brasil}
          onPress={() => setChecked('viagem_brasil')}
        />
        {data.viagem_brasil && (
          <View style={{ flexDirection: 'row', marginLeft: 15 }}>
            <RNPickerSelect
              onValueChange={(text) => setInput('viagem_brasil_estado', text)}
              value={data.viagem_brasil_estado}
              items={states}
              placeholder={{
                label: 'Estado',
                value: '',
                color: 'black',
              }}
              style={{
                ...pickerSelectStyles,
                iconContainer: {
                  top: 15,
                  right: 10,
                },
              }}
              useNativeAndroidPickerStyle={false}
              // textInputProps={{ underlineColor: 'yellow' }}
              Icon={() => (
                <Ionicons name="md-arrow-down" size={24} color="gray" />
              )}
            />

            <RNPickerSelect
              onSubmitEditing={() => {}}
              onValueChange={(text) => setInput('viagem_brasil_cidade', text)}
              value={data.viagem_brasil_cidade}
              items={cities}
              placeholder={{
                label: 'Cidade',
                value: '',
                color: 'black',
              }}
              style={{
                ...pickerSelectStyles,
                iconContainer: {
                  top: 15,
                  right: 10,
                },
              }}
              useNativeAndroidPickerStyle={false}
              // textInputProps={{ underlineColor: 'yellow' }}
              Icon={() => (
                <Ionicons name="md-arrow-down" size={24} color="gray" />
              )}
            />
          </View>
        )}
      </View>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
        <CheckBox
          title="Exterior"
          checked={data.viagem_exterior}
          onPress={() => setChecked('viagem_exterior')}
        />
        {data.viagem_exterior && (
          <TextInput
            label={t('Qual País')}
            style={{ width: 200 }}
            mode="outlined"
            autoCapitalize="none"
            error=""
            onChangeText={(text) => setInput('viagem_exteriorobs_pais', text)}
            value={data.viagem_exteriorobs_pais}
          />
        )}
      </View>

      <Text style={{ marginTop: 10 }}>
        O PACIENTE TEVE CONTATO PRÓXIMO COM UMA PESSOA QUE SEJA CASO SUSPEITO DE
        NOVO CORONAVÍRUS (COVID-19)?
      </Text>
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
        }}
      >
        <CheckBox
          title={t('NÃO')}
          checked={data.paciente_contato_pessoa_com_suspeita_covid === 'NÃO'}
          onPress={() =>
            setInput('paciente_contato_pessoa_com_suspeita_covid', 'NÃO')
          }
        />
        <CheckBox
          title={t('NÃO SABE')}
          checked={
            data.paciente_contato_pessoa_com_suspeita_covid === 'NÃO SABE'
          }
          onPress={() =>
            setInput('paciente_contato_pessoa_com_suspeita_covid', 'NÃO SABE')
          }
        />
        <CheckBox
          title={t('SIM')}
          checked={data.paciente_contato_pessoa_com_suspeita_covid === 'SIM'}
          onPress={() =>
            setInput('paciente_contato_pessoa_com_suspeita_covid', 'SIM')
          }
        />
        {data.paciente_contato_pessoa_com_suspeita_covid === 'SIM' && (
          <View>
            <CheckBox
              title={t('UNIDADE DE SAÚDE')}
              checked={
                data.paciente_contato_pessoa_com_suspeita_covid_local ===
                'UNIDADE DE SAÚDE'
              }
              onPress={() =>
                setInput(
                  'paciente_contato_pessoa_com_suspeita_covid_local',
                  'UNIDADE DE SAÚDE'
                )
              }
            />
            <CheckBox
              title={t('DOMICÍLIO')}
              checked={
                data.paciente_contato_pessoa_com_suspeita_covid_local ===
                'DOMICÍLIO'
              }
              onPress={() =>
                setInput(
                  'paciente_contato_pessoa_com_suspeita_covid_local',
                  'DOMICÍLIO'
                )
              }
            />
            <CheckBox
              title={t('LOCAL DE TRABALHO')}
              checked={
                data.paciente_contato_pessoa_com_suspeita_covid_local ===
                'LOCAL DE TRABALHO'
              }
              onPress={() =>
                setInput(
                  'paciente_contato_pessoa_com_suspeita_covid_local',
                  'LOCAL DE TRABALHO'
                )
              }
            />
            <CheckBox
              title={t('DESCONHECIDO')}
              checked={
                data.paciente_contato_pessoa_com_suspeita_covid_local ===
                'DESCONHECIDO'
              }
              onPress={() =>
                setInput(
                  'paciente_contato_pessoa_com_suspeita_covid_local',
                  'DESCONHECIDO'
                )
              }
            />
            <CheckBox
              title={t('OUTRO')}
              checked={
                data.paciente_contato_pessoa_com_suspeita_covid_local ===
                'OUTRO'
              }
              onPress={() =>
                setInput(
                  'paciente_contato_pessoa_com_suspeita_covid_local',
                  'OUTRO'
                )
              }
            />
            {data.paciente_contato_pessoa_com_suspeita_covid_local ===
              'OUTRO' && (
              <TextInput
                label={t('Especificar')}
                style={{ width: '100%' }}
                mode="outlined"
                autoCapitalize="none"
                error=""
                onChangeText={(text) =>
                  setInput(
                    'paciente_contato_pessoa_com_suspeita_covid_local_desc',
                    text
                  )
                }
                value={
                  data.paciente_contato_pessoa_com_suspeita_covid_local_desc
                }
              />
            )}
          </View>
        )}
      </View>

      <Text style={{ marginTop: 10 }}>
        O PACIENTE TEVE CONTATO PRÓXIMO COM UMA PESSOA QUE SEJA CASO CONFIRMADO
        DE NOVO CORONAVÍRUS (COVID-19)?
      </Text>
      <View>
        <CheckBox
          title={t('NÃO')}
          checked={data.paciente_contato_pessoa_com_confirmado_covid === 'NÃO'}
          onPress={() =>
            setInput('paciente_contato_pessoa_com_confirmado_covid', 'NÃO')
          }
        />
        <CheckBox
          title={t('NÃO SABE')}
          checked={
            data.paciente_contato_pessoa_com_confirmado_covid === 'NÃO SABE'
          }
          onPress={() =>
            setInput('paciente_contato_pessoa_com_confirmado_covid', 'NÃO SABE')
          }
        />
        <CheckBox
          title={t('SIM')}
          checked={data.paciente_contato_pessoa_com_confirmado_covid === 'SIM'}
          onPress={() =>
            setInput('paciente_contato_pessoa_com_confirmado_covid', 'SIM')
          }
        />

        {data.paciente_contato_pessoa_com_confirmado_covid === 'SIM' && (
          <TextInput
            label={t('NOME DO CASO FONTE')}
            style={{ width: '100%' }}
            mode="outlined"
            autoCapitalize="none"
            error=""
            onChangeText={(text) =>
              setInput(
                'paciente_contato_pessoa_com_confirmado_covid_caso_fonte',
                text
              )
            }
            value={data.paciente_contato_pessoa_com_confirmado_covid_caso_fonte}
          />
        )}
      </View>

      <Text style={{ marginTop: 10 }}>
        ESTEVE EM UNIDADE DE SAÚDE NOS ÚLTIMOS 14 DIAS?(PRONTO SOCORRO;
        INTERNAÇÃO; UTI)
      </Text>
      <View>
        <CheckBox
          title={t('NÃO')}
          checked={data.paciente_unidade_saude_14_dias === 'NÃO'}
          onPress={() => setInput('paciente_unidade_saude_14_dias', 'NÃO')}
        />

        <CheckBox
          title={t('SIM')}
          checked={data.paciente_unidade_saude_14_dias === 'SIM'}
          onPress={() => setInput('paciente_unidade_saude_14_dias', 'SIM')}
        />

        {data.paciente_unidade_saude_14_dias === 'SIM' && (
          <>
            <TextInput
              label={t('INFORMAR NOME DA UNIDADE')}
              style={{ width: '97.5%', marginBottom: 10 }}
              mode="outlined"
              autoCapitalize="none"
              error=""
              onChangeText={(text) =>
                setInput('paciente_unidade_saude_14_dias_local', text)
              }
              value={data.paciente_unidade_saude_14_dias_local}
            />
            <View style={{ flexDirection: 'row' }}>
              <RNPickerSelect
                onValueChange={(text) =>
                  setInput('paciente_unidade_saude_14_dias_local_estado', text)
                }
                value={data.paciente_unidade_saude_14_dias_local_estado}
                items={states}
                placeholder={{
                  label: 'Estado',
                  value: '',
                  color: 'black',
                }}
                style={{
                  ...pickerSelectStyles,

                  iconContainer: {
                    top: 15,
                    right: 10,
                  },
                }}
                useNativeAndroidPickerStyle={false}
                // textInputProps={{ underlineColor: 'yellow' }}
                Icon={() => (
                  <Ionicons name="md-arrow-down" size={24} color="gray" />
                )}
              />

              <RNPickerSelect
                onSubmitEditing={() => {}}
                onValueChange={(text) =>
                  setInput('paciente_unidade_saude_14_dias_local_cidade', text)
                }
                value={data.paciente_unidade_saude_14_dias_local_cidade}
                items={citiesUnidades}
                placeholder={{
                  label: 'Cidade',
                  value: '',
                  color: 'black',
                }}
                style={{
                  ...pickerSelectStyles,
                  iconContainer: {
                    top: 15,
                    right: 10,
                  },
                }}
                useNativeAndroidPickerStyle={false}
                // textInputProps={{ underlineColor: 'yellow' }}
                Icon={() => (
                  <Ionicons name="md-arrow-down" size={24} color="gray" />
                )}
              />
            </View>
          </>
        )}
      </View>
    </View>
  );
};

export default StepThree;

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    marginRight: 10,
    marginBottom: 0,
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    height: 55,
    color: '#000',
    backgroundColor: '#fff',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 16,
    marginBottom: 0,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'gray',
    borderRadius: 8,
    color: '#000',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});
