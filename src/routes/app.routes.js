import React from 'react';
import { Text } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, Feather, MaterialIcons } from '@expo/vector-icons';
import { useTranslation } from 'react-i18next';

import MyExamDetail from '../pages/MyExams/detail';
import ClinicDetail from '../pages/NearbyClinics/detail';

import Suport from '../pages/Suport';
import Profile from '../pages/Profile';
import MyExams from '~/pages/MyExams';
import Services from '~/pages/Services';
import Anamnese from '~/pages/Anamnese';
import LaboratoryList from '~/pages/LaboratoryList';
import NearbyClinics from '~/pages/NearbyClinics';
import More from '~/pages/More';
import { colors } from '~/styles';

const Tab = createBottomTabNavigator();

const MainTabBottom = () => {
  const { t, i18n } = useTranslation();
  return (
    <Tab.Navigator
      initialRouteName="NearbyClinics"
      tabBarOptions={{
        activeTintColor: colors.primary,
        inactiveTintColor: 'gray',
        style: {
          backgroundColor: colors.tabBarColor,
          borderTopColor: 'transparent',
        },
      }}
    >
      <Tab.Screen
        name="NearbyClinics"
        component={NearbyClinics}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name="md-location-sharp" size={24} color={color} />
          ),
          tabBarLabel: ({ focused }) => {
            const color = focused ? colors.primary : '#000';
            return (
              <Text style={{ fontSize: 13, color }}> {t('Laboratórios')} </Text>
            );
          },
        }}
      />

      <Tab.Screen
        name="Services"
        component={Services}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => (
            <MaterialIcons name="medical-services" size={24} color={color} />
          ),
          tabBarLabel: ({ focused }) => {
            const color = focused ? colors.primary : '#000';
            return (
              <Text style={{ fontSize: 14, color }}> {t('Serviços')} </Text>
            );
          },
        }}
      />

      <Tab.Screen
        name="MyExams"
        component={MyExams}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name="document-outline" size={24} color={color} />
          ),
          tabBarLabel: ({ focused }) => {
            const color = focused ? colors.primary : '#000';
            return (
              <Text style={{ fontSize: 13, color }}> {t('Meus Laudos')} </Text>
            );
          },
        }}
      />

      <Tab.Screen
        name="More"
        component={More}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => (
            <Feather name="list" size={24} color={color} />
          ),
          tabBarLabel: ({ focused }) => {
            const color = focused ? colors.primary : '#000';
            return <Text style={{ fontSize: 13, color }}> {t('Mais')} </Text>;
          },
        }}
      />
    </Tab.Navigator>
  );
};

const AppStack = createStackNavigator();

const AppRoutes = () => (
  <AppStack.Navigator initialRouteName="Main">
    <AppStack.Screen
      name="Anamnese"
      component={Anamnese}
      options={{
        headerShown: false,
      }}
    />
    <AppStack.Screen
      name="ClinicDetail"
      component={ClinicDetail}
      options={{
        headerShown: false,
      }}
    />
    <AppStack.Screen
      name="Profile"
      component={Profile}
      options={{
        headerShown: false,
      }}
    />
    <AppStack.Screen
      name="LaboratoryList"
      component={LaboratoryList}
      options={{
        headerShown: false,
      }}
    />
    <AppStack.Screen
      name="MyExamDetail"
      component={MyExamDetail}
      options={{
        headerShown: false,
      }}
    />
    <AppStack.Screen
      name="MyExams"
      component={MyExams}
      options={{
        headerShown: false,
      }}
    />
    <AppStack.Screen
      name="Suport"
      component={Suport}
      options={{
        headerShown: false,
      }}
    />
    <AppStack.Screen
      name="Main"
      component={MainTabBottom}
      options={{
        headerShown: false,
      }}
    />
  </AppStack.Navigator>
);

export default AppRoutes;
