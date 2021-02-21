import React, { createContext, useState, useEffect, useContext } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { signIn, recover, signUp, saveTokenPush } from '../services/auth';
import api from '../services/api';
import { registerForPushNotificationsAsync } from '../services/push';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStorageData() {
      const storageUser = await AsyncStorage.getItem('@RNAuth:user');
      const storageToken = await AsyncStorage.getItem('@RNAuth:token');

      if (storageUser && storageToken) {
        setUser(JSON.parse(storageUser));
        api.defaults.headers.Authorization = `Bearer ${storageToken}`;
      }

      setLoading(false);
    }
    loadStorageData();
  }, []);

  const sendTokenPush = async (token, userId) => {
    await saveTokenPush(token, userId);
  };
  const handleSignIn = async (email, senha) => {
    // eslint-disable-next-line no-useless-catch
    try {
      const {
        data: {
          result: { result },
        },
      } = await signIn(email, senha);

      setUser(result.paciente);
      await AsyncStorage.setItem(
        '@RNAuth:user',
        JSON.stringify(result.paciente)
      );

      registerForPushNotificationsAsync().then((token) => {
        if (token) {
          sendTokenPush(token, result.paciente.id);
        }
      });
      api.defaults.headers.Authorization = `Bearer ${result.token}`;
      await AsyncStorage.setItem('@RNAuth:token', result.token);
    } catch (error) {
      throw error;
    }
  };

  const handleSignUp = async (dataParam) => {
    // eslint-disable-next-line no-useless-catch
    try {
      const {
        data: {
          result: { result },
        },
      } = await signUp(dataParam);

      setUser(result.paciente);
      await AsyncStorage.setItem(
        '@RNAuth:user',
        JSON.stringify(result.paciente)
      );
      await AsyncStorage.setItem('@RNAuth:token', result.token);

      api.defaults.headers.Authorization = `Bearer ${result.token}`;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  const handleRecover = async (email) => {
    // eslint-disable-next-line no-useless-catch
    try {
      const {
        data: {
          result: { result },
        },
      } = await recover(email);

      return result;
    } catch (error) {
      throw error;
    }
  };

  const handleSignOut = () => {
    AsyncStorage.clear().then(() => {
      setUser(null);
    });
  };

  return (
    <AuthContext.Provider
      value={{
        signed: !!user,
        loading,
        user,
        handleSignIn,
        handleSignOut,
        handleRecover,
        handleSignUp,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);
  return context;
}
