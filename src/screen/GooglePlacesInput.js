import React, { useEffect, useRef } from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const GooglePlacesInput = () => {
  const ref = useRef();

  useEffect(() => {
    ref.current?.setAddressText('Some Text');
  }, []);

  return (
    <GooglePlacesAutocomplete
      placeholder="Search Locaation"
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
          console.log(data, details);
          console.log('*****************************************************');
      }}
      query={{
        key: 'AIzaSyAc9FFf52q8PJMSOb82S1BeIii8u8GfPBs',
        language: 'en',
      }}
    />
  );
};

export default GooglePlacesInput;