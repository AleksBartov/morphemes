import { Alert } from "react-native";

export const shapeDetector = (xes: number[], yes: number[]) => {
  const counter = [...xes].reduce((acc, x) => acc + x, 0);
  console.log(counter);
};
