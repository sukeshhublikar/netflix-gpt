import { useEffect, useState } from "react";

export function useDebounce<T>(value: T, delay: number) {
  const [state, setState] = useState(value);

  useEffect(() => {
    let handler = null;
    if (handler) {
      clearInterval(handler);
    }
    handler = setTimeout(() => {
      setState(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return state;
}
