import { useState, useLayoutEffect, useRef } from "react";
import useResizeObserver from "@react-hook/resize-observer";

const useSize = () => {
  const ref = useRef();
  const [size, setSize] = useState();

  useLayoutEffect(() => {
    setSize(ref.current.getBoundingClientRect());
  }, [ref]);

  // Where the magic happens
  useResizeObserver(ref, () => setSize(ref.current.getBoundingClientRect()));
  return [ref, size];
};

export default useSize;
