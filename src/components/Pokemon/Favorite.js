import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {addPokemonFavoriteApi, isPokemonFavoriteApi, removePokemonFavoriteApi} from '../../api/favorite';

export default function Favorite(props) {
  const {id} = props;
  const [isFavorite, setIsFavorite] = useState(undefined);
  const [reloadCheck, setReloadCheck] = useState(false);
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
  }, [id, reloadCheck]);

  const addFavorite = async () => {
    try {
      await addPokemonFavoriteApi(id);
      onReloadCheckFavorite();
    } catch (error) {
      console.log(error);
    }
  };

  const onReloadCheckFavorite = () => {
    setReloadCheck(prev => !prev);
  };

  const removeFavorite = async () => {
    try {
      await removePokemonFavoriteApi(id);
      onReloadCheckFavorite();
    } catch (error) {
      throw error;
    }
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
