import React, { useState } from 'react';
import { View, Text } from 'react-native';

import Container from '~/components/Container';
import Header from '~/components/Header';

const ReadQrcode = ({ navigation }) => {
  const [visibleAlert, setVisibleAlert] = useState(false);
  return (
    <Container style={{ flex: 1 }}>
      <Header noBack navigation={navigation} title="Anamnese" />
    </Container>
  );
};

export default ReadQrcode;
