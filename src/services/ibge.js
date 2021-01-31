import axios from 'axios';

export async function getStates() {
  const res = await axios.get(
    'https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome'
  );
  return res;
}

export async function getCity(uf) {
  const res = await axios.get(
    `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios?orderBy=nome`
  );
  return res;
}
export async function getCityById(id) {
  const res = await axios.get(
    `https://servicodados.ibge.gov.br/api/v1/localidades/municipios/${id}`
  );
  return res;
}

export async function getStateById(id) {
  const res = await axios.get(
    `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${id}`
  );
  return res;
}
