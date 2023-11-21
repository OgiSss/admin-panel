import { useEffect, useRef } from "react";

export function useOutsideClick(handler, capturing = false) {
  const ref = useRef();

  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        handler();
      }
    }

    document.addEventListener("click", handleClick, capturing);

    return () => document.addEventListener("click", handleClick, capturing);
  });

  return ref;
}
