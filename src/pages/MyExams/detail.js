import React, { useState } from 'react';
import { View, Text } from 'react-native';

import Container from '~/components/Container';
import Header from '~/components/Header';

const MyExamDetail = ({ navigation }) => {
  const [visibleAlert, setVisibleAlert] = useState(false);
  return (
    <Container style={{ flex: 1 }}>
      <Header navigation={navigation} title="Laudo" />
    </Container>
  );
};

export default MyExamDetail;
