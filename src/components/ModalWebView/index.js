import React, { useState } from 'react';
import {
  View,
  Modal,
  Text,
  SafeAreaView,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';

import { WebView } from 'react-native-webview';
import { AntDesign } from '@expo/vector-icons';

const ModalWebView = ({ url, visible, hideModal }) => {
  const [visibleAct, setVisibleAct] = useState(false);
  const ActivityIndicatorElement = () => (
    <ActivityIndicator
      color="#009688"
      size="large"
      style={{ flex: 1, justifyContent: 'center' }}
    />
  );

  return (
    <Modal
      visible={visible}
      onDismiss={hideModal}
      contentContainerStyle={{ backgroundColor: 'white', padding: 20 }}
    >
      <SafeAreaView style={{ flex: 1, flexDirection: 'column' }}>
        <View style={{ flex: 1, flexDirection: 'column' }}>
          <TouchableOpacity onPress={hideModal}>
            <View style={{ alignItems: 'flex-end', margin: 15 }}>
              <AntDesign name="closecircleo" size={24} color="black" />
            </View>
          </TouchableOpacity>
          <WebView
            onLoadStart={() => setVisibleAct(true)}
            onLoad={() => setVisibleAct(false)}
            source={{
              uri: url,
            }}
          />
          {visibleAct ? <ActivityIndicatorElement /> : null}
        </View>
      </SafeAreaView>
    </Modal>
  );
};

export default ModalWebView;
