import AsyncStorage from '@react-native-async-storage/async-storage';

export type StorageKeys = 'userData';

export const getDataFromAsyncStorage = async (key: StorageKeys) => {
  return await AsyncStorage.getItem(key);
};

export const setDataToAsyncStorage = async (
  key: StorageKeys,
  value: unknown,
) => {
  return await AsyncStorage.setItem(key, JSON.stringify(value));
};

export const removeDataFromAsyncStorage = async (key: StorageKeys) =>
  await AsyncStorage.removeItem(key);
