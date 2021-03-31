import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import AsyncStorage from '@react-native-community/async-storage';

const { width } = Dimensions.get('window');

const LanguageComponent = () => {
  const { t, i18n } = useTranslation();
  const selectedLngCode = i18n.language;

  const LANGS = [
    { lngCode: 'pt-BR', label: t('Português') },
    { lngCode: 'en', label: t('Inglês') },
    { lngCode: 'es', label: t('Espanhol') },
  ];

  const setLng = (lngCode) => {
    i18n.changeLanguage(lngCode);
  };
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.select}>{t('selectLng')}</Text>
      </View>
      {LANGS.map((l) => {
        console.log(l.lngCode);
        const selected = l.lngCode === selectedLngCode;
        return (
          <TouchableOpacity
            onPress={() => setLng(l.lngCode)}
            key={l.lngCode}
            disabled={selected}
          >
            <View style={[styles.row, selected ? styles.selectedRow : {}]}>
              <Text style={[selected ? styles.selectedText : styles.text]}>
                {l.label}
              </Text>

              {selected && (
                <>
                  {l.lngCode === 'en' && (
                    <Text style={{ fontSize: 20 }}> 🇺🇸 </Text>
                  )}
                  {l.lngCode === 'pt-BR' && (
                    <Text style={{ fontSize: 20 }}> 🇧🇷 </Text>
                  )}
                  {l.lngCode === 'es' && (
                    <Text style={{ fontSize: 20 }}> 🇪🇸 </Text>
                  )}
                </>
              )}
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default LanguageComponent;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: 'rgb(231, 232, 235)',
    width: width * 0.8,
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
