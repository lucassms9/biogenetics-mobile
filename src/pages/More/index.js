import React from 'react';
import { View, Text, Button } from 'react-native';

import { useAuth } from '../../contexts/auth';

const More = () => {
  const { handleSignOut, user } = useAuth();

  const signOut = () => {
    handleSignOut();
  };
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>{user?.nome}</Text>
      <Button title="sign out" onPress={signOut} />
    </View>
  );
};

export default More;
