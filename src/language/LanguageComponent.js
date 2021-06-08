import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import { IconBr, IconEs, IconEn } from '~/icons/';

const LanguageComponent = () => {
  const { i18n } = useTranslation();

  const LANGS = {
    lngCodeBr: 'pt-BR',
    lngCodeEn: 'en',
    lngCodeEs: 'es',
  };

  const setLng = (lngCode) => {
    i18n.changeLanguage(lngCode);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => setLng(LANGS.lngCodeBr)}
      >
        <IconBr />
      </TouchableOpacity>
      <TouchableOpacity
      style={{marginHorizontal:15}}
        onPress={() => setLng(LANGS.lngCodeEn)}
      >
        <IconEn />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setLng(LANGS.lngCodeEs)}
      >
        <IconEs  />
      </TouchableOpacity>
    </View>
  );
};

export default LanguageComponent;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection:'row',
    justifyContent:'center',
    alignContent:'center'
  },
  titleContainer: {
    alignItems: 'center',
    paddingBottom: 20,
  },
  select: {
    fontSize: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  selectedRow: {
    backgroundColor: '#004ba7',
  },
  selectedText: {
    color: 'rgb(231, 232, 235)',
  },
  text: {
    color: 'rgb(45, 45, 45)',
  },
});
