import React, { useState } from 'react';
import { Modal } from 'react-native-paper';

import LanguageComponent from '~/language/LanguageComponent';

const ModalLanguage = ({ hideModal, visible }) => (
  <Modal
    visible={visible}
    onDismiss={hideModal}
    contentContainerStyle={{
      backgroundColor: 'white',
      padding: 20,
      top: -150,

      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <LanguageComponent />
  </Modal>
);

export default ModalLanguage;
