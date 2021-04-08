import * as yup from 'yup';
import { validarCPFCnpj, validarDate } from '~/helpers/validateFunctions';

function equalTo(ref, msg) {
  return this.test({
    name: 'equalTo',
    exclusive: false,
    message: msg || 'As senhas devem ser iguais',
    params: {
      reference: ref.path,
    },
    test(value) {
      return value === this.resolve(ref);
    },
  });
}

yup.addMethod(yup.string, 'equalTo', equalTo);

const validationSchema = yup.object().shape({
  name: yup.string().required('Campo obrigatório'),
  email: yup.string().required('Campo obrigatório').email('E-mail inválido'),
  cpf: yup
    .string()
    .required('Campo obrigatório')
    .test('cpf', 'CPF inválido', (value) => {
      let teste = false;
      if (typeof value !== 'undefined') {
        teste = validarCPFCnpj(value);
      }

      return teste;
    }),
  phone: yup.string().required('Campo obrigatório'),
  sexo: yup.string().required('Campo obrigatório'),
  data_nascimento: yup
    .string()
    .required('Campo obrigatório')
    .test('cpf', 'Data inválida', (value) => {
      let teste = false;
      if (typeof value !== 'undefined') {
        teste = validarDate(value);
      }

      return teste;
    }),
  cep: yup.string().required('Campo obrigatório'),
  endereco: yup.string().required('Campo obrigatório'),
  cidade: yup.string().required('Campo obrigatório'),
  bairro: yup.string().required('Campo obrigatório'),
  nome_da_mae: yup.string().required('Campo obrigatório'),
  senha: yup.string().required('Campo obrigatório'),
});

export default validationSchema;
