import { AppColors } from "@/Colors";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

const { width, height } = Dimensions.get("window");
const SING_BOX_SIZE = width * 0.2;
const MAX_BOTTOM = height / 2 - SING_BOX_SIZE;
const START_POS = width / 2 - SING_BOX_SIZE / 2;

export default function Index() {
  const translateX = useSharedValue(START_POS);
  const translateY = useSharedValue(0);
  const offsetX = useSharedValue(0);
  const offsetY = useSharedValue(0);
  const SING_BOX_WIDTH = useSharedValue(SING_BOX_SIZE);
  const offsetPinch = useSharedValue(0);

  const pan = Gesture.Pan()
    .onBegin(() => {
      offsetX.value = translateX.value;
      offsetY.value = translateY.value;
    })
    .onChange(({ translationX, translationY }) => {
      translateX.value = translationX + offsetX.value;
      if (translationY + offsetY.value > MAX_BOTTOM) {
        translateY.value = MAX_BOTTOM;
      } else {
        translateY.value = translationY + offsetY.value;
      }
    })
    .onEnd(({ translationY }) => {
      if (translationY + offsetY.value < MAX_BOTTOM / 2) {
        translateY.value = withTiming(0);
      } else {
        translateY.value = withTiming(MAX_BOTTOM);
      }
      translateX.value = withTiming(START_POS);
    });
  const pinch = Gesture.Pinch()
    .onBegin(() => {
      offsetPinch.value = SING_BOX_WIDTH.value;
    })
    .onUpdate(({ scale }) => {
      SING_BOX_WIDTH.value = offsetPinch.value * scale;
    })
    .onEnd(() => {});
  const panAndPinch = Gesture.Race(pan, pinch);

  const rStyle = useAnimatedStyle(() => {
    return {
      width: SING_BOX_WIDTH.value,
      transform: [
        { translateX: translateX.value },
        { translateY: translateY.value },
      ],
    };
  }, []);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: AppColors.platinum,
      }}
    >
      <GestureDetector gesture={panAndPinch}>
        <Animated.View style={[styles.sing, rStyle]}>
          <Text style={styles.sing_text}>^</Text>
        </Animated.View>
      </GestureDetector>
      <View style={styles.box_for_letter}></View>
      <View style={styles.box_for_letter_1}></View>
      <View style={styles.box_for_letter_2}></View>
      <View style={styles.box_for_letter_3}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  sing: {
    position: "absolute",
    height: SING_BOX_SIZE * 2,
    borderColor: AppColors.charcoal,
    borderWidth: 1,
    borderRadius: 5,
    paddingVertical: 24,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  box_for_letter: {
    position: "absolute",
    top: MAX_BOTTOM + SING_BOX_SIZE,
    right: START_POS - SING_BOX_SIZE * 2,
    width: SING_BOX_SIZE,
    height: SING_BOX_SIZE,
    borderColor: AppColors.lightBlue,
    borderWidth: 1,
    borderRadius: 5,
  },
  box_for_letter_1: {
    position: "absolute",
    top: MAX_BOTTOM + SING_BOX_SIZE,
    right: START_POS - SING_BOX_SIZE,
    width: SING_BOX_SIZE,
    height: SING_BOX_SIZE,
    borderColor: AppColors.lightBlue,
    borderWidth: 1,
    borderRadius: 5,
  },
  box_for_letter_2: {
    position: "absolute",
    top: MAX_BOTTOM + SING_BOX_SIZE,
    right: START_POS,
    width: SING_BOX_SIZE,
    height: SING_BOX_SIZE,
    borderColor: AppColors.lightBlue,
    borderWidth: 1,
    borderRadius: 5,
  },
  box_for_letter_3: {
    position: "absolute",
    top: MAX_BOTTOM + SING_BOX_SIZE,
    right: START_POS + SING_BOX_SIZE,
    width: SING_BOX_SIZE,
    height: SING_BOX_SIZE,
    borderColor: AppColors.lightBlue,
    borderWidth: 1,
    borderRadius: 5,
  },
  sing_text: {
    fontSize: 65,
  },
});
