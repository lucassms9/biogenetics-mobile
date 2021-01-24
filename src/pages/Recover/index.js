import React, { useState } from 'react';
import { View, Image } from 'react-native';

import { TextInput, Button, HelperText } from 'react-native-paper';
import logoBio from '@assets/biogenetics-logo.png';
import Header from '~/components/Header';
import Container from '~/components/Container';

const Recover = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [erros, setErros] = useState({});

  return (
    <Container style={{ flex: 1 }}>
      <Header navigation={navigation} title="Esqueci minha senha" />
      <View
        style={{ flex: 0.4, justifyContent: 'center', alignItems: 'center' }}
      >
        <Image
          resizeMode="contain"
          style={{ width: '85%', height: 95, top: 20 }}
          source={logoBio}
        />
      </View>

      <View
        style={{
          marginHorizontal: 20,
          flex: 0.6,
          justifyContent: 'flex-start',
        }}
      >
        <TextInput
          label="Email"
          mode="outlined"
          autoCapitalize="none"
          keyboardType="email-address"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <HelperText type="error" visible={!!erros.email}>
          {erros.email}
        </HelperText>

        <Button
          style={{ marginTop: 20, backgroundColor: '#004ba7' }}
          icon="login"
          mode="contained"
          onPress={() => {}}
          labelStyle={{ color: '#fff', fontSize: 18 }}
          contentStyle={{ height: 45 }}
        >
          Recurar Senha
        </Button>
      </View>
    </Container>
  );
};

export default Recover;
