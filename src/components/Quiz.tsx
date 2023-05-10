"use client";

import { useState } from "react";
import Button from "./Button";

type props = {
  questions: Question[];
};

const Quiz = (props: props) => {
  const [choices, setChoices] = useState(
    Array(props.questions.length).fill("")
  );

  const [correct, setCorrect] = useState(
    Array(props.questions.length).fill("")
  );

  const [results, setResults] = useState<number>();

  const select = (letter: string, index: number) => {
    setChoices((prevChoices) => {
      const temp = [...prevChoices];
      temp[index] = letter;
      return temp;
    });
  };

  const allStringsHaveLength = (arr: any[]) =>
    arr.every((item) => typeof item === "string" && item.length > 0);

  const submit = () => {
    setCorrect(() => {
      const answers = props.questions.map((question) => question.answer);
      setResults(() => {
        let correctMatches = choices.reduce(
          (count, item, index) => count + (item === correct[index]),
          0
        );
        return (correctMatches / choices.length) * 100;
      });
      return [...answers];
    });
  };

  return (
    <div className="w-screen flex flex-col p-4">
      {props.questions.map((question, index) => {
        return (
          <div
            className="border-b border-border p-6 flex flex-col gap-1 items-start"
            key={question.question}
          >
            <h1 className="font-bold">{question.question}</h1>
            <div
              className={`cursor-pointer hover:bg-shadow rounded-lg duration-200 px-2 ${
                correct[index] === "a"
                  ? "bg-primary"
                  : choices[index] === "a"
                  ? "bg-border"
                  : ""
              }`}
              onClick={() => select("a", index)}
            >
              {question.a}
            </div>
            <div
              className={`cursor-pointer hover:bg-shadow rounded-lg duration-200 px-2 ${
                correct[index] === "b"
                  ? "bg-primary"
                  : choices[index] === "b"
                  ? "bg-border"
                  : ""
              }`}
              onClick={() => select("b", index)}
            >
              {question.b}
            </div>
            <div
              className={`cursor-pointer hover:bg-shadow rounded-lg duration-200 px-2 ${
                correct[index] === "c"
                  ? "bg-primary"
                  : choices[index] === "c"
                  ? "bg-border"
                  : ""
              }`}
              onClick={() => select("c", index)}
            >
              {question.c}
            </div>
            <div
              className={`cursor-pointer hover:bg-shadow rounded-lg duration-200 px-2 ${
                correct[index] === "d"
                  ? "bg-primary"
                  : choices[index] === "d"
                  ? "bg-border"
                  : ""
              }`}
              onClick={() => select("d", index)}
            >
              {question.d}
            </div>
          </div>
        );
      })}
      <div className="flex my-4 w-screen items-center justify-center gap-4">
        {allStringsHaveLength(choices) ? (
          <Button text="Submit" onClick={submit} />
        ) : null}
        {results ? <p>{results}% correct</p> : <p></p>}
      </div>
    </div>
  );
};

export default Quiz;
