import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PokemonScreen from '../screens/Pokemon';
import PokedexScreen from '../screens/Podekex';

const Stack = createNativeStackNavigator();

export default function PokedexNavigation() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Pokedex" component={PokedexScreen} />
      <Stack.Screen name="Pokemon" component={PokemonScreen} />
    </Stack.Navigator>
  );
}
