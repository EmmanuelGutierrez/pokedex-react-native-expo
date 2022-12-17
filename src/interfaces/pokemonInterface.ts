import { pokemonTypesType } from "../constants/pokemonsTypes";

export interface pokemonType {
  type: {
    name: pokemonTypesType;
    url: string;
  };
}

export interface pokemonStat {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
}

export interface pokemonDetailI {
  id: number;
  name: string;
  types: pokemonType[];
  order: number;
  stats: pokemonStat[];
  sprites: {
    other: {
      "official-artwork": {
        front_default: string;
      };
    };
  };
}

export interface pokemonDetailAdaptedI {
  id: number;
  name: string;
  order: number;
  image: string;
  types: pokemonTypesType[];
}
