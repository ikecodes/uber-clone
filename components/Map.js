import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import MapView, { Marker } from 'react-native-maps';
import tw from 'tailwind-react-native-classnames';
import MapViewDirections from 'react-native-maps-directions';
import { GOOGLE_PLACES_APIKEY } from '@env';
const Map = () => {
  const origin = useSelector((state) => state.nav.origin);
  const destination = useSelector((state) => state.nav.destination);
  const mapRef = useRef(null);
  useEffect(() => {
    if (!origin && !destination) return;

    mapRef.current.fitToSuppliedMarkers(['origin', 'destination'], {
      edgePadding: { top: 50, right: 50, left: 50, bottom: 50 },
    });
  }, [origin, destination]);
  return (
    <MapView
      ref={mapRef}
      mapType='mutedStandard'
      style={tw`flex-1`}
      initialRegion={{
        latitude: origin?.location.lat,
        longitude: origin?.location.lng,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }}
    >
      {origin && destination && (
        <MapViewDirections
          origin={origin.description}
          destination={destination.description}
          key={GOOGLE_PLACES_APIKEY}
          strokeColor='black'
          strokeWidth={3}
        />
      )}
      {origin?.location && (
        <Marker
          coordinate={{
            latitude: origin?.location.lat,
            longitude: origin?.location.lng,
          }}
          title='Origin'
          description={origin.description}
          identifier='origin'
        />
      )}
      {destination?.location && (
        <Marker
          coordinate={{
            latitude: origin?.location.lat,
            longitude: origin?.location.lng,
          }}
          title='Origin'
          description={origin.description}
          identifier='destination'
        />
      )}
    </MapView>
  );
};

export default Map;
