import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FavoriteScreen from '../screens/Favorite';
import PodekexScreen from '../screens/Podekex';
import AccountScreen from '../screens/Account';

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="Favorite" component={FavoriteScreen} />
      <Tab.Screen name="Podekex" component={PodekexScreen} />
      <Tab.Screen name="Account" component={AccountScreen} />
    </Tab.Navigator>
  );
}
