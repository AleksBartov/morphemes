import { StatusBar, View, Text, StyleSheet } from "react-native";
import Word from "@/components/Word";
import { useState } from "react";
import { WORDS_FOR_TEST } from "@/DATA/data";
import { AppColors } from "@/Colors";
import Animated, { FadeIn } from "react-native-reanimated";
import ProAppLink from "@/components/ProAppLink";

export default function Index() {
  const [words, setWords] = useState([...WORDS_FOR_TEST]);
  // console.log(words.length);
  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle={"light-content"} />
      {words.length === 0 && <ProAppLink setWords={setWords} />}
      {words.length !== 0 && (
        <View
          style={{
            position: "absolute",
            zIndex: 3000,
            width: 100,
            height: 100,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: AppColors.ds_bc,
              fontSize: 25,
              fontFamily: "Nunito_800ExtraBold",
            }}
          >
            {words.length}
          </Text>
        </View>
      )}
      {words.map((w, i) => {
        if (i > 0) {
          return null;
        }
        return (
          <Word
            key={i}
            index={i}
            testedWord={w}
            fadeOut={(i: number) => {
              words.splice(i, 1);
              setWords([...words]);
            }}
          />
        );
      })}
    </View>
  );
}
