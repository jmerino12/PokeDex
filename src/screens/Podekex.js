import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  ActivityIndicator,
  Platform,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {getPokemonApi, getPokemonDetailsByUrlApi} from '../api/pokemon';
import PokemonCard from '../components/PokemonCard';

export default function Podekex() {
  const [pokemons, setPokemons] = useState([]);
  const [nextUrl, setNextUrl] = useState(null);
  useEffect(() => {
    (async () => {
      await loadPokemons();
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loadPokemons = async () => {
    try {
      const response = await getPokemonApi(nextUrl);
      console.log(response.next);
      setNextUrl(response.next);
      const pokemonsArray = [];
      for await (const pokemon of response.results) {
        const pokemonDetails = await getPokemonDetailsByUrlApi(pokemon.url);

        pokemonsArray.push({
          id: pokemonDetails.id,
          name: pokemonDetails.name,
          type: pokemonDetails.types[0].type.name,
          order: pokemonDetails.order,
          image: pokemonDetails.sprites.other['official-artwork'].front_default,
        });
      }

      setPokemons([...pokemons, ...pokemonsArray]);
    } catch (error) {
      console.error(error);
    }
  };

  const loadMore = () => {
    loadPokemons();
  };

  return (
    <SafeAreaView>
      <FlatList
        numColumns={2}
        contentContainerStyle={styles.flatListContentContainer}
        data={pokemons}
        keyExtractor={pokemon => String(pokemon.name)}
        renderItem={({item}) => <PokemonCard pokemon={item} />}
        onEndReached={nextUrl && loadMore}
        onEndReachedThreshold={0.1}
        ListFooterComponent={
          nextUrl && <ActivityIndicator size="large" style={styles.spinner} />
        }
      />
    </SafeAreaView>
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
