import { useCallback, useRef } from 'react';

export const useThrottle = <T extends (...args: any[]) => any>(callback: T, delay: number) => {
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const lastExecutedRef = useRef<number>(0);

  return useCallback(
    (...args: Parameters<T>) => {
      const now = Date.now();

      if (now - lastExecutedRef.current >= delay) {
        callback(...args);
        lastExecutedRef.current = now;
      } else {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }

        timeoutRef.current = setTimeout(() => {
          callback(...args);
          lastExecutedRef.current = Date.now();
          timeoutRef.current = null;
        }, delay);
      }
    },
    [callback, delay],
  );
};
