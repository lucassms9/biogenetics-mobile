import React, { useState } from 'react';
import { View, SafeAreaView } from 'react-native';
import { TextInput, Button, HelperText } from 'react-native-paper';

import Header from '~/components/Header';
import Container from '~/components/Container';
import FormUser from '~/components/FormUser';

const SignUp = ({ navigation }) => {
  const [status, setStatus] = useState('');
  const submitForm = (values) => {
    console.log(values);
  };
  return (
    <Container style={{ flex: 1 }}>
      <Header navigation={navigation} title="Cadastrar-se" />

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
    </Container>
  );
};

export default SignUp;
