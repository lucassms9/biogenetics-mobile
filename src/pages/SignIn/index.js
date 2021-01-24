import React, { useState } from 'react';
import {
  View,
  SafeAreaView,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import { TextInput, Button, HelperText } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import logoBio from '@assets/biogenetics-logo.png';

import { useAuth } from '~/contexts/auth';

import Container from '~/components/Container';

const SignIn = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [erros, setErros] = useState({});

  const { handleSignIn } = useAuth();

  const hasErrors = () => {
    const errosHandle = {};

    if (!email) {
      errosHandle.email = 'Campo obrigatório';
    }

    if (!password) {
      errosHandle.password = 'Campo obrigatório';
    }
    setErros(errosHandle);
    return errosHandle;
  };

  const signSubIn = () => {
    // handleSignIn();
    hasErrors();
  };

  return (
    <Container>
      <View
        style={{
          flex: 0.4,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Image
          resizeMode="contain"
          style={{ width: '85%', height: 95, top: 20 }}
          source={logoBio}
        />
      </View>
      <View
        style={{
          flex: 0.6,
          marginHorizontal: 20,
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
        <TextInput
          mode="outlined"
          label="Senha"
          autoCapitalize="none"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <HelperText type="error" visible={!!erros.password}>
          {erros.password}
        </HelperText>
        <Button
          style={{ marginTop: 20, backgroundColor: '#004ba7' }}
          icon="login"
          mode="contained"
          onPress={signSubIn}
          labelStyle={{ color: '#fff', fontSize: 18 }}
          contentStyle={{ height: 45 }}
        >
          Entrar
        </Button>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
          }}
        >
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text style={{ fontSize: 15 }}>
              Não tem uma conta?{' '}
              <Text style={{ fontWeight: 'bold' }}>Cadastre-se agora.</Text>
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
          }}
        >
          <TouchableOpacity onPress={() => navigation.navigate('Recover')}>
            <Text style={{ fontSize: 15, textDecorationLine: 'underline' }}>
              Esqueci minha senha
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Container>
  );
};

export default SignIn;
