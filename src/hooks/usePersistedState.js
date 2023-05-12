import { useState, useEffect } from "react";

export function usePersistedState(storageKey, defaultValue) {
  const [isCached, setIsCached] = useState(
    Boolean(localStorage.getItem(storageKey))
  );

  const [value, setValue] = useState(
    isCached ? JSON.parse(localStorage.getItem(storageKey)) : defaultValue
  );

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(value));
  }, [value]);

  return [value, setValue, isCached];
}
