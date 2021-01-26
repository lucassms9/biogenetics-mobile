import api from '~/services/api';

export async function signIn(email, senha) {
  const res = await api.post('pacientes/login', {
    email,
    senha,
  });
  return res;
}

export async function signUp(data) {
  const res = await api.post('pacientes/add', {
    ...data,
  });
  return res;
}

export async function recover(email) {
  const res = await api.post('pacientes/recover', {
    email,
  });
  return res;
}
