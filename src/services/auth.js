import api from '~/services/api';

export async function signIn(email, senha) {
  const res = await api.post('auth/login', {
    email,
    senha,
  });
  return res;
}

export async function signUp(data) {
  const res = await api.post('auth/add', data);
  return res;
}

export async function recover(email) {
  const res = await api.post('auth/recover', {
    email,
  });
  return res;
}

export async function getProfile() {
  const res = await api.get('pacientes/edit');
  return res;
}

export async function edit(data) {
  const res = await api.post('pacientes/edit', data);
  return res;
}
