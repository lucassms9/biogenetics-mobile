import React, { useState } from 'react';
import { View, Text } from 'react-native';

import Container from '~/components/Container';
import Header from '~/components/Header';

const ClinicDetail = ({ navigation }) => {
  const [visibleAlert, setVisibleAlert] = useState(false);
  return (
    <Container style={{ flex: 1 }}>
      <Header navigation={navigation} title="Laborátorio" />
    </Container>
  );
};

export default ClinicDetail;
