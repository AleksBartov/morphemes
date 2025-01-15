import { Alert } from "react-native";

export const shapeDetector = (xes: number[], yes: number[]) => {
  const xDiffer = Math.abs(xes[0] - xes[xes.length - 1]);
  const yDiffer = Math.abs(yes[0] - yes[yes.length - 1]);
  const procentage = Math.abs(Math.max(...yes) - Math.min(...yes)) / xDiffer;

  if (xDiffer > 40 || yDiffer > 40) {
    if (yDiffer > 40) {
      Alert.alert("looks like preroot");
    } else {
      if (procentage > 0.4) {
        Alert.alert("looks like suff");
      } else {
        Alert.alert("looks like root");
      }
    }
  } else {
    Alert.alert("looks like ending");
  }
};
