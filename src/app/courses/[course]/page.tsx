import Quiz from "@/components/Quiz";
import Slide from "@/components/Slide";
import { getCourseData } from "@/helper";
import Course from "@/components/Course";

function findIndexByName(json: any, name: string): number {
  return json.findIndex(
    (obj: Course) => obj.name.toLowerCase() === name.toLowerCase()
  );
}

const Page = async ({ params }: { params: { course: string } }) => {
  const courseData = await getCourseData();

  if (!courseData) {
    return (
      <div className="w-screen h-[50vh] flex justify-center items-center">
        Loading
      </div>
    );
  }

  const courseIndex = findIndexByName(courseData, params.course);

  const slides = [
    <Quiz key="pretest" questions={courseData[courseIndex].pretest} />,
    ...courseData[courseIndex].slides.map((slideData: Slide, index: number) => (
      <Slide key={index} data={slideData} />
    )),
    <Quiz key="posttest" questions={courseData[courseIndex].posttest} />,
  ];

  return (
    <>
      <Course slides={slides} />
    </>
  );
};

export default Page;
