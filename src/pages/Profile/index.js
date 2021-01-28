import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';

import FormUser from '~/components/FormUser';

import Container from '~/components/Container';
import Header from '~/components/Header';
import Alert from '~/components/Alert';

const Profile = ({ navigation }) => {
  const [status, setStatus] = useState('');
  const [visibleAlert, setVisibleAlert] = useState(false);
  const [messageAlert, setMessageAlert] = useState('');

  const submitForm = async (values) => {};
  return (
    <Container style={{ flex: 1 }}>
      <Header navigation={navigation} title="Meus Dados" />
      <ScrollView>
        <View
          style={{
            marginHorizontal: 20,
            flex: 1,
            justifyContent: 'flex-start',
          }}
        >
          <FormUser
            submitForm={submitForm}
            status={status}
            textButton="Enviar"
            initData={{}}
          />
        </View>
      </ScrollView>
      <Alert
        visible={visibleAlert}
        hideDialog={() => setVisibleAlert(false)}
        message={messageAlert}
      />
    </Container>
  );
};

export default Profile;
