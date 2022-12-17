import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Image,
  ViewStyle,
  StyleProp,
} from "react-native";
import React from "react";
import { pokemonDetailAdaptedI } from "../../interfaces/pokemonInterface";
import { getColorByPokemonType } from "../../utils/getColorByPokemonType";
import { capitalize } from "lodash";
import { useAppNavigation } from "../../hooks/useAppNavigation";
interface PokemonCardPropsI {
  pokemon: pokemonDetailAdaptedI;
}

export const PokemonCard = ({ pokemon }: PokemonCardPropsI) => {
  const navigation = useAppNavigation<'pokemon'>();
  const onClick = () => navigation.navigate("pokemon", { id: pokemon.id });
  const bgStyles: StyleProp<ViewStyle> = {
    ...styles.bgStyles,
    backgroundColor: getColorByPokemonType(pokemon.types[0]),
  };
  return (
    <TouchableWithoutFeedback onPress={onClick}>
      <View style={styles.card}>
        <View style={styles.spacing}>
          <View style={bgStyles}>
            <Image source={{ uri: pokemon.image }} style={styles.image} />
            <Text style={styles.number}>
              #{`${pokemon.order}`.padStart(3, "0")}
            </Text>
            <Text style={styles.name}>{capitalize(pokemon.name)}</Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    height: 145,
  },
  spacing: {
    flex: 1,
    padding: 5,
  },
  bgStyles: {
    borderRadius: 15,
    flex: 1,
    padding: 10,
  },
  image: {
    position: "absolute",
    bottom: 2,
    right: 2,
    height: 90,
    width: 90,
  },
  name: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#fff",
  },
  number: {
    position: "absolute",
    right: 10,
    top: 10,
    color: "#fff",
    fontSize: 11,
  },
});
