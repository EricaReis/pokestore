export interface pokemonProps {
  name: string;
  url: string;
}

export type Specie = {
  color: string;
  description: string;
  specie: string;
  habitat: string | null;
  evolutionId: number;
};

export type PokemonType =
  | "bug"
  | "dark"
  | "dragon"
  | "electric"
  | "fairy"
  | "fighting"
  | "fire"
  | "flying"
  | "ghost"
  | "grass"
  | "ground"
  | "ice"
  | "normal"
  | "poison"
  | "psychic"
  | "rock"
  | "steel"
  | "water";

export type Pokemon = {
  id: number;
  name: string;
  imageUrl: string;
  height: number;
  weight: number;
  stats: { name: string; baseStat: number }[];
  types: PokemonType[];
  specie: Specie | null;
  abilities: {
    name: string;
    isHidden: boolean;
  }[];
};
