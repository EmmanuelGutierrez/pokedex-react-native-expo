import {
  FlatList,
  StyleSheet,
  ActivityIndicator,
  Platform,
} from "react-native";
import React, { useEffect, useState } from "react";
import { pokemonDetailAdaptedI } from "../interfaces/pokemonInterface";
import { PokemonCard } from "./PokemonCard/PokemonCard";

interface PokemonListPropsI {
  pokemons: pokemonDetailAdaptedI[];
  loadPokemons?: () => Promise<void>;
  isNext?: string;
  loading: boolean;
}

export const PokemonList = ({
  pokemons,
  loadPokemons,
  isNext,
  loading,
}: PokemonListPropsI) => {
  const loadMore = () => {
    (async () => !loading && loadPokemons && (await loadPokemons()))();
  };
  return (
    <FlatList
      style={styles.flatContentContainer}
      data={pokemons}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      keyExtractor={(pokemon) => `${pokemon.id}-${pokemon.name}`}
      renderItem={({ item }) => (
        <PokemonCard key={`${item.id}-${item.name}`} pokemon={item} />
      )}
      onEndReached={isNext ? loadMore : undefined}
      onEndReachedThreshold={0.3}
      ListFooterComponent={
        loading ? (
          <ActivityIndicator
            size={"large"}
            style={styles.loader}
            color={"#AEAEAE"}
          />
        ) : (
          <></>
        )
      }
    />
  );
};

const styles = StyleSheet.create({
  flatContentContainer: {
    paddingHorizontal: 5,
  },
  loader: {
    marginTop: Platform.OS === "android" ? 30 : 0,
    marginBottom: Platform.OS === "android" ? 30 : 60,
    color: "black",
  },
});
