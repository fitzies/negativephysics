import React from "react";

type props = {
  data: string[];
};

const Slide = (props: props) => {
  const formatText = (text: string) => {
    const parts = text.split("~");

    const formatted = parts.map((part, index) =>
      index % 2 === 0 ? (
        part
      ) : (
        <span key={index} className="font-bold">
          {part}
        </span>
      )
    );

    const replacedElements = formatted.reduce(
      (accumulator: any[], part, index) => {
        if (typeof part === "string") {
          const regexYoutube = /#(.+?)#/g;
          const regexImage = /%(.+?)%/g;
          let match;
          let lastIndex = 0;

          // Replace YouTube URLs
          while ((match = regexYoutube.exec(part)) !== null) {
            accumulator.push(part.slice(lastIndex, match.index));
            accumulator.push(
              <iframe
                key={`youtube-${index}`}
                width="420"
                height="315"
                src={match[1]}
                title={`youtube-${index}`}
              />
            );
            lastIndex = match.index + match[0].length;
          }

          // Replace Image URLs
          while ((match = regexImage.exec(part)) !== null) {
            accumulator.push(part.slice(lastIndex, match.index));
            accumulator.push(
              <img
                key={`image-${index}`}
                src={match[1]}
                alt=""
                className="rounded-lg"
              />
            );
            lastIndex = match.index + match[0].length;
          }

          accumulator.push(part.slice(lastIndex));
        } else {
          accumulator.push(part);
        }

        return accumulator;
      },
      []
    );

    return replacedElements;
  };

  return (
    <div className="w-screen p-6">
      {props.data.map((string, index) => (
        <div key={index}>
          {index === 0 ? <h1>{string}</h1> : <p>{formatText(string)}</p>}
          <br />
        </div>
      ))}
    </div>
  );
};

export default Slide;
