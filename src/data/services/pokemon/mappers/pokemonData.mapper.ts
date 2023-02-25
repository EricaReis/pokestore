import {
  type IDomainPokemonData,
  type IPersistencePokemonData,
} from '../pokemonService.types';

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class PokemonDataMapper {
  static toDomain(
    persistencePokemon: IPersistencePokemonData
  ): IDomainPokemonData {
    return {
      id: persistencePokemon.id,
      name: persistencePokemon.name.toUpperCase(),
      sprites: persistencePokemon.sprites,
      height: persistencePokemon.height,
      weight: persistencePokemon.weight,
      stats: persistencePokemon.stats,
      types: persistencePokemon.types,
      species: persistencePokemon.species,
      abilities: persistencePokemon.abilities,
    };
  }

  static toPersistence(
    domainPokemon: IDomainPokemonData
  ): IPersistencePokemonData {
    return {
      id: domainPokemon.id,
      name: domainPokemon.name.toLowerCase(),
      sprites: domainPokemon.sprites,
      height: domainPokemon.height,
      weight: domainPokemon.weight,
      stats: domainPokemon.stats,
      types: domainPokemon.types,
      species: domainPokemon.species,
      abilities: domainPokemon.abilities,
    };
  }
}

export default new PokemonDataMapper();
