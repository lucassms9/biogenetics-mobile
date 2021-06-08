import React from 'react';

import { Button } from 'react-native-elements';

function ButtonCard({ loading, onPress, text, icon = 'login', style }) {
  return (
    <Button
      buttonStyle={{ backgroundColor: '#004ba7', height: 34, }}
      icon={icon}
      mode="contained"
      loading={loading}
      title={text}
      onPress={onPress}
      titleStyle={{ color: '#fff', fontSize: 15, marginLeft:10 }}
      containerStyle={{ borderRadius: 30, ...style, width: 114, }}
    />
  );
}

export default ButtonCard;
