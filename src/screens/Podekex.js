import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import {getPokemonApi} from '../api/pokemon';
import PokemonCard from '../components/PokemonCard';

export default function Podekex() {
  const [pokemons, setPokemons] = useState([]);
  useEffect(() => {
    getPokemonApi()
      .then(res => setPokemons(res.results))
      .catch(e => console.log(e));
  }, []);

  return (
    <SafeAreaView>
      <FlatList
        numColumns={2}
        contentContainerStyle={styles.flatListContentContainer}
        data={pokemons}
        keyExtractor={pokemon => String(pokemon.name)}
        renderItem={({item}) => <PokemonCard pokemon={item} />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  flatListContentContainer: {
    paddingHorizontal: 5,
  },
});
