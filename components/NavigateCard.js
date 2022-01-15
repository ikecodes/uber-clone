import React from 'react';
import { useDispatch } from 'react-redux';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { setDestination } from '../slices/navSlice';
import tw from 'tailwind-react-native-classnames';
import { GOOGLE_PLACES_APIKEY } from '@env';
import { useNavigation } from '@react-navigation/native';

const NavigateCard = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  return (
    <SafeAreaView style={tw`flex-1 bg-white`}>
      <Text style={tw`text-center text-xl py-5`}>Good morning, Ike</Text>
      <View style={tw`border-t border-gray-200  flex-shrink`}>
        <View>
          <GooglePlacesAutocomplete
            placeholder='Where to?'
            styles={inputStylesContainer}
            onPress={(data, details = null) => {
              dispatch(
                setDestination({
                  location: details.geometry.location,
                  description: data.description,
                })
              );
              navigation.navigate('RideOptionsCard');
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
        </View>
      </View>
    </SafeAreaView>
  );
};

export default NavigateCard;

const inputStylesContainer = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingTop: 20,
    flex: 0,
  },
  textInput: {
    borderRadius: 0,
    fontSize: 18,
    backgroundColor: '#DDDDDF',
  },
  textInputContainer: {
    paddingHorizontal: 20,
    paddingBottom: 0,
  },
});
