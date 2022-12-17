import { config } from "../config/config";
import {
  pokemonDetailAdaptedI,
  pokemonDetailI,
} from "../interfaces/pokemonInterface";

export async function getPokemonsApi(nextUrl?: string) {
  try {
    const url = nextUrl ?? `${config.apiUrl}/pokemon?limit=20&offset=0`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (e) {
    throw e;
  }
}

export async function getPokemonsDetailByUrlApi(url: string) {
  try {
    const response = await fetch(url);
    const result: pokemonDetailI = await response.json();
    return result;
  } catch (e) {
    throw e;
  }
}

export async function getPokemonDetailsApi(id: number) {
  try {
    const response = await fetch(`${config.apiUrl}/pokemon/${id}`);
    const result: pokemonDetailI = await response.json();
    return result;
  } catch (e) {
    throw e;
  }
}
