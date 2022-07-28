import axios from 'axios';

import AsyncStorage from '@react-native-async-storage/async-storage';
import jwt_decode from 'jwt-decode';

export const authNumber = '94717536777';

// this api call get the sessioninfo needed for for siging in user
export const getVerificationcode = async phoneNumber => {
  try {
    const res = await axios.get(
      `/Test/VerificationCode?phoneNumber=${phoneNumber}`,
    );
    return res.data.sessionInfo;
  } catch (error) {
    console.log(error);
  }
};

// store session info for future use.
const storeVerificationToken = async value => {
  try {
    await AsyncStorage.setItem('sessionInfo', value);
  } catch (error) {
    console.log(error);
  }
};

export const signInWithPhoneNumber = async (sessionInfo, code) => {
  try {
    const res = await axios.get(
      `/Test/SignInWithPhoneNumber?sessionInfo=${sessionInfo}&code=${code}`,
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

const storeAuthToken = async value => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem('authTokens', jsonValue);
  } catch (e) {
    console.log(e);
  }
};

const getAuthToken = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('authTokens');
    // if we have token on device
    if (jsonValue !== null) {
      let authTokens = JSON.parse(jsonValue);
      console.log('got from local storage');
      return authTokens;
    } else {
      console.log('got from local server');

      // if token has not beeen stored on the device
      console.log('token is emply let create and store');
      //   we get session info
      const sessionInfo = await getVerificationcode(authNumber);
      //   store it for future use
      await storeVerificationToken(sessionInfo);
      //   we use session info to get auth token and signIn user
      const tokenRes = await signInWithPhoneNumber(sessionInfo, 123456);
      //    stores the token for future use
      await storeAuthToken(tokenRes);
      //  return the token to be use for auth
      return tokenRes;
    }
  } catch (e) {
    // error reading value
    console.log(e);
  }
};

const setHeaders = async token => {
  axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
};

export const initBaseurl = async url => {
  axios.defaults.baseURL = url;
};

export const loadToken = async () => {
  // retrive stores token from the device
  try {
    const authToken = await getAuthToken();

    const {idToken} = authToken;

    const decodedToken = jwt_decode(idToken);
    if (decodedToken.exp * 1000 < Date.now()) {
      console.log('Token expired');
      await AsyncStorage.removeItem('authTokens');
      loadToken();
    } else {
      await setHeaders(idToken);
      if (axios.defaults.headers.common.Authorization !== undefined) {
        console.log('Header set');
      } else {
        console.log('Header is mising');
      }
      // console.log('token header ', axios.defaults.headers.common.Authorization);
    }
  } catch (error) {
    console.log(error);
  }
};

// add popular search to the lis
export const addFrequentSearch = async value => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem('frequentSearch', jsonValue);
  } catch (e) {
    console.log(e);
  }
};
// get popular search from the lis

export const getFrequentSearch = async () => {
  let frequentSearch = [];
  try {
    const jsonValue = await AsyncStorage.getItem('frequentSearch');
    // if we have token on device
    if (jsonValue !== null) {
      frequentSearch = JSON.parse(jsonValue);
    }
    return frequentSearch;
  } catch (e) {
    // error reading value
    console.log(e);
    return frequentSearch;
  }
};
