"use client";

import { useForm } from "@/utils";
import Bar from "./Bar";

type props = {
  slides: Slide[];
};

const Course = (props: props) => {
  const { index, next, prev, set, current } = useForm(props.slides);

  return (
    <>
      <Bar slides={props.slides} index={index} set={set} />
      {current}
    </>
  );
};

export default Course;
