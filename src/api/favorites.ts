import AsyncStorage from "@react-native-async-storage/async-storage";
import { FAVORITE_STORAGE } from "../constants/favoriteStorage";

export const getPokemonFavoriteApi = async (): Promise<number[]> => {
  try {
    const response = await AsyncStorage.getItem(FAVORITE_STORAGE);
    return response ? (JSON.parse(response) as number[]) : [];
  } catch (error) {
    throw error;
  }
};

export const addPokemonFavoriteApi = async (id: number) => {
  try {
    const favorites = await getPokemonFavoriteApi();
    !favorites.includes(id) && favorites.push(id);
    await AsyncStorage.setItem(FAVORITE_STORAGE, JSON.stringify(favorites));
  } catch (error) {
    throw error;
  }
};

export const isPokemonFavoriteApi = async (id: number) => {
  try {
    const favorites = await getPokemonFavoriteApi();
    return favorites.includes(id);
  } catch (error) {
    throw error;
  }
};

export const removePokemonFavoriteApi = async (id: number) => {
  try {
    const favorites = await getPokemonFavoriteApi();
    favorites.includes(id) &&
      (await AsyncStorage.setItem(
        FAVORITE_STORAGE,
        JSON.stringify(favorites.filter((fav) => fav !== id))
      ));
  } catch (error) {
    throw error;
  }
};
