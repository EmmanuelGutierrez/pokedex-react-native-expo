import {
  pokemonTypesType,
  POKEMON_TYPE_COLORS,
} from "../constants/pokemonsTypes";

export const getColorByPokemonType = (type: string) => {
  if (type in POKEMON_TYPE_COLORS)
    return POKEMON_TYPE_COLORS[type as pokemonTypesType];
  else return POKEMON_TYPE_COLORS["normal"];
};
