import api from "../api";
import { pokemonProps } from "../pokemon/pokemonService.types";

const limit = 800;

export const getAllPokemons = async (): Promise<pokemonProps[]> => {
  const { data } = await api.get("/pokemon", {
    params: {
      limit: limit,
    },
  });
  return data.results;
};

export const getPokemon = async (id: number | string): Promise<any> => {
  const { data } = await api.get(`/pokemon/${id}`);
  return data;
};
