import React from 'react';
import { View, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const Container = ({ children, ...res }) => (
  <View style={{ flex: 1, backgroundColor:'#fff' }}>
    {children}
  </View>
);

export default Container;
