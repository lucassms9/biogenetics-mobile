import React from 'react';
import { View, Text } from 'react-native';
import { useTranslation } from 'react-i18next';
import { TextInput, HelperText } from 'react-native-paper';

import CheckBox from '~/components/CheckBox';

const StepTwo = ({ data, setChecked, setInput }) => {
  const { t } = useTranslation();

  return (
    <View>
      <Text>
        O PACIENTE UTILIZOU ANALGÉSICO, ANTITÉRMICO OU ANTI-INFLAMATÓRIO?
      </Text>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
        <CheckBox
          title={t('Sim')}
          checked={data.analgesico_antitermico_antiinflamatorio}
          onPress={() => setChecked('analgesico_antitermico_antiinflamatorio')}
        />
        <CheckBox
          title="Não"
          checked={!data.analgesico_antitermico_antiinflamatorio}
          onPress={() => setChecked('analgesico_antitermico_antiinflamatorio')}
        />
      </View>

      <View style={{ marginLeft: 10, marginTop: 10 }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
          SELECIONE OS SINAIS CLÍNICOS OBSERVADOS
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
          checked={data.clinico_febre}
          onPress={() => setChecked('clinico_febre')}
        />
        {data.clinico_febre && (
          <TextInput
            label={t('TEMPERATURA DE')}
            style={{ width: 200 }}
            mode="outlined"
            maxLength={2}
            onChangeText={(text) => setInput('clinico_febre_temp', text)}
            value={data.clinico_febre_temp}
          />
        )}
      </View>

      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
        }}
      >
        <CheckBox
          title={t('EXSUDATO FARÍNGEO')}
          checked={data.clinico_exsudato}
          onPress={() => setChecked('clinico_exsudato')}
        />

        <CheckBox
          title={t('CONVULSÃO')}
          checked={data.clinico_convulsao}
          onPress={() => setChecked('clinico_convulsao')}
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
          title={t('EXSUDATO FARÍNGEO')}
          checked={data.clinico_exsudato}
          onPress={() => setChecked('clinico_exsudato')}
        />

        <CheckBox
          title={t('CONJUNTIVITE')}
          checked={data.clinico_conjuntivite}
          onPress={() => setChecked('clinico_conjuntivite')}
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
          title={t('COMA')}
          checked={data.clinico_coma}
          onPress={() => setChecked('clinico_coma')}
        />

        <CheckBox
          title={t('DISPNEIA/TAQUIPNEIA')}
          checked={data.clinico_dispneia_taquipneia}
          onPress={() => setChecked('clinico_dispneia_taquipneia')}
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
          title={t('ALTERAÇÃO DE AUSCULTA PULMONAR')}
          checked={data.clinico_alteracao_de_ausculta_pulmonar}
          onPress={() => setChecked('clinico_alteracao_de_ausculta_pulmonar')}
        />

        <CheckBox
          title={t('ALTERAÇÃO NA RADIOLOGIA DE TÓRAX')}
          checked={data.clinico_alteracao_na_radiologia_de_torax}
          onPress={() => setChecked('clinico_alteracao_na_radiologia_de_torax')}
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
          title={t('OUTROS')}
          checked={data.clinico_outros}
          onPress={() => setChecked('clinico_outros')}
        />
        {data.clinico_outros && (
          <TextInput
            label={t('Especificar')}
            style={{ width: 200 }}
            mode="outlined"
            autoCapitalize="none"
            error=""
            onChangeText={(text) => setInput('clinico_outros_observacao', text)}
            value={data.clinico_outros_observacao}
          />
        )}
      </View>

      <View style={{ marginLeft: 10, marginTop: 10 }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
          MORBIDADES PRÉVIAS (SELECIONAR TODAS MORBIDADES PERTINENTES)
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
          title={t('DOENÇA CARDIOVASCULAR, INCLUINDO HIPERTENSÃO')}
          checked={data.morbidade_cardiovascular}
          onPress={() => setChecked('morbidade_cardiovascular')}
        />

        <CheckBox
          title={t('DIABETES')}
          checked={data.morbidade_diabetes}
          onPress={() => setChecked('morbidade_diabetes')}
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
          title={t('DOENÇA HEPÁTICA')}
          checked={data.morbidade_hepatica}
          onPress={() => setChecked('morbidade_hepatica')}
        />

        <CheckBox
          title={t('DOENÇA NEUROLÓGICA CRÔNICA OU NEUROMUSCULAR')}
          checked={data.morbidade_neurologica}
          onPress={() => setChecked('morbidade_neurologica')}
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
          title={t('IMUNODEFICIÊNCIA')}
          checked={data.morbidade_imunodeficiencia}
          onPress={() => setChecked('morbidade_imunodeficiencia')}
        />

        <CheckBox
          title={t('INFECÇÃO PELO HIV')}
          checked={data.morbidade_hiv}
          onPress={() => setChecked('morbidade_hiv')}
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
          title={t('DOENÇA RENAL')}
          checked={data.morbidade_renal}
          onPress={() => setChecked('morbidade_renal')}
        />

        <CheckBox
          title={t('DOENÇA PULMONAR CRÔNICA')}
          checked={data.morbidade_pulmonar}
          onPress={() => setChecked('morbidade_pulmonar')}
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
          title={t('NEOPLASIA (TUMOR SÓLIDO OU HEMATOLÓGICO)')}
          checked={data.morbidade_neoplasia}
          onPress={() => setChecked('morbidade_neoplasia')}
        />
      </View>
    </View>
  );
};

export default StepTwo;
