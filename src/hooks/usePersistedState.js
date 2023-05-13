import { useState, useEffect } from "react";

export function usePersistedState(storageKey, defaultValue) {
  const [isCached] = useState(Boolean(localStorage.getItem(storageKey)));

  const [value, setValue] = useState(
    isCached ? JSON.parse(localStorage.getItem(storageKey)) : defaultValue
  );

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(value));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return [value, setValue, isCached];
}
