import { useEffect, useState } from "react";

export const useDebounce = ( inputValue, sec = 2000 ) => {
  const [debounceValue, setDebounceValue] = useState("");

  useEffect(() => {
    const myTimeOut = setTimeout(() => {
      setDebounceValue(inputValue);
    }, sec);
    return () => clearTimeout(myTimeOut);
  }, [inputValue, sec]);

  return debounceValue;
};
