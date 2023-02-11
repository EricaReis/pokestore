import { api } from "../api";
import { pokemonProps } from "./Items.interfaces";

export const getAllPokemons = async (): Promise<pokemonProps> => {
  const { data } = await api.get("/pokemon");
  return data.results;
};

export const getPokemon = async (id: number): Promise<any> => {
  const { data } = await api.get(`/pokemon/${id}`);
  return data;
};
