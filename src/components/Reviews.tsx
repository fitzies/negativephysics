import reviews from "@/data/reviews.json";

const Reviews = () => {
  return (
    <>
      <div className="mt-16 text-xl font-semibold">Reviews</div>
      <div className="w-screen py-4 flex gap-4 overflow-x-auto">
        {reviews.map((review) => {
          return (
            <div className="w-1/6 aspect-square border-2 border-shadow rounded-xl p-4 flex flex-col">
              <h1 className="font-semibold">{review.author}</h1>
              <p className="text-gray-400 my-2">{review.text}</p>
              <p className="text-gray-400 mt-auto">{review.date}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Reviews;
