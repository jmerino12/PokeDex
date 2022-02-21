import {SafeAreaView, Text} from 'react-native';
import React, {useState} from 'react';
import {getPokemosFavoriteApi} from '../api/favorite';

export default function Favorite() {
  const [favorite, setFavorites] = useState();
  useEffect(() => {
    async () => {
      const response = await getPokemosFavoriteApi();
    };
  }, []);

  return (
    <SafeAreaView>
      <Text>Favorite</Text>
    </SafeAreaView>
  );
}
