import api from '~/services/api';

export async function listAll(zipCode, lat, long) {
  const res = await api.get(
    `clientes/list-all?cep=${zipCode}&lat=${lat}&long=${long}`
  );
  return res;
}

export async function list(zipCode, lat, long) {
  const res = await api.get(`clientes?cep=${zipCode}&lat=${lat}&long=${long}`, {
    all: true,
  });
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
