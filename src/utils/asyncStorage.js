import AsyncStorage from '@react-native-async-storage/async-storage';

const ACCESS_TOKEN = 'user';

export const setAccessToken = async function (value) {
  AsyncStorage.setItem(ACCESS_TOKEN, value);
};

export const getAccessToken = async function () {
  let accessToken = '';
  let token = await AsyncStorage.getItem(ACCESS_TOKEN);
  if (token !== null) accessToken = token;
  return accessToken;
};

export const clearAccessToken = async function () {
  await AsyncStorage.removeItem(ACCESS_TOKEN);
};

export const clearAsync = async function () {
  AsyncStorage.clear();
};
