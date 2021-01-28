import React from 'react';
import { Text } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, Feather } from '@expo/vector-icons';

import MyExamDetail from '../pages/MyExams/detail';
import ClinicDetail from '../pages/NearbyClinics/detail';

import Profile from '../pages/Profile';
import MyExams from '~/pages/MyExams';
import ReadQrcode from '~/pages/ReadQrcode';
import NearbyClinics from '~/pages/NearbyClinics';
import More from '~/pages/More';
import { colors } from '~/styles';

const Tab = createBottomTabNavigator();

const MainTabBottom = () => (
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
          return <Text style={{ fontSize: 13, color }}> Laboratórios </Text>;
        },
      }}
    />

    <Tab.Screen
      name="ReadQrcode"
      component={ReadQrcode}
      options={{
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => (
          <Ionicons name="ios-qr-code-outline" size={24} color={color} />
        ),
        tabBarLabel: ({ focused }) => {
          const color = focused ? colors.primary : '#000';
          return <Text style={{ fontSize: 14, color }}> Anamnese </Text>;
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
          return <Text style={{ fontSize: 13, color }}> Meus Laudos </Text>;
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
          return <Text style={{ fontSize: 13, color }}> Mais </Text>;
        },
      }}
    />
  </Tab.Navigator>
);

const AppStack = createStackNavigator();

const AppRoutes = () => (
  <AppStack.Navigator initialRouteName="Main">
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
      name="MyExamDetail"
      component={MyExamDetail}
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
