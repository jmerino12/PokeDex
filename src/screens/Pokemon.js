import {ScrollView} from 'react-native';
import React, {useState, useEffect} from 'react';
import {getPokemonDetailsByIdApi} from '../api/pokemon';
import Header from '../components/Pokemon/Header';
import Type from '../components/Pokemon/Type';
import Stats from '../components/Pokemon/Stats';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function Pokemon(props) {
  const {
    navigation,
    route: {params},
  } = props;
  const [pokemons, setPokemon] = useState(null);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => null,
      headerLeft: () => (
        <Icon
          name="arrow-left"
          color="#fff"
          size={20}
          style={{marginLef: 20}}
          onPress={() => navigation.goBack()}
        />
      ),
    });
  }, [navigation, params]);

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
