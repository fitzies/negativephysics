"use client";

type props = {
  slides: JSX.Element[];
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
          className={`py-1 px-3 rounded-full cursor-pointer hover:bg-border duration-200 ${
            props.index === i ? " bg-primary" : "bg-shadow"
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
