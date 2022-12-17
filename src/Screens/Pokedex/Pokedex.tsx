import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useEffect, useState } from "react";
import { getPokemonsApi, getPokemonsDetailByUrlApi } from "../../api/pokemon";
import { pokemonDetailAdaptedI } from "../../interfaces/pokemonInterface";
import { PokemonList } from "../../components/PokemonList";

export const Pokedex = () => {
  const [pokemons, setPokemons] = useState<pokemonDetailAdaptedI[]>([]);
  const [nextUrl, setNextUrl] = useState<undefined | string>();
  const [loading, setLoading] = useState(false);

  const loadPokemons = async () => {
    setLoading(true);
    try {
      const response = await getPokemonsApi(nextUrl);
      setNextUrl(response.next);
      const pokemonsArray = [];
      for await (const pokemon of response.results) {
        const pokemonDetail = await getPokemonsDetailByUrlApi(pokemon.url);
        pokemonsArray.push({
          id: pokemonDetail.id,
          name: pokemonDetail.name,
          types: pokemonDetail.types.map((type) => type.type.name),
          order: pokemonDetail.order,
          image: pokemonDetail.sprites.other["official-artwork"].front_default,
        });
      }
      setPokemons([...pokemons, ...pokemonsArray]);
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    (async () => {
      await loadPokemons();
    })();

    /* return () => {
      console.log("Cerrar");
    }; */
  }, []);

  return (
    <SafeAreaView>
      <PokemonList
        loadPokemons={loadPokemons}
        pokemons={pokemons}
        isNext={nextUrl}
        loading={loading}
      />
    </SafeAreaView>
  );
};
