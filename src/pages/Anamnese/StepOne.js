import React from 'react';
import { View, Text } from 'react-native';
import { useTranslation } from 'react-i18next';
import { TextInput, HelperText } from 'react-native-paper';

import CheckBox from '~/components/CheckBox';

const StepOne = ({ data, setChecked, setInput }) => {
  const { t } = useTranslation();

  return (
    <View>
      <CheckBox
        title="Está gestante?"
        checked={data.gestante}
        onPress={() => setChecked('gestante')}
      />
      <TextInput
        label={t('Médico solicitante')}
        mode="outlined"
        autoCapitalize="none"
        error=""
        onChangeText={(text) => setInput('medico_solicitante', text)}
        value={data.medico_solicitante}
      />
      <TextInput
        label={t('Médico CRM')}
        mode="outlined"
        autoCapitalize="none"
        error=""
        onChangeText={(text) => setInput('medico_crm', text)}
        value={data.medico_crm}
      />
      <TextInput
        label={t('há quantos dias sentiu os primeiros sintomas ?')}
        mode="outlined"
        autoCapitalize="none"
        error=""
        maxLength={2}
        keyboardType="numeric"
        onChangeText={(text) => setInput('data_primeiros_sintomas', text)}
        value={data.data_primeiros_sintomas}
      />
      <View style={{ marginLeft: 10, marginTop: 10 }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
          Selecione os sintomas apresentados
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
          title={t('DOR DE GARGANTA')}
          checked={data.sintoma_cor_de_garganta}
          onPress={() => setChecked('sintoma_cor_de_garganta')}
        />
        <CheckBox
          title={t('DIFICULDADE DE RESPIRAR')}
          checked={data.sintoma_dificuldade_de_respirar}
          onPress={() => setChecked('sintoma_dificuldade_de_respirar')}
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
          title={t('MIALGIA/ARTRALGIA')}
          checked={data.sintoma_mialgia_artralgia}
          onPress={() => setChecked('sintoma_mialgia_artralgia')}
        />
        <CheckBox
          title={t('DIARREIA')}
          checked={data.sintoma_diarreia}
          onPress={() => setChecked('sintoma_diarreia')}
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
        <CheckBox
          title={t('CEFALEIA (DOR DE CABEÇA)')}
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
          title={t('CORIZA')}
          checked={data.sintoma_coriza}
          onPress={() => setChecked('sintoma_coriza')}
        />
        <CheckBox
          title={t('IRRITABILIDADE/CONFUSÃO')}
          checked={data.sintoma_irritabilidade_confusao}
          onPress={() => setChecked('sintoma_irritabilidade_confusao')}
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
          title={t('ADINAMIA (FRAQUEZA)')}
          checked={data.sintoma_adinamia_fraqueza}
          onPress={() => setChecked('sintoma_adinamia_fraqueza')}
        />
        <CheckBox
          title={t('PRODUÇÃO DE ESCARRO')}
          checked={data.sintoma_producao_de_escarro}
          onPress={() => setChecked('sintoma_producao_de_escarro')}
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
          title={t('CONGESTÃO NASAL')}
          checked={data.sintoma_congestao_nasal}
          onPress={() => setChecked('sintoma_congestao_nasal')}
        />
        <CheckBox
          title={t('CONGESTÃO CONJUNTIVAL')}
          checked={data.sintoma_congestao_conjuntival}
          onPress={() => setChecked('sintoma_congestao_conjuntival')}
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
          title={t('DIFICULDADE PARA DEGLUTIR')}
          checked={data.sintoma_dificildade_para_deglutir}
          onPress={() => setChecked('sintoma_dificildade_para_deglutir')}
        />
        <CheckBox
          title={t('MANCHAS VERMELHAS PELO CORPO')}
          checked={data.sintoma_manchas_vermelhas_pelo_corpo}
          onPress={() => setChecked('sintoma_manchas_vermelhas_pelo_corpo')}
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
          title={t('GÂNGLIOS LINFÁTICOS AUMENTADOS')}
          checked={data.sintoma_ganglios_linfaticos_aumentados}
          onPress={() => setChecked('sintoma_ganglios_linfaticos_aumentados')}
        />
        <CheckBox
          title={t('BATIMENTO DAS ASAS NASAIS')}
          checked={data.sintoma_batimento_das_asas_nasais}
          onPress={() => setChecked('sintoma_batimento_das_asas_nasais')}
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
          title={t('SATURAÇÃO DE O2 < 95%')}
          checked={data.sintoma_saturacao_de_o2_95}
          onPress={() => setChecked('sintoma_saturacao_de_o2_95')}
        />
        <CheckBox
          title={t('SINAIS DE CIANOSE')}
          checked={data.sintoma_sinais_de_cianose}
          onPress={() => setChecked('sintoma_sinais_de_cianose')}
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
          title={t('BATIMENTO DAS ASAS NASAIS')}
          checked={data.sintoma_calafrios}
          onPress={() => setChecked('sintoma_calafrios')}
        />
        <CheckBox
          title={t('TIRAGEM INTERCOSTAL')}
          checked={data.sintoma_tiragem_intercostal}
          onPress={() => setChecked('sintoma_tiragem_intercostal')}
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
          title={t('DISPNEIA')}
          checked={data.sintoma_dispneia}
          onPress={() => setChecked('sintoma_dispneia')}
        />
        <CheckBox
          title={t('OUTROS')}
          checked={data.sintoma_outros}
          onPress={() => setChecked('sintoma_outros')}
        />
        {data.sintoma_outros && (
          <TextInput
            label={t('Especificar')}
            style={{ width: 200 }}
            mode="outlined"
            autoCapitalize="none"
            error=""
            onChangeText={(text) => setInput('sintoma_outros_observacao', text)}
            value={data.sintoma_outros_observacao}
          />
        )}
      </View>
    </View>
  );
};

export default StepOne;
