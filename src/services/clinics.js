import api from '~/services/api';

export async function list() {
  const res = await api.get('clientes');

  return res;
}
