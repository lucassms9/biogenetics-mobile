import React from 'react';

import { Button } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';

function ButtonGradient({ loading, onPress, text, icon = 'login', style }) {
  return (
    <Button
      buttonStyle={{ height: 50, }}
      icon={icon}
      mode="contained"
      loading={loading}
      onPress={onPress}
      title={text}
      titleStyle={{fontWeight:'700'}}
      ViewComponent={LinearGradient} // Don't forget this!
      linearGradientProps={{
        colors: ['#1493EB', '#1138F3'],
        start: { x: 0, y: 0.8 },
        end: { x: 1, y: 0.2 },
      }}
      labelStyle={{ color: '#fff', fontSize: 18 }}
      containerStyle={{ borderRadius: 30, ...style, }}
    />
  );
}


export default ButtonGradient;