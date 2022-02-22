import {FlatList, Text, StyleSheet, Platform} from 'react-native';
import React, { useState, useCallback} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import {getPokemonsFavoriteApi} from '../api/favorite';
import useAuth from '../hooks/useAuth';
import {getPokemonDetailsByIdApi} from '../api/pokemon';
import PokemonCard from '../components/PokemonCard';

export default function Favorite() {
  const [pokemons, setPokemons] = useState([]);
  const {auth} = useAuth();

  useFocusEffect(
    useCallback(() => {
      (async () => {
        if (auth) {
          const response = await getPokemonsFavoriteApi();
          console.log(response);
          const pokemonsArray = [];
          for await (const pokemon of response) {
            const pokemonDetails = await getPokemonDetailsByIdApi(pokemon);

            pokemonsArray.push({
              id: pokemonDetails.id,
              name: pokemonDetails.name,
              type: pokemonDetails.types[0].type.name,
              order: pokemonDetails.order,
              image:
                pokemonDetails.sprites.other['official-artwork'].front_default,
            });
          }
          setPokemons(pokemonsArray);
        }
      })();
    }, [auth]),
  );

  return !auth ? (
    <Text>Usuario no logueado</Text>
  ) : (
    <FlatList
      numColumns={2}
      contentContainerStyle={styles.flatListContentContainer}
      data={pokemons}
      keyExtractor={pokemon => String(pokemon.name)}
      renderItem={({item}) => <PokemonCard pokemon={item} />}
      onEndReachedThreshold={0.1}
    />
  );
}

const styles = StyleSheet.create({
  flatListContentContainer: {
    paddingHorizontal: 5,
    marginTop: Platform.OS === 'android' ? 30 : 0,
  },
  spinner: {
    marginTop: 20,
    marginBottom: Platform.OS === 'android' ? 90 : 60,
  },
});
