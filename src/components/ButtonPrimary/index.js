import React from 'react';

import { Button } from 'react-native-paper';

function ButtonPrimary({ loading, onPress, text, icon = 'login', style }) {
  return (
    <Button
      style={{ backgroundColor: '#004ba7', ...style }}
      icon={icon}
      mode="contained"
      loading={loading}
      onPress={onPress}
      labelStyle={{ color: '#fff', fontSize: 18 }}
      contentStyle={{ height: 45 }}
    >
      {text}
    </Button>
  );
}

export default ButtonPrimary;
