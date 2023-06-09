import reviews from "@/data/reviews.json";

const Reviews = () => {
  return (
    <>
      <div className="mt-16 text-xl font-semibold">Reviews</div>
      <div className="w-screen py-4 flex lg:flex-row flex-col gap-4 overflow-x-auto">
        {reviews.map((review) => {
          return (
            <div
              className="lg:w-1/6 w-3/4 auto aspect-square border-2 border-shadow rounded-xl p-4 flex flex-col"
              key={review.text}
            >
              <h1 className="font-semibold">{review.author}</h1>
              <p className="text-gray-400 my-2">{review.text}</p>
              <div className="flex mt-auto text-gray-400 justify-between">
                <p>{review.rating}</p>
                <p>{review.date}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Reviews;
