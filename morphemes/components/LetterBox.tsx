import { StyleSheet, Text, useWindowDimensions } from "react-native";
import React from "react";
import { AppColors } from "@/Colors";
import Animated, {
  FadeIn,
  FadeInDown,
  FadeInLeft,
  FlipInYRight,
  SlideInUp,
} from "react-native-reanimated";

type LetterBoxProps = {
  letter: string;
  index: number;
  size: number;
};

const LetterBox = ({ letter, index, size }: LetterBoxProps) => {
  const { width, height } = useWindowDimensions();
  return (
    <Animated.View
      entering={FlipInYRight.delay(index * 80)}
      style={{
        width: size,
        height: size,
        // borderWidth: 1,
        // borderColor: AppColors.lightBlue,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Animated.Text
        style={{
          color: AppColors.ds_bc,
          fontSize: width * 0.07,
          fontFamily: "Nunito_800ExtraBold",
        }}
      >
        {letter}
      </Animated.Text>
    </Animated.View>
  );
};

export default LetterBox;

const styles = StyleSheet.create({});
