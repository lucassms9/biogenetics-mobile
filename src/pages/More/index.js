import React from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';

import { ScrollView } from 'react-native-gesture-handler';
import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons';
import { useAuth } from '../../contexts/auth';

import Container from '~/components/Container';
import Header from '~/components/Header';

const More = ({ navigation }) => {
  const { handleSignOut, user } = useAuth();

  const signOut = () => {
    handleSignOut();
  };

  return (
    <Container style={{ flex: 1 }}>
      <Header noBack navigation={navigation} title="Mais opções" />
      <ScrollView>
        <TouchableOpacity
          style={{
            padding: 15,
            backgroundColor: '#fff',
            borderRadius: 10,
            marginTop: 20,
            marginHorizontal: 20,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 5,
            },
            shadowOpacity: 0.36,
            shadowRadius: 5.68,

            elevation: 20,
          }}
          onPress={() => navigation.navigate('Profile')}
        >
          <View
            style={{ flexDirection: 'row', marginBottom: 10, marginLeft: 10 }}
          >
            <FontAwesome5 name="user-edit" size={24} color="black" />
            <Text style={{ marginLeft: 10, marginTop: 5, fontSize: 17 }}>
              Meus Dados
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            padding: 15,
            backgroundColor: '#fff',
            borderRadius: 10,
            marginTop: 20,
            marginHorizontal: 20,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 5,
            },
            shadowOpacity: 0.36,
            shadowRadius: 5.68,

            elevation: 20,
          }}
          onPress={signOut}
        >
          <View
            style={{ flexDirection: 'row', marginBottom: 10, marginLeft: 10 }}
          >
            <MaterialIcons name="logout" size={28} color="black" />
            <Text style={{ marginLeft: 10, marginTop: 5, fontSize: 17 }}>
              Fazer logout
            </Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </Container>
  );
};

export default More;
