import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {addPokemonFavoriteApi, isPokemonFavoriteApi} from '../../api/favorite';

export default function Favorite(props) {
  const {id} = props;
  const [isFavorite, setIsFavorite] = useState(undefined);
  console.log(isFavorite);

  useEffect(() => {
   (async () => {
      try {
        const response = await isPokemonFavoriteApi(id);
        setIsFavorite(response);
      } catch (error) {
        setIsFavorite(false);
      }
    })();
  }, [id]);

  const addFavorite = async () => {
    const result = await addPokemonFavoriteApi(id);
    setIsFavorite(result);
  };

  const removeFavorite = () => {
    console.log('eliminando');
  };

  return (
    <Icon
      name="heart"
      color="#fff"
      size={20}
      onPress={isFavorite ? removeFavorite : addFavorite}
      solid={isFavorite}
      style={{marginRight: 20}}
    />
  );
}
