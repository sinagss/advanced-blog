import { useState, useEffect } from "react";

const usePersistedStete = (storageKey, defaultValue) => {
  const [isCached, setIsCached] = useState(
    Boolean(localStorage.getItem(storageKey))
  );

  const [value, setValue] = useState(
    isCached ? localStorage.getItem(storageKey) : defaultValue
  );

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(value));
  }, [value]);

  return { value, setValue, isCached };
};

export default usePersistedStete;
