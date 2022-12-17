import { View, Text } from "react-native";
import React, { useState, useEffect } from "react";
import Icon from "react-native-vector-icons/FontAwesome5";
import {
  addPokemonFavoriteApi,
  isPokemonFavoriteApi,
  removePokemonFavoriteApi,
} from "../../api/favorites";

interface FavoritePropsI {
  id: number;
}

export const Favorite = ({ id }: FavoritePropsI) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [reloadCheck, setReloadCheck] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const response = await isPokemonFavoriteApi(id);
        console.log("response", response);
        setIsFavorite(response);
      } catch (error) {
        setIsFavorite(false);
      }
    })();
  }, [id, reloadCheck]);

  const onReloadCheckFavorite = () => setReloadCheck(!reloadCheck);

  const addFavorite = () => {
    (async () => {
      try {
        await addPokemonFavoriteApi(id);
        onReloadCheckFavorite();
      } catch (error) {
        console.log(error);
      }
    })();
  };

  const removeFavorite = () => {
    (async () => {
      try {
        await removePokemonFavoriteApi(id);
        onReloadCheckFavorite();
      } catch (error) {
        console.log(error);
      }
    })();
  };

  return (
    <Icon
      name="heart"
      color="#fff"
      solid={isFavorite}
      size={20}
      onPress={isFavorite ? removeFavorite : addFavorite}
      style={{ marginRight: 20 }}
    />
  );
};
