import React from 'react';

import { Input } from 'react-native-elements';

// import { Container } from './styles';

const TextInput = ({ ...props }) => <Input
  inputContainerStyle={{
    backgroundColor: '#F6F6F6',
    borderBottomWidth: 0,
    paddingLeft: 16,
    height: 55,
    borderRadius: 30
  }}
  rightIconContainerStyle={{ paddingRight: 16 }}
  labelStyle={{
    marginLeft: 20,
    color: '#1C2D53',
    fontSize: 16,
    fontWeight: '400',
    marginBottom: 5
  }}
  {...props}
/>

export default TextInput;