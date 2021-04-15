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
        <Text> {t(`O paciente tem histórico de `)}</Text>
        <Text style={{ fontWeight: 'bold' }}> {t(`viagem recente? `)}</Text>
        <Text> {t(`(período de 14 dias)`)}</Text>
      </Text>

      <CheckBox
        title={t('SIM')}
        checked={data.viagem_status === 'SIM'}
        onPress={() => setInput('viagem_status', 'SIM')}
      />

      <CheckBox
        title={t('NÃO')}
        checked={data.viagem_status === 'NÃO'}
        onPress={() => setInput('viagem_status', 'NÃO')}
      />

      {data.viagem_status === 'SIM' && (
        <>
          <View
            style={{
              flexDirection: 'column',
              flexWrap: 'wrap',
              marginBottom: 10,
            }}
          >
            <CheckBox
              title={t('Brasil')}
              checked={data.viagem_brasil}
              onPress={() => setChecked('viagem_brasil')}
            />
            {data.viagem_brasil && (
              <View style={{ flexDirection: 'column', marginLeft: 15 }}>
                <RNPickerSelect
                  onValueChange={(text) =>
                    setInput('viagem_brasil_estado', text)
                  }
                  value={data.viagem_brasil_estado}
                  items={states}
                  placeholder={{
                    label: t('Estado'),
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

                <View style={{ marginTop: 10 }}>
                  <RNPickerSelect
                    onSubmitEditing={() => {}}
                    onValueChange={(text) =>
                      setInput('viagem_brasil_cidade', text)
                    }
                    value={data.viagem_brasil_cidade}
                    items={cities}
                    placeholder={{
                      label: t('Cidade'),
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
              </View>
            )}
          </View>
          <View style={{ flexDirection: 'column', flexWrap: 'wrap' }}>
            <CheckBox
              title={t('Exterior')}
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
                onChangeText={(text) =>
                  setInput('viagem_exteriorobs_pais', text)
                }
                value={data.viagem_exteriorobs_pais}
              />
            )}
          </View>
        </>
      )}

      <Text style={{ marginBottom: 10 }}>
        <Text>{t(`O paciente teve `)}</Text>
        <Text style={{ fontWeight: 'bold' }}> {t(`contato `)}</Text>
        <Text> {t(`com algum caso suspeito ou confirmado de COVID-19?`)}</Text>
      </Text>

      <View
        style={{
          flexDirection: 'column',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
        }}
      >
        <CheckBox
          title={t('SIM')}
          checked={data.paciente_contato_pessoa_com_suspeita_covid === 'SIM'}
          onPress={() =>
            setInput('paciente_contato_pessoa_com_suspeita_covid', 'SIM')
          }
        />

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
      </View>

      <Text style={{ marginTop: 10 }}>
        <Text>{t('O paciente esteve em alguma ')}</Text>
        <Text style={{ fontWeight: 'bold' }}>{t('Unidade de Saúde ')}</Text>
        <Text>
          {t('nos últimos 14 dias? (Pronto Socorro, Internação, UTI)')}
        </Text>
      </Text>
      <View>
        <CheckBox
          title={t('SIM')}
          checked={data.paciente_unidade_saude_14_dias === 'SIM'}
          onPress={() => setInput('paciente_unidade_saude_14_dias', 'SIM')}
        />
        <CheckBox
          title={t('NÃO')}
          checked={data.paciente_unidade_saude_14_dias === 'NÃO'}
          onPress={() => setInput('paciente_unidade_saude_14_dias', 'NÃO')}
        />
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
    paddingRight: 100, // to ensure the text is never behind the icon
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
    paddingRight: 100, // to ensure the text is never behind the icon
  },
});
