import { useFocusEffect } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { useCallback, useEffect, useState } from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { getPokemonFavoriteApi } from "../../api/favorites";
import { getPokemonDetailsApi } from "../../api/pokemon";
import { NoLogged } from "../../components/NoLogged/NoLogged";
import { PokemonList } from "../../components/PokemonList";
import { useAuth } from "../../hooks/useAuth";
import { pokemonDetailAdaptedI } from "../../interfaces/pokemonInterface";
export const Favorites = () => {
  const [pokemons, setPokemons] = useState<pokemonDetailAdaptedI[]>([]);
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();

  useFocusEffect(
    useCallback(() => {
      (async () => {
        if (user) {
          const response = await getPokemonFavoriteApi();
          const pokemonsArray = [];
          for await (const id of response) {
            const pokemonDetail = await getPokemonDetailsApi(id);
            pokemonsArray.push({
              id: pokemonDetail.id,
              name: pokemonDetail.name,
              types: pokemonDetail.types.map((type) => type.type.name),
              order: pokemonDetail.order,
              image:
                pokemonDetail.sprites.other["official-artwork"].front_default,
            });
          }
          setPokemons([...pokemonsArray]);
        }
        console.log(pokemons);
      })();
    }, [user])
  );

  return !user ? (
    <NoLogged/>
  ) : (
    <PokemonList loading={loading} pokemons={pokemons} />
  );
};
