import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';

import '~/language/i18next';

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

// export default function App() {
//   const { t } = useTranslation();

//   return (
//     <>
//       <StatusBar barStyle="dark-content" />
//       <SafeAreaView style={styles.main}>
//         <View>
//           <Text>homePage NS: {t('homePage:welcome')}</Text>
//           <Text>Deafult NS: {t('cancel')}</Text>
//           <LanguageComponent />
//         </View>
//       </SafeAreaView>
//     </>
//   );
// }
// const styles = StyleSheet.create({
//   main: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });
