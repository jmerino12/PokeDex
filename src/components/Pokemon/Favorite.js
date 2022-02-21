import {View, Text} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {addPokemonFavoriteApi, getPokemosFavoriteApi} from '../../api/favorite';

export default function Favorite(props) {
  const {id} = props;

  const addFavorite = async () => {
    await addPokemonFavoriteApi(id);
  };

  return (
    <Icon
      name="heart"
      color="#fff"
      size={20}
      onPress={addFavorite}
      style={{marginRight: 20}}
    />
  );
}
