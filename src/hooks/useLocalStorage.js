import { useState } from "react";

/**
 * This is a custom React hook that allows for easy interaction with the browser's local storage.
 * @returns An object with properties `value`, `setItem`, `removeItem`, and `getItem`.
 */
const useLocalStorage = () => {
  const [value, setValue] = useState(null);

  /**
   * The function sets a value in the local storage and updates the value.
   * @param key - The key parameter is a string that represents the name of the key in the local
   * storage where the value will be stored.
   * @param value - The value to be stored in the browser's local storage with the given key.
   */
  const setItem = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
    setValue(value);
  };

  const getItem = (key) => {
    const value = localStorage.getItem(key);
    setValue(value);
    return value;
  };

  const removeItem = (key) => {
    localStorage.removeItem(key);
    setValue(null);
  };

  return { value, setItem, removeItem, getItem };
};

export default useLocalStorage;
