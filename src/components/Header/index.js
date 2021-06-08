import * as React from 'react';
import { TouchableOpacity, Text, View } from 'react-native'
import { Header as HeaderComponent } from 'react-native-elements';
import { Feather } from '@expo/vector-icons';

const Header = ({ navigation, title, noBack }) => {
  const goBack = () => navigation.goBack();

  const rightComponent = () => {
    if (!noBack) {
      return <View style={{ flex: 1, width: 200, justifyContent: 'flex-end', alignItems: 'flex-end' }}><Text style={{ color: 'white', fontSize: 18, fontWeight: '600' }}>{title}</Text></View>
    }
  }
  const leftComponent = () => {
    if (!noBack) {
      return (
        <TouchableOpacity onPress={goBack} >
          <Feather name="arrow-left" size={24} color="white" />
        </TouchableOpacity>
      )
    } else {
      return <View style={{ flex: 1, width: 200, justifyContent: 'flex-end', alignItems: 'flex-end' }}><Text style={{ color: 'white', fontSize: 18, fontWeight: '600' }}>{title}</Text></View>
    }
  }

  return (
    <HeaderComponent
      leftComponent={leftComponent}
      rightComponent={rightComponent}
      containerStyle={{
        backgroundColor: '#075CE9',
        justifyContent: 'space-around',
      }}
    />

  );
};

export default Header;
