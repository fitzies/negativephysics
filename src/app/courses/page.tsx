import { getCourseData } from "@/helper";
import Link from "next/link";

const Page = async () => {
  const courseData = await getCourseData();

  return (
    <div className="w-screen flex gap-4 py-3 px-4">
      {courseData.map((course: Course) => {
        return (
          <Link
            href={`courses/${course.name.toLowerCase()}`}
            className="lg:w-1/6 lg:aspect-square w-1/2 bg-shadow gap-1 rounded-2xl shadow-md border border-border p-3 hover:-translate-y-1 duration-200 cursor-pointer flex flex-col"
            key={course.name}
          >
            <h1 className="font-bold">{course.name}</h1>
            <p className="text-gray-400">{course.description}</p>
          </Link>
        );
      })}
    </div>
  );
};

export default Page;
