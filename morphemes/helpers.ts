import { Dimensions } from "react-native";
import { ShapeProps } from "./components/UserShapes";
import { TestedWord } from "./DATA/data";

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
  const userShapesNames = shapes.map((s) => s.pathName);
  // console.log(userShapesNames);
  const userIndexes: number[] = [];
  const shapeWidthes: number[] = [];
  const startPoints: number[] = [];

  // check number of user shapes
  if (shapes.length !== rightAnswer.length) {
    return false;
  }

  rightAnswer.forEach((s) => {
    const name = s.name;
    const place = userShapesNames.indexOf(name);
    userIndexes.push(place);
  });

  // check not doubled shapes
  if (userIndexes.includes(-1)) {
    return false;
  }

  // check shapes'es width
  rightAnswer.forEach((s) => {
    const myShape = shapes[userShapesNames.indexOf(s.name)].shapeWidth;
    const reminder = myShape % LETTER_BOX_SIZE;
    const actualWidth =
      reminder > LETTER_BOX_SIZE / 2
        ? myShape + (LETTER_BOX_SIZE - reminder)
        : myShape - reminder;
    const differ = s.shapeLength * LETTER_BOX_SIZE - actualWidth;
    shapeWidthes.push(+Math.abs(differ).toFixed(0));
  });

  if (
    [...new Set(shapeWidthes)].length !== 1 ||
    [...new Set(shapeWidthes)][0] !== 0
  ) {
    return false;
  }

  // end shapes width checking

  // check shape place

  const padd = width / 2 - (testedWord.length * LETTER_BOX_SIZE) / 2;

  rightAnswer.forEach((s) => {
    const myShape = shapes[userShapesNames.indexOf(s.name)].startPoint - padd;
    const differ = myShape - s.position * LETTER_BOX_SIZE;
    startPoints.push(+Math.abs(differ).toFixed(0));
  });

  if (startPoints.filter((n) => n > LETTER_BOX_SIZE / 2).length !== 0)
    return false;

  return true;
};
