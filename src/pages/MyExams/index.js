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
import * as FileSystem from 'expo-file-system';

import Container from '~/components/Container';
import Header from '~/components/Header';
import Loader from '~/components/Loader';
import { list } from '~/services/exams';
import { statusPedido } from './status';
import { colors } from '~/styles/index';
import ModalWebView from '~/components/ModalWebView';
import ButtonCard from '~/components/ButtonCard';
import NoContent from '~/components/NoContent';
import {
  IconDownload,
  IconStatusDiag,
  IconStatusFinishied,
  IconStatusTriagem,
  IconStatusAttendece,
} from '~/icons';

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

  const download = (uri) => {
    FileSystem.downloadAsync(uri, `${FileSystem.documentDirectory}exame.pdf`)
      .then(({ uri }) => {
        console.log('Finished downloading to ', uri);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  const renderIcon = (exam) => {
    if (exam.status === 'EmAtendimento') {
      return <IconStatusAttendece />;
    }

    if (exam.status === 'EmDiagnostico') {
      return <IconStatusDiag />;
    }
    if (exam.status === 'EmTriagem') {
      return <IconStatusTriagem />;
    }
    if (exam.status === 'Finalizado') {
      return <IconStatusFinishied />;
    }
  };

  return (
    <>
      <Container style={{ flex: 1 }}>
        <Header noBack navigation={navigation} title={t('Meus Laudos')} />
        {loading && <Loader />}

        <View style={{ marginLeft: 27, marginBottom: 50 }}>
          <Text style={{ fontWeight: '700', fontSize: 18, marginTop: 45 }}>
            {t('Meus Laudos')}
          </Text>
          <Text style={{ fontWeight: '300', marginTop: 18, maxWidth: 220 }}>
            {t('Consulte o status e o resultado dos seus exames realizados.')}
          </Text>
        </View>

        <View
          style={{
            height: 400,
            marginHorizontal: 15,
            borderColor: '#ddd',
            shadowColor: Platform.OS === 'ios' ? '#000000' : '#000000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.2,
            elevation: Platform.OS === 'ios' ? null : 3,
          }}
        >
          <ScrollView>
            {exams.length === 0 && <NoContent type={t('Exame')} />}
            {exams.map((exam) => (
              <View
                key={exam.id}
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  height: 115,
                  borderBottomWidth: 1,
                  borderBottomColor: '#C7C7C7',
                }}
                onPress={() => { }}
              >
                <View style={{ flex: 0.1 }}>{renderIcon(exam)}</View>
                <View style={{ flex: 0.6, paddingLeft: 15 }}>
                  <Text style={{ marginTop: 10, fontSize: 16 }}>{`${t(
                    'Laudo'
                  )} Nº ${exam.codigo}`}</Text>

                  <Text style={{ fontSize: 14, marginTop: 5 }}>Paciente</Text>
                  <Text style={{ fontSize: 14 }}>{`${t('DATA')}: `}</Text>

                  <Text style={{ fontSize: 14 }}>{`${t('EXAME')}: `}</Text>
                </View>
                <View
                  style={{
                    flex: 0.4,
                    backgroundColor: '#F2F2F2',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  {exam.resultado !== '-' && (
                    <TouchableOpacity onPress={() => download(exam.url_exame)}>
                      <View
                        style={{
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}
                      >
                        <View style={{}}>
                          <IconDownload />
                        </View>
                        <Text
                          style={{
                            marginBottom: 11,
                            fontWeight: '700',
                            marginTop: 5,
                          }}
                        >
                          {t('Baixar PDF')}
                        </Text>
                      </View>
                    </TouchableOpacity>
                  )}
                  {exam.resultado !== '-' && (
                    <View
                      style={{
                        shadowColor: '#000',
                        shadowOffset: {
                          width: 0,
                          height: 2,
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 3.84,

                        elevation: 5,
                      }}
                    >
                      <ButtonCard
                        onPress={() => openLaudo(exam.url_exame)}
                        text={t('VER LAUDO')}
                      />
                    </View>
                  )}
                </View>
              </View>
            ))}
          </ScrollView>
        </View>
        <ModalWebView visible={visible} hideModal={hideModal} url={modalUrl} />
      </Container>
    </>
  );
};

export default MyExams;
