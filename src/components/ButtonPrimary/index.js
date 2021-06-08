import React from 'react';

import { Button } from 'react-native-elements';

function ButtonPrimary({ loading, onPress, text, icon = 'login', style }) {
  return (
    <Button
    buttonStyle={{ backgroundColor: '#004ba7', height: 50,  }}
      icon={icon}
      mode="contained"
      loading={loading}
      title={text}
      onPress={onPress}
      labelStyle={{ color: '#fff', fontSize: 18 }}
      containerStyle={{ borderRadius: 30, ...style, }}
    />
  );
}

export default ButtonPrimary;
