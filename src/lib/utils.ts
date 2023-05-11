import { useState } from "react";

const useForm = (slides: Slide[]) => {
  const [index, setIndex] = useState(0);
  const [current, setCurrent] = useState(slides[index]);

  const next = () => {
    setIndex((prev) => {
      setCurrent(() => slides[prev + 1]);
      return prev + 1;
    });
  };

  const prev = () => {
    setIndex((prev) => {
      setCurrent(() => slides[prev - 1]);
      return prev - 1;
    });
  };

  const set = (number: number) => {
    setIndex(() => {
      setCurrent(() => slides[number]);
      return number;
    });
  };

  return { index, next, prev, set, current };
};

export { useForm };
