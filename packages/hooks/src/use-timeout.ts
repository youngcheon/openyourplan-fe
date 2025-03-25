import { useEffect, useLayoutEffect, useRef } from 'react';

export function useTimeout(
  callback: () => void,
  { delay, enabled = true }: { delay: number | null; enabled?: boolean },
): void {
  const savedCallback = useRef(callback);

  useLayoutEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (!enabled || (!delay && delay !== 0)) {
      return;
    }

    const id = setTimeout(() => {
      savedCallback.current();
    }, delay);

    return () => {
      clearTimeout(id);
    };
  }, [delay, enabled]);
}
