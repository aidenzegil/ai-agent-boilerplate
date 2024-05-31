import { Dispatch, SetStateAction, useEffect, useState } from "react";

export default function useSessionStorage<T>(
  key: string,
  defaultValue: T
): [T, Dispatch<SetStateAction<T>>] {
  const [value, setValue] = useState<T>(defaultValue);

  useEffect(() => {
    try {
      const item = window.sessionStorage.getItem(key);
      if (item && item !== "undefined") {
        setValue(JSON.parse(item));
      }
    } catch (e) {
      console.log(e);
    }
  }, [key]);

  useEffect(() => {
    window.sessionStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}
