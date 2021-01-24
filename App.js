import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';
import { AuthProvider } from './src/contexts/auth';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#004ba7',
    accent: 'yellow',
  },
};

export default function App() {
  return (
    <NavigationContainer>
      <PaperProvider theme={theme}>
        <AuthProvider>
          <Routes />
          <StatusBar style="auto" />
        </AuthProvider>
      </PaperProvider>
    </NavigationContainer>
  );
}
