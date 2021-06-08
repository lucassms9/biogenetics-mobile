import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { useTranslation } from 'react-i18next';

import CheckBox from '~/components/CheckBox';

import { getStates } from '~/services/geoName';

const StepOne = ({ data, setChecked, setInput }) => {
  const { t, i18n } = useTranslation();

  const getStatesRes = async () => {
    const res = await getStates();
  };
  useEffect(() => {
    getStatesRes();
  }, []);

  const selectedLngCode = i18n.language;
  return (
    <View>
      {selectedLngCode === 'pt-BR' && (
        <RenderPT data={data} setChecked={setChecked} setInput={setInput} />
      )}
      {selectedLngCode === 'es' && (
        <RenderES data={data} setChecked={setChecked} setInput={setInput} />
      )}
      {selectedLngCode === 'en' && (
        <RenderEN data={data} setChecked={setChecked} setInput={setInput} />
      )}
    </View>
  );
};

const RenderES = ({ data, setChecked, setInput }) => {
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
        <Text style={{ fontSize: 17 }}>{t('Selecione os ')}</Text>
        <Text style={{ fontSize: 17, fontWeight: 'bold' }}>{t('sinais ')}</Text>
        <Text style={{ fontSize: 17 }}>{t('e ')}</Text>
        <Text style={{ fontSize: 17, fontWeight: 'bold' }}>
          {t('sintomas ')}
        </Text>
        <Text style={{ fontSize: 17 }}>{t('apresentados')}</Text>
      </View>

      <CheckBox
        title={t('CANSAÇO / FALTA DE AR')}
        checked={data.sintoma_cansaco_falta_de_ar}
        onPress={() => setChecked('sintoma_cansaco_falta_de_ar')}
      />

      <CheckBox
        title={t('CORIZA/CONGESTÃO NASAL')}
        checked={data.sintoma_corisa_congestao_nasal}
        onPress={() => setChecked('sintoma_corisa_congestao_nasal')}
      />
      <CheckBox
        title={t('FRAQUEZA')}
        checked={data.sintoma_adinamia_fraqueza}
        onPress={() => setChecked('sintoma_adinamia_fraqueza')}
      />
      <CheckBox
        title={t('DIARREIA')}
        checked={data.sintoma_diarreia}
        onPress={() => setChecked('sintoma_diarreia')}
      />

      <CheckBox
        title={t('DOR DE CABEÇA')}
        checked={data.sintoma_cefaleia_dor_de_cabeca}
        onPress={() => setChecked('sintoma_cefaleia_dor_de_cabeca')}
      />

      <CheckBox
        title={t('DOR NO CORPO')}
        checked={data.sintoma_dor_no_corpo}
        onPress={() => setChecked('sintoma_dor_no_corpo')}
      />

      <CheckBox
        title={t('ESCARRO')}
        checked={data.sintoma_expectoracao}
        onPress={() => setChecked('sintoma_expectoracao')}
      />

      <CheckBox
        title={t('FALTA DE APETITE')}
        checked={data.sintoma_falta_de_apetite}
        onPress={() => setChecked('sintoma_falta_de_apetite')}
      />

      <CheckBox
        title={t('FEBRE')}
        checked={data.sintoma_febre}
        onPress={() => setChecked('sintoma_febre')}
      />

      <CheckBox
        title={t('NÁUSEA/VÔMITOS')}
        checked={data.sintoma_nausea_vomitos}
        onPress={() => setChecked('sintoma_nausea_vomitos')}
      />

      <CheckBox
        title={t('TOSSE')}
        checked={data.sintoma_tosse}
        onPress={() => setChecked('sintoma_tosse')}
      />
    </View>
  );
};

const RenderEN = ({ data, setChecked, setInput }) => {
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
        <Text style={{ fontSize: 17 }}>{t('Selecione os ')}</Text>
        <Text style={{ fontSize: 17, fontWeight: 'bold' }}>{t('sinais ')}</Text>
        <Text style={{ fontSize: 17 }}>{t('e ')}</Text>
        <Text style={{ fontSize: 17, fontWeight: 'bold' }}>
          {t('sintomas ')}
        </Text>
        <Text style={{ fontSize: 17 }}>{t('apresentados')}</Text>
      </View>
      <CheckBox
        title={t('DOR NO CORPO')}
        checked={data.sintoma_dor_no_corpo}
        onPress={() => setChecked('sintoma_dor_no_corpo')}
      />

      <CheckBox
        title={t('CORIZA/CONGESTÃO NASAL')}
        checked={data.sintoma_corisa_congestao_nasal}
        onPress={() => setChecked('sintoma_corisa_congestao_nasal')}
      />
      <CheckBox
        title={t('TOSSE')}
        checked={data.sintoma_tosse}
        onPress={() => setChecked('sintoma_tosse')}
      />
      <CheckBox
        title={t('DIARREIA')}
        checked={data.sintoma_diarreia}
        onPress={() => setChecked('sintoma_diarreia')}
      />
      <CheckBox
        title={t('FEBRE')}
        checked={data.sintoma_febre}
        onPress={() => setChecked('sintoma_febre')}
      />
      <CheckBox
        title={t('DOR DE CABEÇA')}
        checked={data.sintoma_cefaleia_dor_de_cabeca}
        onPress={() => setChecked('sintoma_cefaleia_dor_de_cabeca')}
      />

      <CheckBox
        title={t('FALTA DE APETITE')}
        checked={data.sintoma_falta_de_apetite}
        onPress={() => setChecked('sintoma_falta_de_apetite')}
      />
      <CheckBox
        title={t('NÁUSEA/VÔMITOS')}
        checked={data.sintoma_nausea_vomitos}
        onPress={() => setChecked('sintoma_nausea_vomitos')}
      />
      <CheckBox
        title={t('ESCARRO')}
        checked={data.sintoma_expectoracao}
        onPress={() => setChecked('sintoma_expectoracao')}
      />
      <CheckBox
        title={t('CANSAÇO / FALTA DE AR')}
        checked={data.sintoma_cansaco_falta_de_ar}
        onPress={() => setChecked('sintoma_cansaco_falta_de_ar')}
      />
      <CheckBox
        title={t('FRAQUEZA')}
        checked={data.sintoma_adinamia_fraqueza}
        onPress={() => setChecked('sintoma_adinamia_fraqueza')}
      />
    </View>
  );
};

const RenderPT = ({ data, setChecked, setInput }) => {
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
        <Text style={{ fontSize: 17 }}>{t('Selecione os ')}</Text>
        <Text style={{ fontSize: 17, fontWeight: 'bold' }}>{t('sinais ')}</Text>
        <Text style={{ fontSize: 17 }}>{t('e ')}</Text>
        <Text style={{ fontSize: 17, fontWeight: 'bold' }}>
          {t('sintomas ')}
        </Text>
        <Text style={{ fontSize: 17 }}>{t('apresentados')}</Text>
      </View>

      <CheckBox
        title={t('CANSAÇO / FALTA DE AR')}
        checked={data.sintoma_cansaco_falta_de_ar}
        onPress={() => setChecked('sintoma_cansaco_falta_de_ar')}
      />

      <CheckBox
        title={t('CORIZA/CONGESTÃO NASAL')}
        checked={data.sintoma_corisa_congestao_nasal}
        onPress={() => setChecked('sintoma_corisa_congestao_nasal')}
      />

      <CheckBox
        title={t('DIARREIA')}
        checked={data.sintoma_diarreia}
        onPress={() => setChecked('sintoma_diarreia')}
      />

      <CheckBox
        title={t('DOR DE CABEÇA')}
        checked={data.sintoma_cefaleia_dor_de_cabeca}
        onPress={() => setChecked('sintoma_cefaleia_dor_de_cabeca')}
      />

      <CheckBox
        title={t('DOR NO CORPO')}
        checked={data.sintoma_dor_no_corpo}
        onPress={() => setChecked('sintoma_dor_no_corpo')}
      />

      <CheckBox
        title={t('ESCARRO')}
        checked={data.sintoma_expectoracao}
        onPress={() => setChecked('sintoma_expectoracao')}
      />

      <CheckBox
        title={t('FALTA DE APETITE')}
        checked={data.sintoma_falta_de_apetite}
        onPress={() => setChecked('sintoma_falta_de_apetite')}
      />

      <CheckBox
        title={t('FEBRE')}
        checked={data.sintoma_febre}
        onPress={() => setChecked('sintoma_febre')}
      />

      <CheckBox
        title={t('FRAQUEZA')}
        checked={data.sintoma_adinamia_fraqueza}
        onPress={() => setChecked('sintoma_adinamia_fraqueza')}
      />

      <CheckBox
        title={t('NÁUSEA/VÔMITOS')}
        checked={data.sintoma_nausea_vomitos}
        onPress={() => setChecked('sintoma_nausea_vomitos')}
      />

      <CheckBox
        title={t('TOSSE')}
        checked={data.sintoma_tosse}
        onPress={() => setChecked('sintoma_tosse')}
      />
    </View>
  );
};
export default StepOne;
