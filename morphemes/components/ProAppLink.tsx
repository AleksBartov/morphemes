import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Animated, { FadeIn } from "react-native-reanimated";
import { AppColors } from "@/Colors";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { TestedWord, WORDS_FOR_TEST } from "@/DATA/data";

const shuffle = (array: TestedWord[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

type ProAppLinkProps = {
  setWords: (array: TestedWord[]) => void;
};

const ProAppLink = ({ setWords }: ProAppLinkProps) => {
  return (
    <Animated.View
      entering={FadeIn}
      style={{
        ...StyleSheet.absoluteFill,
        backgroundColor: AppColors.blue,
        flex: 1,
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <TouchableOpacity
        style={styles.box}
        onPress={() => {
          const reset = shuffle([...WORDS_FOR_TEST]);
          setWords(reset);
        }}
      >
        <FontAwesome name="repeat" size={120} color={AppColors.ds_bc} />
      </TouchableOpacity>
      <Text
        style={{
          color: AppColors.ds_bc,
          fontSize: 26,
          fontFamily: "Nunito_800ExtraBold",
        }}
      >
        практиковать слова еще раз
      </Text>
    </Animated.View>
  );
};

export default ProAppLink;

const styles = StyleSheet.create({
  box: {
    width: 200,
    height: 200,
    backgroundColor: AppColors.charcoal,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});
