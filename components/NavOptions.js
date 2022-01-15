import React from 'react';
import { useSelector } from 'react-redux';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { useNavigation } from '@react-navigation/native';
import { Icon } from 'react-native-elements';
import { selectOrigin } from '../slices/navSlice';
const data = [
  {
    id: '123',
    title: 'Get a ride',
    image: 'http://links.papareact.com/3pn',
    screen: 'MapScreen',
  },
  {
    id: '456',
    title: 'order food',
    image: 'http://links.papareact.com/28w',
    screen: 'EatsScreen',
  },
];
const NavOptions = () => {
  const navigation = useNavigation();
  const origin = useSelector(selectOrigin);
  return (
    <FlatList
      data={data}
      horizontal
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={tw`bg-gray-200 p-2 pl-6 pb-8 pt-4 w-40 m-2`}
          onPress={() => navigation.navigate(item.screen)}
          disabled={!origin}
        >
          <View style={tw`${!origin && 'opacity-20'}`}>
            <Image
              style={{ height: 120, width: 120, resizeMode: 'contain' }}
              source={{ uri: item.image }}
            />
            <Text style={tw`font-semibold text-lg`}>{item.title}</Text>
            <Icon
              style={tw`rounded-full bg-black w-10 p-2 m-2`}
              type='antdesign'
              color='white'
              name='arrowright'
            />
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavOptions;
