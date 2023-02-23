import { api } from "../api";
import { Pokemon, pokemonProps } from "./Pokemon.interfaces";

const limit = 8;

export const getAllPokemons = async (): Promise<pokemonProps[]> => {
  const { data } = await api.get("/pokemon", {
    params: {
      limit: limit,
    },
  });
  return data.results;
};

export const getPokemon = async (id: number | string): Promise<Pokemon> => {
  const { data } = await api.get(`/pokemon/${id}`);
  return data;
};
