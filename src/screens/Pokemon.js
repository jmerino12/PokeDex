import {ScrollView} from 'react-native';
import React, {useState, useEffect} from 'react';
import {getPokemonDetailsByIdApi} from '../api/pokemon';
import Header from '../components/Pokemon/Header';
import Type from '../components/Pokemon/Type';
import Stats from '../components/Pokemon/Stats';

export default function Pokemon(props) {
  const {
    navigation,
    route: {params},
  } = props;
  const [pokemons, setPokemon] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await getPokemonDetailsByIdApi(params.id);
        setPokemon(response);
      } catch (error) {
        navigation.goBack();
      }
    })();
  }, [params]);
  if (!pokemons) {
    return null;
  }
  return (
    <ScrollView>
      <Header
        name={pokemons.name}
        order={pokemons.order}
        image={pokemons.sprites.other['official-artwork'].front_default}
        type={pokemons.types[0].type.name}
      />

      <Type types={pokemons.types} />
      <Stats stats={pokemons.stats} />
    </ScrollView>
  );
}
