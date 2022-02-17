import {SafeAreaView, Text} from 'react-native';
import React, {useState, useEffect} from 'react';
import {getPokemonApi} from '../api/pokemon';

export default function Podekex() {
  const [pokemons, setPokemons] = useState([]);
  useEffect(() => {
    getPokemonApi()
      .then(res => console.log('res', res))
      .catch(e => console.log(e));
  }, []);
  return (
    <SafeAreaView>
      <Text>Podekex</Text>
    </SafeAreaView>
  );
}
