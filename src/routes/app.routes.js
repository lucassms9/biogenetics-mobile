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
import TermUse from '../pages/TermUse';
import Profile from '../pages/Profile';
import MyExams from '~/pages/MyExams';
import Services from '~/pages/Services';
import Anamnese from '~/pages/Anamnese';
import LaboratoryList from '~/pages/LaboratoryList';
import NearbyClinics from '~/pages/NearbyClinics';
import More from '~/pages/More';
import { colors } from '~/styles';

import {
  IconMenu,
  IconMenuUser,
  IconMenuLaudo,
  IconMenuServices,
  IconMenuLabs,
} from '~/icons';

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
            <IconMenuLabs fillOpacity={focused ? '1' : '0.7'} />
          ),
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                fontSize: 11,
                color: '#fff',
                opacity: focused ? 1 : 0.7,
              }}
            >
              {' '}
              {t('Laboratórios')}{' '}
            </Text>
          ),
        }}
      />

      <Tab.Screen
        name="Services"
        component={Services}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => (
            <IconMenuServices fillOpacity={focused ? '1' : '0.7'} />
          ),
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                fontSize: 11,
                color: '#fff',
                opacity: focused ? 1 : 0.7,
              }}
            >
              {' '}
              {t('Serviços')}{' '}
            </Text>
          ),
        }}
      />

      <Tab.Screen
        name="MyExams"
        component={MyExams}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => (
            <IconMenuLaudo fillOpacity={focused ? '1' : '0.7'} />
          ),
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                fontSize: 11,
                color: '#fff',
                opacity: focused ? 1 : 0.7,
              }}
            >
              {' '}
              {t('Meus Laudos')}{' '}
            </Text>
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => (
            <IconMenuUser fillOpacity={focused ? '1' : '0.7'} />
          ),
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                fontSize: 11,
                color: '#fff',
                opacity: focused ? 1 : 0.7,
              }}
            >
              {' '}
              {t('Perfil')}{' '}
            </Text>
          ),
        }}
      />

      <Tab.Screen
        name="More"
        component={More}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => (
            <IconMenu fillOpacity={focused ? '1' : '0.7'} />
          ),
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                fontSize: 11,
                color: '#fff',
                opacity: focused ? 1 : 0.7,
              }}
            >
              {' '}
              {t('Menu')}{' '}
            </Text>
          ),
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
      name="TermUse"
      component={TermUse}
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
