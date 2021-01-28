import { MaskService } from 'react-native-masked-text';

export const maskCEP = (setFieldValueCallback, field) => (text) => {
  const cep = MaskService.toMask('zip-code', text);

  return setFieldValueCallback(field, cep);
};

export const maskOnlyCEP = (text) => {
  const cep = MaskService.toMask('zip-code', text);

  return cep;
};
