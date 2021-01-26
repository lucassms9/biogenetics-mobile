import { MaskService } from 'react-native-masked-text';

export const maskCEP = (setFieldValueCallback, field) => (text) => {
  const cnpj = MaskService.toMask('zip-code', text);

  return setFieldValueCallback(field, cnpj);
};
