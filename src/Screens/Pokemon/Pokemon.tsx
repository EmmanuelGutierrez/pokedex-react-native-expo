import { View, ScrollView, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome5";
import { CommonPropsI } from "../../Navigation/NavigationTabs";
import { pokemonDetailI } from "../../interfaces/pokemonInterface";
import { getPokemonDetailsApi } from "../../api/pokemon";
import { Header } from "../../components/Pokemon/Header";
import { Types } from "../../components/Pokemon/Types";
import { Stats } from "../../components/Pokemon/Stats";
import { Favorite } from "../../components/Pokemon/Favorite";
import { useAuth } from "../../hooks/useAuth";

interface PokemonPropsI extends CommonPropsI<"pokemon"> {}

export const Pokemon = ({ navigation, route: { params } }: PokemonPropsI) => {
  const [pokemon, setPokemon] = useState<pokemonDetailI>();
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const res = await getPokemonDetailsApi(params.id);
        setPokemon(res);
      } catch (e) {
        navigation.goBack();
      }
      setLoading(false);
    })();
  }, [params]);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => user && pokemon && <Favorite id={pokemon.id} />,
      headerLeft: () => (
        <Icon
          name="arrow-left"
          color={"#fff"}
          size={20}
          style={{ marginLeft: 20 }}
          onPress={() =>navigation.goBack()}
        />
      ),
    });
  }, [params, navigation, user, pokemon]);

  if (!pokemon) return <></>;

  return (
    <View>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <ScrollView>
          <Header
            name={pokemon.name}
            image={pokemon.sprites.other["official-artwork"].front_default}
            order={pokemon.order}
            type={pokemon.types[0].type.name}
          />
          <Types types={pokemon.types} />
          <Stats stats={pokemon.stats} />
        </ScrollView>
      )}
    </View>
  );
};
