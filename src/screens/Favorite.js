import {Button, SafeAreaView, Text} from 'react-native';
import React from 'react';
import {getPokemosFavoriteApi} from '../api/favorite';

export default function Favorite() {
  return (
    <SafeAreaView>
      <Button
        title="Favoritos"
        onPress={() => console.log(getPokemosFavoriteApi)}
      />
    </SafeAreaView>
  );
}
