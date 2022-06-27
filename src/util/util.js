import Geolocation from 'react-native-geolocation-service';
import {Permission, PermissionsAndroid, Alert, Platform} from 'react-native';
export const baseUrl = 'http://164.52.219.97/Grochouse_V2/api';
import Geocoder from 'react-native-geocoder';

const hasPermissionIOS = async () => {
  const status = await Geolocation.requestAuthorization('whenInUse');

  if (status === 'granted') {
    return true;
  }

  if (status === 'denied') {
    Alert.alert(
      `Permission Denied  go into Setting and enable location for "${appConfig.displayName}"`,
    );
  }

  if (status === 'disabled') {
    Alert.alert(
      `Turn on Location Services to allow "${appConfig.displayName}" to determine your location.`,
      '',
      [
        {text: 'Go to Settings', onPress: Linking.openSettings()},
        {text: "Don't Use Location", onPress: () => {}},
      ],
    );
  }

  return false;
};

export const hasLocationPermission = async () => {
  if (Platform.OS === 'ios') {
    const hasPermission = await hasPermissionIOS();
    return hasPermission;
  }

  if (Platform.OS === 'android' && Platform.Version < 23) {
    return true;
  }

  const hasPermission = await PermissionsAndroid.check(
    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
  );

  if (hasPermission) {
    return true;
  }

  const status = await PermissionsAndroid.request(
    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
  );

  if (status === PermissionsAndroid.RESULTS.GRANTED) {
    return true;
  }

  if (status === PermissionsAndroid.RESULTS.DENIED) {
    Alert.alert(
      `Permission Denied  go into Setting and enable location for "${appConfig.displayName}"`,
    );
  } else if (status === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN) {
    Alert.alert(
      `Permission revoked by user go into Setting and enable location for "${appConfig.displayName}"`,
    );
  }

  return false;
};

export const decodeLocationByCoordinates = async position => {
  var address = null;
  try {
    const res = await Geocoder.geocodePosition(position);
    if (res?.length > 0) address = res[0];

    return address;
  } catch (error) {
    console.log(error);
    return address;
  }
};
