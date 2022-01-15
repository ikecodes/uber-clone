import React from 'react';
import { useDispatch } from 'react-redux';
import { SafeAreaView, Text, View, Image } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import NavOptions from '../components/NavOptions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { setOrigin, setDestination } from '../slices/navSlice';

import { GOOGLE_PLACES_APIKEY } from '@env';
import NavFavorites from '../components/NavFavorites';
const HomeScreen = () => {
  const dispatch = useDispatch();
  return (
    <SafeAreaView style={tw`h-full bg-white`}>
      <View style={tw`p-5`}>
        <Image
          style={{ height: 100, width: 100, resizeMode: 'contain' }}
          source={{ uri: 'http://links.papareact.com/gzs' }}
        />
        <GooglePlacesAutocomplete
          placeholder='Where from?'
          styles={{
            container: {
              flex: 0,
            },
            text: {
              fontSize: 18,
            },
          }}
          onPress={(data, details = null) => {
            dispatch(
              setOrigin({
                location: details.geometry.location,
                description: data.description,
              })
            );
            dispatch(setDestination(null));
          }}
          minLength={2}
          enablePoweredByContainer={false}
          fetchDetails={true}
          nearbyPlacesAPI='GooglePlacesSearch'
          returnKeyType={'search'}
          debounce={400}
          query={{
            key: GOOGLE_PLACES_APIKEY,
            language: 'en',
          }}
        />

        <NavOptions />
        <NavFavorites />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
