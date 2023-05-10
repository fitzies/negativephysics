import Button from "@/components/Button";
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
        {/* <div className="flex w-[20%] gap-3 pt-3 mt-2">
          <Button text="Courses" link="/courses" />
          <Button text="Learn more" type="hollow" />
        </div> */}
      </div>
      <Reviews />
    </div>
  );
};

export default Page;
