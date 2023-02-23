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

export interface Sprites {
  back_default: string | undefined;
  back_female: string | undefined;
  back_shiny: string | undefined;
  back_shiny_female: string | undefined;
  front_default: string | undefined;
  front_female: string | undefined;
  front_shiny: string | undefined;
  front_shiny_female: string | undefined;
}

export interface Types {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

export type Pokemon = {
  id: number;
  name: string;
  sprites: Sprites;
  height: number;
  weight: number;
  stats: { name: string; baseStat: number }[];
  types: Types[];
  species: Specie | null;
  abilities: {
    ability: {
      name: string;
      isHidden: boolean;
    };
  }[];
};
