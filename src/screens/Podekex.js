import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import {getPokemonApi, getPokemonDetailsByUrlApi} from '../api/pokemon';

export default function Podekex() {
  const [pokemons, setPokemons] = useState([]);
  console.log(pokemons);
  useEffect(() => {
    getPokemonApi()
      .then(res => setPokemons(res.results))
      .catch(e => console.log(e));
  }, []);

  const renderItem = ({item}) => {
    return (
      <View>
        <Text>{item.name}</Text>
      </View>
    );
  };
  return (
    <SafeAreaView>
      <FlatList
        numColumns={2}
        contentContainerStyle={styles.flatListContentContainer}
        data={pokemons}
        keyExtractor={pokemon => String(pokemon.name)}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  flatListContentContainer: {
    paddingHorizontal: 5,
  },
});
