import api from '~/services/api';

export async function list() {
  const res = await api.get('clientes');
  return res;
}

export async function listServices() {
  const res = await api.get('clientes/getAllServices');
  return res;
}

export async function createAnamnese(data) {
  const res = await api.post('pacientes/createAnamnese', data);
  console.log(data);
  return res;
}
