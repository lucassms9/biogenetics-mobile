import { MaskService } from 'react-native-masked-text';

export const maskRG = (setFieldValueCallback, field) => (text) => {
  const date = MaskService.toMask('custom', text, {
    mask: '99.999.999-*',
  });

  return setFieldValueCallback(field, date);
};
