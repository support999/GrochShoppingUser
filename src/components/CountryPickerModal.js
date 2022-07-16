import React, {useState} from 'react';
import {View, Text, StyleSheet, PixelRatio, Switch} from 'react-native';
import CountryPicker from 'react-native-country-picker-modal';

const styles = StyleSheet.create({
  // ...
});

export default function CountryPickerModal(props) {
  const {setCountry, visible, setCountryCallingCode} = props;
  const [countryCode, setCountryCode] = useState('IN');
  const [withCountryNameButton, setWithCountryNameButton] = useState(false);
  const [withFlag, setWithFlag] = useState(true);
  const [withEmoji, setWithEmoji] = useState(true);
  const [withFilter, setWithFilter] = useState(true);
  const [withAlphaFilter, setWithAlphaFilter] = useState(true);
  const [withCallingCode, setWithCallingCode] = useState(false);
  const onSelect = country => {
    setCountry(country.name);
    setCountryCode(country.cca2);
    setCountryCallingCode('+' + country.callingCode);
  };
  return (
    <CountryPicker
      {...{
        countryCode,
        withFilter,
        withFlag,
        withCountryNameButton,
        withAlphaFilter,
        withCallingCode,
        withEmoji,
        onSelect,
      }}
      visible={visible}
    />
  );
}
