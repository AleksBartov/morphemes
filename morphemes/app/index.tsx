import { StatusBar, View } from "react-native";
import Word from "@/components/Word";
import { useState } from "react";
import { WORDS_FOR_TEST } from "@/DATA/data";

export default function Index() {
  const [words, setWords] = useState([...WORDS_FOR_TEST]);
  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle={"dark-content"} />
      {words.map((w, i) => {
        return (
          <Word
            key={i}
            index={i}
            testedWord={w}
            fadeOut={(index: number) => {
              words.splice(i, 1);
              setWords([...words]);
            }}
          />
        );
      })}
    </View>
  );
}
