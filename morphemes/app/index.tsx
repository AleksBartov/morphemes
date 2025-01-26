import { StatusBar, View } from "react-native";
import Word, { RightShape } from "@/components/Word";

export interface TestedWord {
  word: string;
  rightAnswer: RightShape[];
  length: number;
}

const WORD_FOR_TEST: TestedWord = {
  word: "РАЗУМНЫЙ",
  rightAnswer: [
    { name: "preroot", position: 0, shapeLength: 3 },
    { name: "root", position: 3, shapeLength: 2 },
    { name: "suff", position: 5, shapeLength: 1 },
    { name: "ending", position: 6, shapeLength: 2 },
  ],
  length: 8,
};
const WORD_FOR_TEST_2: TestedWord = {
  word: "МЕЧТА",
  rightAnswer: [
    { name: "root", position: 0, shapeLength: 4 },
    { name: "ending", position: 4, shapeLength: 1 },
  ],
  length: 5,
};

export default function Index() {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle={"dark-content"} />
      <Word testedWord={WORD_FOR_TEST} />
      <Word testedWord={WORD_FOR_TEST_2} />
      <Word testedWord={WORD_FOR_TEST} />
      <Word testedWord={WORD_FOR_TEST_2} />
      <Word testedWord={WORD_FOR_TEST} />
      <Word testedWord={WORD_FOR_TEST_2} />
      <Word testedWord={WORD_FOR_TEST} />
      <Word testedWord={WORD_FOR_TEST_2} />
    </View>
  );
}
