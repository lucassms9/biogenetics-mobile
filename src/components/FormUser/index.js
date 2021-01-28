import React, { useRef } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Formik } from 'formik';
import { useTranslation } from 'react-i18next';
import Toast from 'react-native-tiny-toast';
import axios from 'axios';
import { Ionicons } from '@expo/vector-icons';

import { TextInput, Checkbox, HelperText } from 'react-native-paper';
import RNPickerSelect from 'react-native-picker-select';

import ButtonPrimary from '~/components/ButtonPrimary';

import styles from './styles';

import { maskCPF, maskPhone, maskDate, maskCEP } from '~/helpers';
import { commons } from '~/styles';

import validationSchema from './validations';
import validationUpdateSchema from './validationUpdateSchema';

function FormUser({
  submitForm,
  status,
  textButton,
  initData,
  checked,
  setChecked,
  openModel,
  termShow,
}) {
  const { t } = useTranslation();
  console.log(initData);
  return (
    <View style={{ flex: 1, marginTop: 20 }}>
      <Formik
        enableReinitialize
        initialValues={initData}
        validationSchema={termShow ? validationSchema : validationUpdateSchema}
        onSubmit={(values) => submitForm(values, 1)}
      >
        {({ handleSubmit, values, setFieldValue, errors }) => {
          console.log(values);
          const loadingCep = async (state) => {
            if (state) {
              setFieldValue('endereco', '...');
              setFieldValue('uf', '...');
              setFieldValue('cidade', '...');
            } else {
              setFieldValue('endereco', '');
              setFieldValue('uf', '');
              setFieldValue('cidade', '');
            }
          };

          const getCep = async (cep) => {
            const response = await axios.get(
              `https://viacep.com.br/ws/${cep}/json/`
            );

            const {
              data: { logradouro, uf, localidade, erro, bairro },
            } = response;
            if (!erro) {
              // setFieldValue('complement', complemento);
              setFieldValue('bairro', bairro);
              setFieldValue('endereco', logradouro);
              setFieldValue('uf', uf);
              setFieldValue('cidade', localidade);
            } else {
              loadingCep(false);
              setFieldValue('cep', '');
              Toast.show('CEP não encontrado.', {
                duration: 2000,
                containerStyle: {
                  backgroundColor: '#ff3d3d',
                  borderRadius: 15,
                },
              });
            }
          };

          const handleBlurCep = async (e) => {
            loadingCep(true);
            let cep = e.nativeEvent.text;
            cep = cep.replace(/\D/, '');
            if (cep !== '') {
              const validacep = /^[0-9]{8}$/;
              // Valida o formato do CEP.
              if (validacep.test(cep)) {
                getCep(cep);
              } else {
                Toast.show('Formato de CEP inválido.', {
                  position: Toast.position.center,
                  duration: 2000,
                  containerStyle: {
                    backgroundColor: '#ff3d3d',
                    borderRadius: 15,
                  },
                });
                loadingCep(false);
              }
            }
          };

          return (
            <>
              <TextInput
                label={t('Nome')}
                mode="outlined"
                autoCapitalize="none"
                error={errors.name}
                onChangeText={(text) => setFieldValue('name', text)}
                value={values.name}
              />
              <HelperText type="error" visible={!!errors.name}>
                {errors.name}
              </HelperText>

              <TextInput
                label={t('E-mail')}
                mode="outlined"
                autoCapitalize="none"
                error={errors.email}
                onChangeText={(text) => setFieldValue('email', text)}
                value={values.email}
              />
              <HelperText type="error" visible={!!errors.email}>
                {errors.email}
              </HelperText>

              <TextInput
                label={t('CPF')}
                mode="outlined"
                autoCapitalize="none"
                error={errors.cpf}
                onChangeText={maskCPF(setFieldValue, 'cpf')}
                value={values.cpf}
              />
              <HelperText type="error" visible={!!errors.cpf}>
                {errors.cpf}
              </HelperText>

              <TextInput
                label={t('RG')}
                mode="outlined"
                autoCapitalize="none"
                error={errors.rg}
                onChangeText={(text) => setFieldValue('rg', text)}
                value={values.rg}
              />
              <HelperText type="error" visible={!!errors.rg}>
                {errors.rg}
              </HelperText>

              <TextInput
                label={t('Celular')}
                mode="outlined"
                autoCapitalize="none"
                error={errors.phone}
                onChangeText={maskPhone(setFieldValue, 'phone')}
                value={values.phone}
              />
              <HelperText type="error" visible={!!errors.phone}>
                {errors.phone}
              </HelperText>

              <View style={styles.mh5}>
                <Text style={styles.labelPicker}>Sexo</Text>
                <RNPickerSelect
                  onSubmitEditing={() => {}}
                  onValueChange={(text) => setFieldValue('sexo', text)}
                  value={values.sexo}
                  items={[
                    {
                      label: 'Feminino',
                      value: 'F',
                    },
                    {
                      label: 'Masculino',
                      value: 'M',
                    },
                  ]}
                  placeholder={{
                    label: 'Escolha',
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
                <HelperText type="error" visible={!!errors.sexo}>
                  {errors.sexo}
                </HelperText>
              </View>

              <TextInput
                label={t('Data de Nascimento')}
                mode="outlined"
                autoCapitalize="none"
                error={errors.data_nascimento}
                onChangeText={maskDate(setFieldValue, 'data_nascimento')}
                value={values.data_nascimento}
              />

              <HelperText type="error" visible={!!errors.data_nascimento}>
                {errors.data_nascimento}
              </HelperText>

              <TextInput
                label={t('Cep')}
                mode="outlined"
                autoCapitalize="none"
                onEndEditing={handleBlurCep}
                error={errors.cep}
                onChangeText={maskCEP(setFieldValue, 'cep')}
                value={values.cep}
              />

              <HelperText type="error" visible={!!errors.cep}>
                {errors.cep}
              </HelperText>

              <TextInput
                label={t('Endreço')}
                mode="outlined"
                autoCapitalize="none"
                error={errors.endereco}
                onChangeText={(text) => setFieldValue('endereco', text)}
                value={values.endereco}
              />

              <HelperText type="error" visible={!!errors.endereco}>
                {errors.endereco}
              </HelperText>

              <TextInput
                label={t('Bairro')}
                mode="outlined"
                autoCapitalize="none"
                error={errors.bairro}
                onChangeText={(text) => setFieldValue('bairro', text)}
                value={values.bairro}
              />

              <HelperText type="error" visible={!!errors.bairro}>
                {errors.bairro}
              </HelperText>

              <TextInput
                label={t('Cidade')}
                mode="outlined"
                autoCapitalize="none"
                error={errors.cidade}
                onChangeText={(text) => setFieldValue('cidade', text)}
                value={values.cidade}
              />

              <HelperText type="error" visible={!!errors.cidade}>
                {errors.cidade}
              </HelperText>

              <TextInput
                label={t('UF')}
                mode="outlined"
                autoCapitalize="none"
                error={errors.uf}
                onChangeText={(text) => setFieldValue('uf', text)}
                value={values.uf}
              />

              <HelperText type="error" visible={!!errors.uf}>
                {errors.uf}
              </HelperText>
              <TextInput
                label={t('Nome da Mãe')}
                mode="outlined"
                autoCapitalize="none"
                error={errors.nome_da_mae}
                onChangeText={(text) => setFieldValue('nome_da_mae', text)}
                value={values.nome_da_mae}
              />

              <HelperText type="error" visible={!!errors.nome_da_mae}>
                {errors.nome_da_mae}
              </HelperText>

              <TextInput
                label={t('Senha')}
                mode="outlined"
                autoCapitalize="none"
                error={errors.senha}
                secureTextEntry
                onChangeText={(text) => setFieldValue('senha', text)}
                value={values.senha}
              />

              <HelperText type="error" visible={!!errors.senha}>
                {errors.senha}
              </HelperText>

              {termShow && (
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <View
                    style={{
                      borderWidth: 1,
                      borderColor: '#000',
                      width: 30,
                      height: 30,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <View style={{ position: 'absolute', right: 2 }}>
                      <Checkbox
                        color="#f00"
                        uncheckedColor="#f00"
                        status={checked ? 'checked' : 'unchecked'}
                        onPress={() => {
                          setChecked(!checked);
                        }}
                      />
                    </View>
                  </View>

                  <TouchableOpacity
                    onPress={() => {
                      setChecked(!checked);
                    }}
                  >
                    <Text style={{ marginLeft: 5, fontSize: 15 }}>
                      Aceitar termos
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      openModel(true);
                    }}
                  >
                    <Text
                      style={{
                        marginLeft: 5,
                        fontSize: 15,
                        textDecorationLine: 'underline',
                      }}
                    >
                      Ler Termos de uso
                    </Text>
                  </TouchableOpacity>
                </View>
              )}
              <View style={{ marginTop: 20 }}>
                <ButtonPrimary
                  loading={status === 'loading'}
                  onPress={handleSubmit}
                  text={textButton || 'Enviar'}
                />
              </View>
            </>
          );
        }}
      </Formik>
    </View>
  );
}

export default FormUser;

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
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
