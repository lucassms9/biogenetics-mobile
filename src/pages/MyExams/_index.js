import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Platform,
} from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import * as Linking from 'expo-linking';
import { MaterialCommunityIcons, Fontisto } from '@expo/vector-icons';
import { useTranslation } from 'react-i18next';

import Container from '~/components/Container';
import Header from '~/components/Header';
import Loader from '~/components/Loader';
import { list } from '~/services/exams';
import { statusPedido } from './status';
import { colors } from '~/styles/index';
import ModalWebView from '~/components/ModalWebView';

const MyExams = ({ navigation }) => {
  const [visible, setVisible] = useState(false);
  const [modalUrl, showModalUrl] = useState(false);
  const [visibleAlert, setVisibleAlert] = useState(false);
  const [loading, setLoading] = useState(false);
  const [exams, setExams] = useState([]);
  const [result, setResult] = useState(null);
  const { t } = useTranslation();

  const getExams = async () => {
    try {
      setLoading(true);
      const {
        data: {
          result: {
            result: { pedidos },
          },
        },
      } = await list();

      setExams(pedidos);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getExams();
  }, []);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getExams();
    });

    return unsubscribe;
  }, [navigation]);

  const openLaudo = async (url) => {
    if (Platform.OS === 'android') {
      Linking.openURL(url);
    } else {
      showModal(true);
      showModalUrl(url);
    }
    // showModal(true);
    // showModalUrl(url);
    // Linking.openURL(url);
  };
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  return (
    <>
      <Container style={{ flex: 1 }}>
        <Header noBack navigation={navigation} title={t('Meus Laudos')} />
        {loading && <Loader />}

        <View style={{ marginLeft: 27, marginBottom: 50 }}>
        <Text style={{ fontWeight: '700', fontSize: 18, marginTop: 45 }}>{t('Meus Laudos')}</Text>
        <Text style={{ fontWeight: '300', marginTop: 18, maxWidth: 220 }}>{t('Consulte o status e o resultado dos seus exames realizados.')}</Text>
      </View>

        <ScrollView>
          {exams.map((exam) => (
            <View
              key={exam.id}
              style={{
                flex: 1,
                paddingVertical: 15,
                paddingHorizontal: 5,
                flexDirection: 'row',
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
                alignItems: 'center',
              }}
            >
              <View style={{ flex: 0.4 }}>
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    left: -7,
                  }}
                >
                  <MaterialCommunityIcons
                    name="file-document-outline"
                    size={70}
                    color={colors.primary}
                  />
                </View>
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: colors.primary,
                    height: 25,
                    width: 90,
                    borderRadius: 15,
                    marginTop: 10,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 13,
                      color: 'white',
                      fontWeight: 'bold',
                    }}
                  >
                    {t(statusPedido[exam.status])}
                  </Text>
                </View>
              </View>
              <View style={{ marginBottom: 10, flex: 0.8 }}>
                <View
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                  }}
                >
                  <View style={{ flex: 0.8 }}>
                    <Text
                      style={{
                        fontSize: 20,
                        marginBottom: 10,
                        fontWeight: 'bold',
                        color: '#ff8500',
                      }}
                    >
                      {`${exam.clinica_nome}`}
                    </Text>
                    <Text style={{ fontSize: 14 }}>{`${t('Pedido')}: ${
                      exam.codigo
                    }`}</Text>
                    <Text style={{ fontSize: 14 }}>{`${t('Tipo de exame')}: ${
                      exam.exame_nome
                    }`}</Text>
                    <Text style={{ fontSize: 14 }}>{`${t('Tipo de amostra')}: ${
                      exam.amostra_tipo
                    }`}</Text>
                    <Text style={{ fontSize: 15 }}>{`${t('Resultado')}: ${t(
                      exam.resultado
                    )}`}</Text>
                  </View>
                  <View
                    style={{
                      flex: 0.3,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    {exam.resultado !== '-' && (
                      <TouchableOpacity
                        style={{}}
                        onPress={() => openLaudo(exam.url_exame)}
                      >
                        <View style={{ alignItems: 'center' }}>
                          <Text>PDF</Text>
                          <Fontisto name="world-o" size={24} color="black" />
                        </View>
                      </TouchableOpacity>
                    )}
                  </View>
                </View>
              </View>
            </View>
          ))}
        </ScrollView>
        <ModalWebView visible={visible} hideModal={hideModal} url={modalUrl} />
      </Container>
    </>
  );
};

export default MyExams;
