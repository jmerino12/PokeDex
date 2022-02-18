import {SafeAreaView, Text} from 'react-native';
import React from 'react';

export default function Pokemon(props) {
  const {navigation, route} = props;
  console.log(props);
  return (
    <SafeAreaView>
      <Text>Pokemon</Text>
    </SafeAreaView>
  );
}
