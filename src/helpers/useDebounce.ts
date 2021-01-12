import * as React from "react";

const useDebounce = <T>(value: T, delay?: number): T => {
  const [debouncedValue, setDebouncedValue] = React.useState<T>(value);
  React.useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay);
    return () => {
      clearTimeout(timer);
    };
  }, [value, delay || 500]);
  return debouncedValue;
};

export default useDebounce;
