import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");
export const LETTERS_PEDDING = 100;
export const LETTER_BOX_SIZE = (width - LETTERS_PEDDING * 2) * 0.12;

export const getLetterCoords = (length: number) => {
  const coords: number[] = [];
  if (length % 2) {
    const firstCenter =
      width / 2 - (length / 2) * LETTER_BOX_SIZE + LETTER_BOX_SIZE / 2;
    for (let index = 0; index < length; index++) {
      coords.push(firstCenter + index * LETTER_BOX_SIZE);
    }
  } else {
    const firstCenter =
      width / 2 - (length / 2) * LETTER_BOX_SIZE + LETTER_BOX_SIZE;
    for (let index = 0; index < length; index++) {
      coords.push(firstCenter + index * LETTER_BOX_SIZE);
    }
  }
  return coords;
};
