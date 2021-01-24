import React from 'react';
import { View, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const Container = ({ children, ...res }) => (
  <SafeAreaView style={{ flex: 1 }}>
    <LinearGradient
      style={{ flex: 1 }}
      colors={['#fff', 'rgba(160, 205, 255,2)']}
      start={{ x: 0, y: 0 }}
    >
      {children}
    </LinearGradient>
  </SafeAreaView>
);

export default Container;
