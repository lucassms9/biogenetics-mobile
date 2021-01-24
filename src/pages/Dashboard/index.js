import React from 'react';
import { View, Button, Text } from 'react-native';

import { useAuth } from '../../contexts/auth';

const Dashboard = () => {
  const { handleSignOut, user } = useAuth();

  const signOut = () => {
    handleSignOut();
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>{user?.name}</Text>
      <Button title="sign out" onPress={signOut} />
    </View>
  );
};

export default Dashboard;
