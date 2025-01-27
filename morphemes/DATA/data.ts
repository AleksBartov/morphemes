import { RightShape } from "@/components/Word";

export interface TestedWord {
  word: string;
  rightAnswer: RightShape[];
  length: number;
}

export const WORDS_FOR_TEST: TestedWord[] = [
  {
    word: "РАЗУМНЫЙ",
    rightAnswer: [
      { name: "preroot", position: 0, shapeLength: 3 },
      { name: "root", position: 3, shapeLength: 2 },
      { name: "suff", position: 5, shapeLength: 1 },
      { name: "ending", position: 6, shapeLength: 2 },
    ],
    length: 8,
  },
  {
    word: "МЕЧТА",
    rightAnswer: [
      { name: "root", position: 0, shapeLength: 4 },
      { name: "ending", position: 4, shapeLength: 1 },
    ],
    length: 5,
  },
  {
    word: "ПОМИДОР",
    rightAnswer: [{ name: "root", position: 0, shapeLength: 7 }],
    length: 7,
  },
];
