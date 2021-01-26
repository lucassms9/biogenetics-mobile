import * as React from 'react';
import { View } from 'react-native';
import { Button, Paragraph, Dialog, Portal } from 'react-native-paper';

const Alert = ({ visible, hideDialog, message }) => (
  <View>
    <Portal>
      <Dialog visible={visible} onDismiss={hideDialog}>
        <Dialog.Title>Biogenetics</Dialog.Title>
        <Dialog.Content>
          <Paragraph>{message}</Paragraph>
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={hideDialog}>Ok</Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  </View>
);

export default Alert;
