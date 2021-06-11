import React from 'react';
import { View, Text } from 'react-native';

// import { Container } from './styles';

const NoContent = ({ type }) => (
  <View style={{ flex: 1 }}>
    <Text style={{ textAlign: 'center' }}>{`Nenhum ${type} encontrado`}</Text>
  </View>
);

export default NoContent;
