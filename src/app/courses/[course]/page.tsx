"use client";

import Bar from "@/components/Bar";
import Quiz from "@/components/Quiz";
import { useForm } from "@/utils";
import json from "@/data/courses.json";
import Slide from "@/components/Slide";

function findIndexByName(name: string): number {
  return json.findIndex((obj) => obj.name.toLowerCase() === name.toLowerCase());
}

const Page = ({ params }: { params: { course: string } }) => {
  const courseIndex = findIndexByName(params.course);

  const slides = [
    <Quiz key="pretest" questions={json[courseIndex].pretest} />,
    ...json[courseIndex].slides.map((slideData, index) => (
      <Slide key={index} data={slideData} />
    )),
    <Quiz key="posttest" questions={json[courseIndex].posttest} />,
  ];

  const { index, next, prev, set, current } = useForm(slides);

  return (
    <>
      <Bar slides={slides} index={index} set={set} />
      {current}
    </>
  );
};

export default Page;
