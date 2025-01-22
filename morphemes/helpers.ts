import { Dimensions } from "react-native";
import { ShapeProps } from "./components/UserShapes";
import { RightShape, TestedWord } from "./app";

const { width, height } = Dimensions.get("window");
export const LETTERS_PEDDING = 100;
export const LETTER_BOX_SIZE = (width - LETTERS_PEDDING * 2) * 0.12;

export const getLetterCoords = (length: number) => {
  const coords: number[] = [];
  if (length % 2 !== 0) {
    const firstCenter =
      width / 2 - (length / 2) * LETTER_BOX_SIZE + LETTER_BOX_SIZE / 2;
    for (let index = 0; index < length; index++) {
      coords.push(firstCenter + index * LETTER_BOX_SIZE);
    }
  } else {
    const firstCenter =
      width / 2 - (length / 2) * LETTER_BOX_SIZE + LETTER_BOX_SIZE / 2;
    for (let index = 0; index < length; index++) {
      coords.push(firstCenter + index * LETTER_BOX_SIZE);
    }
  }
  return coords;
};

export const checkAnswer = (shapes: ShapeProps[], testedWord: TestedWord) => {
  const { rightAnswer } = testedWord;
  let answer = rightAnswer.length;
  return answer;
};
