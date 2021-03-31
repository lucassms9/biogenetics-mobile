import React from 'react';
import { View, Text } from 'react-native';
import { useTranslation } from 'react-i18next';
import { TextInput, HelperText } from 'react-native-paper';

import CheckBox from '~/components/CheckBox';

const StepTwo = ({ data, setChecked, setInput }) => {
  const { t } = useTranslation();

  return (
    <View>
      <View
        style={{
          marginLeft: 5,
          marginTop: 15,
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}
      >
        <Text style={{ fontSize: 17 }}>{t('Selecione as ')}</Text>
        <Text style={{ fontSize: 17, fontWeight: 'bold' }}>
          {t('doenças associadas')}
        </Text>
      </View>

      <CheckBox
        title={t('ALTERAÇÃO COLESTEROL/TRIGLICÉRIDES')}
        checked={data.clinico_alteracao_colesterol}
        onPress={() => setChecked('clinico_alteracao_colesterol')}
      />

      <CheckBox
        title={t('APNEIA DO SONO')}
        checked={data.clinico_apneia_do_sone}
        onPress={() => setChecked('clinico_apneia_do_sone')}
      />

      <CheckBox
        title={t('ASMA')}
        checked={data.clinico_asma}
        onPress={() => setChecked('clinico_asma')}
      />

      <CheckBox
        title={t('DIABETES')}
        checked={data.morbidade_diabetes}
        onPress={() => setChecked('morbidade_diabetes')}
      />

      <CheckBox
        title={t('DOENÇAS HEPÁTICAS')}
        checked={data.clinico_doencas_hepaticas}
        onPress={() => setChecked('clinico_doencas_hepaticas')}
      />
      {data.clinico_doencas_hepaticas_qual && (
        <TextInput
          label={t('Qual')}
          style={{ width: 200 }}
          mode="outlined"
          autoCapitalize="none"
          error=""
          onChangeText={(text) =>
            setInput('clinico_doencas_hepaticas_qual', text)
          }
          value={data.clinico_doencas_hepaticas_qual}
        />
      )}

      <CheckBox
        title={t('DOENÇAS REUMATOLÓGICAS')}
        checked={data.clinico_doencas_reumatologicas}
        onPress={() => setChecked('clinico_doencas_reumatologicas')}
      />

      {data.clinico_doencas_reumatologicas_qual && (
        <TextInput
          label={t('Qual')}
          style={{ width: 200 }}
          mode="outlined"
          autoCapitalize="none"
          error=""
          onChangeText={(text) =>
            setInput('clinico_doencas_reumatologicas_qual', text)
          }
          value={data.clinico_doencas_reumatologicas_qual}
        />
      )}

      <CheckBox
        title={t('DPOC (ENFISEMA)')}
        checked={data.clinico_dpoc_enfisema}
        onPress={() => setChecked('clinico_dpoc_enfisema')}
      />

      <CheckBox
        title={t('HIPERTENSÃO ARTERIAL')}
        checked={data.clinico_cardiovascular}
        onPress={() => setChecked('clinico_cardiovascular')}
      />

      <CheckBox
        title={t('INSUFICIÊNCIA RENAL')}
        checked={data.clinico_insuficiencia_renal}
        onPress={() => setChecked('clinico_insuficiencia_renal')}
      />

      <CheckBox
        title={t('NEOPLASIA / CÂNCER')}
        checked={data.clinico_neoplasia_cancer}
        onPress={() => setChecked('clinico_neoplasia_cancer')}
      />
      {data.clinico_neoplasia_cancer_qual && (
        <TextInput
          label={t('Qual')}
          style={{ width: 200 }}
          mode="outlined"
          autoCapitalize="none"
          error=""
          onChangeText={(text) =>
            setInput('clinico_neoplasia_cancer_qual', text)
          }
          value={data.clinico_neoplasia_cancer_qual}
        />
      )}

      <CheckBox
        title={t('OBESIDADE')}
        checked={data.clinico_obesidade}
        onPress={() => setChecked('clinico_obesidade')}
      />

      <CheckBox
        title={t('OUTROS')}
        checked={data.clinico_outros}
        onPress={() => setChecked('clinico_outros')}
      />
      {data.clinico_outros && (
        <TextInput
          label={t('Qual')}
          style={{ width: 200 }}
          mode="outlined"
          autoCapitalize="none"
          error=""
          onChangeText={(text) => setInput('clinico_outros_observacao', text)}
          value={data.clinico_outros_observacao}
        />
      )}

      <CheckBox
        title={t('RINITE')}
        checked={data.clinico_rinite}
        onPress={() => setChecked('clinico_rinite')}
      />
    </View>
  );
};

export default StepTwo;
