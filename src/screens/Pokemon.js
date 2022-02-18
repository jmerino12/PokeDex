import {SafeAreaView, Text} from 'react-native';
import React, {useState, useEffect} from 'react';
import { getPokemonDetailsByIdApi} from '../api/pokemon';

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
  if (!pokemons) return null;
  return (
    <SafeAreaView>
      <Text>Pokemon</Text>
      <Text>{pokemons.name}</Text>
    </SafeAreaView>
  );
}
