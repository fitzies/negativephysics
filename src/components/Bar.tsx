"use client";

type props = {
  slides: Slide[];
  index: number;
  set: Function;
};

const Bar = (props: props) => {
  const set = (newIndex: number) => {
    props.set(newIndex);
  };

  return (
    <div className="w-screen flex gap-2 py-2 px-2">
      {props.slides.map((slide, i) => (
        <p
          className={`py-1 px-3 rounded-full cursor-pointer duration-200 ${
            props.index === i ? " bg-primary" : "bg-shadow hover:bg-border"
          }`}
          onClick={() => set(i)}
          key={i}
        >
          {i}
        </p>
      ))}
    </div>
  );
};

export default Bar;
