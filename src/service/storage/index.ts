import { AnyObject } from 'antd/es/_util/type';
import { ENUM_KEY_LOCAL_STORAGE } from '../../enum';

export const removeStorage = (key: ENUM_KEY_LOCAL_STORAGE) => {
  localStorage.removeItem(key);
};

export const setStorage = (key: ENUM_KEY_LOCAL_STORAGE, value: string) => {
  localStorage.setItem(key, value);
};

export const getStorage = (key: ENUM_KEY_LOCAL_STORAGE): string | null => {
  return localStorage.getItem(key);
};

export const removeObjectStorage = (key: ENUM_KEY_LOCAL_STORAGE) => {
  localStorage.removeItem(key);
};

export const setObjectStorage = (key: ENUM_KEY_LOCAL_STORAGE, value: AnyObject) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getObjectStorage = (key: ENUM_KEY_LOCAL_STORAGE) => {
  const value = localStorage.getItem(key);
  if (value !== null) {
    return JSON.parse(value);
  }
  return value;
};
