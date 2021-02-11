import React, { useRef } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Formik } from 'formik';
import { useTranslation } from 'react-i18next';
import Toast from 'react-native-tiny-toast';
import axios from 'axios';
import { Ionicons, AntDesign, FontAwesome } from '@expo/vector-icons';

import { TextInput, HelperText } from 'react-native-paper';
import RNPickerSelect from 'react-native-picker-select';

import ButtonPrimary from '~/components/ButtonPrimary';

import styles from './styles';

import { maskCPF, maskPhone, maskDate, maskCEP } from '~/helpers';

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
              />
              <HelperText type="error" visible={!!errors.name}>
                {t(errors.name)}
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
                {t(errors.email)}
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
                {t(errors.cpf)}
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
                {t(errors.rg)}
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
                {t(errors.phone)}
              </HelperText>

              <View style={styles.mh5}>
                <Text style={styles.labelPicker}>{t('Sexo')}</Text>
                <RNPickerSelect
                  onSubmitEditing={() => {}}
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
                    <Ionicons name="md-arrow-down" size={24} color="gray" />
                  )}
                />
                <HelperText type="error" visible={!!errors.sexo}>
                  {t(errors.sexo)}
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
                {t(errors.data_nascimento)}
              </HelperText>

              <TextInput
                label={t('Profissão')}
                mode="outlined"
                autoCapitalize="none"
                error={errors.profissao}
                onChangeText={(text) => setFieldValue('profissao', text)}
                value={values.profissao}
              />

              <HelperText type="error" visible={!!errors.profissao}>
                {t(errors.profissao)}
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
                {t(errors.cep)}
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
                {t(errors.endereco)}
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
                {t(errors.bairro)}
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
                {t(errors.cidade)}
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
                {t(errors.uf)}
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
                {t(errors.nome_da_mae)}
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
                {t(errors.senha)}
              </HelperText>

              {termShow ? (
                <View style={{ flexDirection: 'row', marginLeft: 10 }}>
                  <TouchableOpacity
                    onPress={() => {
                      setChecked(!checked);
                    }}
                    style={{ flexDirection: 'row', alignItems: 'center' }}
                  >
                    <View style={{ flexDirection: 'row' }}>
                      {checked ? (
                        <AntDesign
                          name="checkcircleo"
                          size={24}
                          color={colors.primary}
                        />
                      ) : (
                        <FontAwesome
                          name="circle-thin"
                          size={27}
                          color={colors.primary}
                          style={{ top: -2 }}
                        />
                      )}
                    </View>
                  </TouchableOpacity>

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
