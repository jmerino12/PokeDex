import AsyncStorage from '@react-native-async-storage/async-storage';
import {includes, pull} from 'lodash';
import {FAVORITE_STORAGE} from '../utils/constans';

export async function getPokemonsFavoriteApi() {
  try {
    const response = await AsyncStorage.getItem(FAVORITE_STORAGE);
    return JSON.parse(response || JSON.stringify([]));
  } catch (error) {
    throw error;
  }
}

export async function addPokemonFavoriteApi(id) {
  try {
    const favorites = await getPokemonsFavoriteApi();
    favorites.push(id);
    await AsyncStorage.setItem(FAVORITE_STORAGE, JSON.stringify(favorites));
    return true;
  } catch (error) {
    throw error;
  }
}

export async function isPokemonFavoriteApi(id) {
  try {
    const response = await getPokemonsFavoriteApi();
    return includes(response, id);
  } catch (error) {
    throw error;
  }
}
