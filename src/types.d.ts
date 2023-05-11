type Question = {
  question: string;
  a: string;
  b: string;
  c: string;
  d: string;
  answer: a | b | c | d;
};

type Slide = [string, string];

type Course = {
  name: string;
  description: string;
  pretest: Question[];
  slides: Slide[];
  posttest: Question[];
};

type Courses = Course[];
