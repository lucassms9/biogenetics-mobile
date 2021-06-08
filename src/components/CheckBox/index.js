import React from 'react';
import { View } from 'react-native';

import { CheckBox } from 'react-native-elements';

import colors from '~/styles/colors';

const CheckBoxComponent = ({ onPress, title, checked }) => (
  <CheckBox
    textStyle={{ color: colors.primary }}
    uncheckedColor={colors.primary}
    checkedColor={colors.primary}
    containerStyle={{
      backgroundColor: 'transparent',
      borderWidth: 0,
      marginLeft: 0,
      margin: 0,
      padding: 0,
    }}
    title={title}
    checked={checked}
    onPress={onPress}
  />
);

export default CheckBoxComponent;
