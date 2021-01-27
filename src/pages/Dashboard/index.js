import React from 'react';
import { View, Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { BottomNavigation, Text } from 'react-native-paper';
import { useAuth } from '../../contexts/auth';

import MyExams from '~/pages/MyExams';
import ReadQrcode from '~/pages/ReadQrcode';
import NearbyClinics from '~/pages/NearbyClinics';
import More from '~/pages/More';

const Dashboard = () => {
  const signOut = () => {
    handleSignOut();
  };
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {
      key: 'nearbyClinics',
      title: 'Laboratórios',
      icon: (
        <View>
          <Ionicons name="md-location-sharp" size={10} color="#fff" />
        </View>
      ),
    },
    { key: 'readQrcode', title: 'Anamnese', icon: 'album' },
    { key: 'myExams', title: 'Meus Laudos', icon: 'history' },
    { key: 'more', title: 'Mais', icon: 'history' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    nearbyClinics: NearbyClinics,
    readQrcode: ReadQrcode,
    myExams: MyExams,
    more: More,
  });
  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default Dashboard;
