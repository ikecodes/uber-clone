import React from 'react';
import { View, Text } from 'react-native';

const NavFavorites = () => {
  const data = [
    {
      id: '123',
      icon: 'home',
      location: 'Home',
      destination: 'No 3 obodoukwu street canal estate okota lagos',
    },
    {
      id: '456',
      icon: 'work',
      location: 'Work',
      destination: 'No 43 bazemore street, meta',
    },
  ];
  return (
    <View>
      <Text>nav NavFavorites</Text>
    </View>
  );
};

export default NavFavorites;
