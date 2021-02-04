import React from 'react';
import { View, Text } from 'react-native';
import { useTranslation } from 'react-i18next';
import { TextInput, HelperText } from 'react-native-paper';

import CheckBox from '~/components/CheckBox';

const StepOne = ({ data, setChecked, setInput }) => {
  const { t } = useTranslation();

  return (
    <View>
      <View style={{ marginLeft: 10, marginTop: 10 }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
          Selecione os sinais e sintomas apresentados
        </Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
        }}
      >
        <CheckBox
          title={t('FEBRE')}
          checked={data.sintoma_febre}
          onPress={() => setChecked('sintoma_febre')}
        />

        <CheckBox
          title={t('TOSSE')}
          checked={data.sintoma_tosse}
          onPress={() => setChecked('sintoma_tosse')}
        />
      </View>

      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
        }}
      >
        <CheckBox
          title={t('CORISA/CONGESTÃO NASAL')}
          checked={data.sintoma_corisa_congestao_nasal}
          onPress={() => setChecked('sintoma_corisa_congestao_nasal')}
        />
        <CheckBox
          title={t('DOR NO CORPO')}
          checked={data.sintoma_dor_no_corpo}
          onPress={() => setChecked('sintoma_dor_no_corpo')}
        />
      </View>

      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
        }}
      >
        <CheckBox
          title={t('EXPECTORAÇÃO')}
          checked={data.sintoma_expectoracao}
          onPress={() => setChecked('sintoma_expectoracao')}
        />
        <CheckBox
          title={t('DOR DE CABEÇA')}
          checked={data.sintoma_cefaleia_dor_de_cabeca}
          onPress={() => setChecked('sintoma_cefaleia_dor_de_cabeca')}
        />
      </View>

      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
        }}
      >
        <CheckBox
          title={t('FRAQUEZA')}
          checked={data.sintoma_adinamia_fraqueza}
          onPress={() => setChecked('sintoma_adinamia_fraqueza')}
        />
        <CheckBox
          title={t('CANSAÇO / FALTA DE AR')}
          checked={data.sintoma_cansaco_falta_de_ar}
          onPress={() => setChecked('sintoma_cansaco_falta_de_ar')}
        />
      </View>

      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
        }}
      >
        <CheckBox
          title={t('DIARREIA')}
          checked={data.sintoma_diarreia}
          onPress={() => setChecked('sintoma_diarreia')}
        />
        <CheckBox
          title={t('FALDA DE APETITE')}
          checked={data.sintoma_falta_de_apetite}
          onPress={() => setChecked('sintoma_falta_de_apetite')}
        />
      </View>

      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
        }}
      >
        <CheckBox
          title={t('NÁUSEA/VÔMITOS')}
          checked={data.sintoma_nausea_vomitos}
          onPress={() => setChecked('sintoma_nausea_vomitos')}
        />
      </View>
    </View>
  );
};

export default StepOne;
