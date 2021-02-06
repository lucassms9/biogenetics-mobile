import axios from 'axios';

export async function getStates() {
  const {
    data: { geonames },
  } = await axios.get('http://www.geonames.org/childrenJSON?geonameId=3469034');

  const handle = geonames.map((geo) => ({
    id: geo.geonameId,
    nome: geo.name,
  }));

  return { data: handle };
}

export async function getCity(uf) {
  const {
    data: { geonames },
  } = await axios.get(`http://www.geonames.org/childrenJSON?geonameId=${uf}`);

  const handle = geonames.map((geo) => ({
    id: geo.name,
    nome: geo.name,
  }));

  return { data: handle };
}
export async function getCityById(id) {
  const res = await axios.get(
    `https://servicodados.ibge.gov.br/api/v1/localidades/municipios/${id}`
  );
  return res;
}

export async function getStateById(id) {
  const {
    data: { geonames },
  } = await axios.get(`http://www.geonames.org/childrenJSON?geonameId=${id}`);

  const handle = {
    sigla: geonames[0].adminCodes1.ISO3166_2,
  };

  return { data: handle };
}
