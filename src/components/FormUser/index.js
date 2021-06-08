import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Formik } from 'formik';
import { useTranslation } from 'react-i18next';
import Toast from 'react-native-tiny-toast';
import axios from 'axios';
import { Ionicons, AntDesign, MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import RNPickerSelect from 'react-native-picker-select';

import ButtonPrimary from '~/components/ButtonPrimary';
import TextInput from '~/components/TextInput';
import CheckBox from '~/components/CheckBox';

import styles from './styles';

import { maskCPF, maskPhone, maskDate, maskCEP, maskRG } from '~/helpers';

import validationSchema from './validations';
import validationUpdateSchema from './validationUpdateSchema';
import { colors } from '~/styles/index';

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
  const [isSucure, setIsSucure] = useState(true);
  return (
    <View style={{ flex: 1, marginTop: 20 }}>
      <Formik
        enableReinitialize
        initialValues={initData}
        validationSchema={termShow ? validationSchema : validationUpdateSchema}
        onSubmit={(values) => submitForm(values, 1)}
      >
        {({ handleSubmit, values, setFieldValue, errors }) => {
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
              Toast.show(t('CEP não encontrado.'), {
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
                Toast.show(t('Formato de CEP inválido.'), {
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
                errorMessage={errors.name}
              />

              <TextInput
                label={t('Sobrenome')}
                mode="outlined"
                autoCapitalize="none"
                error={errors.lastName}
                onChangeText={(text) => setFieldValue('lastName', text)}
                value={values.lastName}
                errorMessage={errors.lastName}
              />


              <TextInput
                label={t('E-mail')}
                mode="outlined"
                autoCapitalize="none"
                error={errors.email}
                onChangeText={(text) => setFieldValue('email', text)}
                value={values.email}
                errorMessage={errors.email}
              />


              <TextInput
                label={t('CPF')}
                mode="outlined"
                autoCapitalize="none"
                error={errors.cpf}
                onChangeText={maskCPF(setFieldValue, 'cpf')}
                value={values.cpf}
                errorMessage={errors.cpf}
              />




              <TextInput
                label={t('Celular')}
                mode="outlined"
                autoCapitalize="none"
                error={errors.phone}
                onChangeText={maskPhone(setFieldValue, 'phone')}
                value={values.phone}
                errorMessage={errors.phone}
              />


              <View style={styles.mh5}>
                <Text style={styles.labelPicker}>{t('Sexo')}</Text>
                <RNPickerSelect
                  onSubmitEditing={() => { }}
                  onValueChange={(text) => setFieldValue('sexo', text)}
                  value={values.sexo}
                  items={[
                    {
                      label: t('Feminino'),
                      value: 'F',
                    },
                    {
                      label: t('Masculino'),
                      value: 'M',
                    },
                  ]}
                  placeholder={{
                    label: t('Escolha'),
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
                    <MaterialIcons name="keyboard-arrow-down" size={24} color="gray" />
                  )}
                />
            
              </View>

              <TextInput
                label={t('Data de Nascimento')}
                mode="outlined"
                autoCapitalize="none"
                error={errors.data_nascimento}
                onChangeText={maskDate(setFieldValue, 'data_nascimento')}
                value={values.data_nascimento}
                errorMessage={errors.data_nascimento}
              />



              <TextInput
                label={t('Profissão')}
                mode="outlined"
                autoCapitalize="none"
                error={errors.profissao}
                errorMessage={errors.profissao}
                onChangeText={(text) => setFieldValue('profissao', text)}
                value={values.profissao}
              />



              <TextInput
                label={t('Cep')}
                mode="outlined"
                autoCapitalize="none"
                onEndEditing={handleBlurCep}
                error={errors.cep}
                onChangeText={maskCEP(setFieldValue, 'cep')}
                value={values.cep}
                errorMessage={errors.cep}
              />


              <TextInput
                label={t('Endereço')}
                mode="outlined"
                autoCapitalize="none"
                error={errors.endereco}
                onChangeText={(text) => setFieldValue('endereco', text)}
                value={values.endereco}
                errorMessage={errors.endereco}
              />


              <TextInput
                label={t('Bairro')}
                mode="outlined"
                autoCapitalize="none"
                error={errors.bairro}
                onChangeText={(text) => setFieldValue('bairro', text)}
                value={values.bairro}
                errorMessage={errors.bairro}
              />



              <TextInput
                label={t('Cidade')}
                mode="outlined"
                autoCapitalize="none"
                error={errors.cidade}
                onChangeText={(text) => setFieldValue('cidade', text)}
                value={values.cidade}
                errorMessage={errors.cidade}
              />


              <TextInput
                label={t('UF')}
                mode="outlined"
                autoCapitalize="none"
                error={errors.uf}
                onChangeText={(text) => setFieldValue('uf', text)}
                value={values.uf}
                errorMessage={errors.uf}
              />


              <TextInput
                label={t('Nome da Mãe')}
                mode="outlined"
                autoCapitalize="none"
                error={errors.nome_da_mae}
                onChangeText={(text) => setFieldValue('nome_da_mae', text)}
                value={values.nome_da_mae}
                errorMessage={errors.nome_da_mae}
              />



              <TextInput
                label={t('Senha')}
                mode="outlined"
                autoCapitalize="none"
                error={errors.senha}
                secureTextEntry={isSucure}
                onChangeText={(text) => setFieldValue('senha', text)}
                value={values.senha}
                errorMessage={errors.senha}
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


              {termShow ? (
                <View style={{ flexDirection: 'row', marginLeft: 10 }}>
                  <CheckBox checked={checked} onPress={() => {
                    setChecked(!checked);
                  }} />

                  <TouchableOpacity
                    onPress={() => {
                      setChecked(!checked);
                    }}
                  >
                    <Text style={{ marginLeft: 5, fontSize: 15, marginTop: 4 }}>
                      {t('Aceitar termos')}
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
                        marginTop: 3,
                        textDecorationLine: 'underline',
                      }}
                    >
                      {t('Ler Termos de uso')}
                    </Text>
                  </TouchableOpacity>
                </View>
              ) : (
                <TouchableOpacity
                  onPress={() => {
                    openModel(true);
                  }}
                >
                  <Text
                    style={{
                      marginLeft: 5,
                      fontSize: 15,
                      marginTop: 3,
                      textDecorationLine: 'underline',
                    }}
                  >
                    {t('Ler Termos de uso')}
                  </Text>
                </TouchableOpacity>
              )}
              <View style={{ marginTop: 20 }}>
                <ButtonPrimary
                  loading={status === 'loading'}
                  onPress={handleSubmit}
                  text={textButton || t('Enviar')}
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
    borderRadius: 30,
    height: 55,
    color: '#000',
    backgroundColor: '#F6F6F6',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    marginBottom: 0,
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderRadius: 30,
    height: 55,
    color: '#000',
    backgroundColor: '#F6F6F6',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});
