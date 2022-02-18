import Config from 'react-native-config';

export async function getPokemonApi(endPointUrl) {
  try {
    const url = `${Config.API_URL}pokemon?limit=20&offset=0`;
    const response = await fetch(endPointUrl || url);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}

export async function getPokemonDetailsByUrlApi(url) {
  try {
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}
