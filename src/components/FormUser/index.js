import React, { useRef } from 'react';
import { ScrollView, View } from 'react-native';
import { Formik } from 'formik';

import { TextInput, Button, HelperText } from 'react-native-paper';
import ButtonPrimary from '~/components/ButtonPrimary';

import styles from './styles';

import { maskCPF } from '~/helpers';
import { commons } from '~/styles';

import validationSchema from './validations';

function FormUser({ submitForm, status, textButton, initData }) {
  return (
    <View style={{ flex: 1, marginTop: 20 }}>
      <Formik
        initialValues={initData}
        validationSchema={validationSchema}
        onSubmit={(values) => submitForm(values, 1)}
      >
        {({ handleSubmit, values, setFieldValue, errors }) => (
          <>
            <TextInput
              label="Nome"
              mode="outlined"
              autoCapitalize="none"
              error={errors.name}
              onChangeText={(text) => setFieldValue('name', text)}
              value={values.name}
            />
            <HelperText type="error" visible={!!errors.name}>
              {errors.name}
            </HelperText>

            <View style={{ marginTop: 20 }}>
              <ButtonPrimary
                loading={status === 'loading'}
                onPress={handleSubmit}
                text={textButton || 'Enviar'}
              />
            </View>
          </>
        )}
      </Formik>
    </View>
  );
}

export default FormUser;
