import { useEffect, useRef, RefObject } from "react";

type CallbackFunction = () => void;

function useClickOutsideElement<T extends HTMLElement = HTMLElement>(
  callback: CallbackFunction,
  providedRef: RefObject<T> | null = null,
): RefObject<T> {
  const internalRef = useRef<T>(null);
  const elementRef = providedRef || internalRef;

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        elementRef.current &&
        !elementRef.current.contains(event.target as Node)
      ) {
        callback();
      }
    };

    document.addEventListener("click", handleOutsideClick, true);

    return () => {
      document.removeEventListener("click", handleOutsideClick, true);
    };
  }, [callback, elementRef]);

  return elementRef;
}

export default useClickOutsideElement;
