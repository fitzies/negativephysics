import Reviews from "@/components/Reviews";

const Page = () => {
  return (
    <div className="w-screen p-9">
      <div className="flex flex-col w-5/6">
        <h1 className="font-bold text-3xl py-3">
          Explore, Discover and Excel. Your Pathway to Physics Success Starts
          Here!
        </h1>
        <p>
          Your one-stop platform for diving into the fascinating world of
          physics! Our mission is to make learning physics engaging, accessible,
          and enjoyable for everyone, no matter your background or skill level.
        </p>
        <br />
        {/* <p>
          The aim of Negative Physics is to provide students with a
          conceptually-based exposure to the fundamental principles and
          processes of the physical world. The courses covers concepts of
          motion, forces, energy, heat, electricity, magnetism, and the
          structure of matter and the universe. Upon completion, students should
          be able to describe examples and applications of the principles
          studied. The course aims to develop a deep, conceptual understanding
          of physics as students explore how physics relates to the real world.
          Overall, the course provides a foundation for further study in physics
          and related fields, as well as an understanding of the applications of
          physics in the world around us
        </p> */}
      </div>
      <Reviews />
    </div>
  );
};

export default Page;
