import { AppColors } from "@/Colors";
import LetterBox from "@/components/LetterBox";
import UserShapes, { ShapeProps } from "@/components/UserShapes";
import { checkAnswer, LETTER_BOX_SIZE } from "@/helpers";
import {
  Canvas,
  LinearGradient,
  Path,
  Rect,
  Shadow,
  Skia,
  SkPath,
  vec,
} from "@shopify/react-native-skia";
import React, { useRef, useState, useCallback, useEffect } from "react";
import {
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
  StyleSheet,
} from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  FadeOut,
  SharedValue,
  SlideInDown,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
} from "react-native-reanimated";
import CloseIcon from "@/components/CloseIcon";
import LottieView from "lottie-react-native";
import * as Haptics from "expo-haptics";
import { TestedWord } from "@/DATA/data";
export type RightShape = {
  name: string;
  position: number;
  shapeLength: number;
};

type WordProps = {
  testedWord: TestedWord;
  index: number;
  fadeOut: (index: number) => void;
};

const Word = React.memo(({ testedWord, index, fadeOut }: WordProps) => {
  const translateX = useSharedValue(0);

  const [checkedWrong, setCheckedWrong] = useState(false);
  const [checkedRight, setCheckedRight] = useState(false);

  const PATH_STROKE_WIDTH = 10;
  const { width, height } = useWindowDimensions();
  const BUTTON_CHECK_SIZE = width * 0.13;

  const [paths, setPaths] = useState<SkPath[]>([]);
  const [shapes, setShapes] = useState<ShapeProps[]>([]);
  const [count, setCount] = useState(0);

  const shapeDetector = useCallback(
    (xes: number[], yes: number[], shapeWidth: number, startPoint: number) => {
      const xDiffer = Math.abs(xes[0] - xes[xes.length - 1]);
      const yDiffer = Math.abs(yes[0] - yes[yes.length - 1]);
      const procentage =
        Math.abs(Math.max(...yes) - Math.min(...yes)) / xDiffer;

      if (xDiffer > 40 || yDiffer > 40) {
        if (yDiffer > 40) {
          setShapes((prev) => {
            return [
              ...prev,
              {
                startPoint: startPoint,
                absStartPoint: xes[0],
                shapeWidth: shapeWidth,
                pathName: "preroot",
              },
            ];
          });
        } else {
          if (procentage > 0.4) {
            setShapes((prev) => {
              return [
                ...prev,
                {
                  startPoint: startPoint,
                  absStartPoint: xes[0],
                  shapeWidth: shapeWidth,
                  pathName: "suff",
                },
              ];
            });
          } else {
            setShapes((prev) => {
              return [
                ...prev,
                {
                  startPoint: startPoint,
                  absStartPoint: xes[0],
                  shapeWidth: shapeWidth,
                  pathName: "root",
                },
              ];
            });
          }
        }
      } else {
        setShapes((prev) => {
          return [
            ...prev,
            {
              startPoint: startPoint,
              absStartPoint: xes[0],
              shapeWidth: shapeWidth,
              pathName: "ending",
            },
          ];
        });
      }
    },
    []
  );

  const pan = Gesture.Pan()
    .runOnJS(true)
    .onBegin((g) => {
      setCheckedRight(false);
      setCheckedWrong(false);
      const newPaths = [];
      const path = Skia.Path.Make(); // Initiates a new svg path
      path.moveTo(g.x, g.y); // Starting point
      newPaths.push(path);
      setPaths(newPaths);
    })
    .onUpdate((g) => {
      const newPaths = [...paths];
      const path = newPaths[newPaths.length - 1];
      path?.lineTo(g.x, g.y);
      setPaths(newPaths);
    })
    .onEnd(() => {
      setPaths([]);
      // check to what of four forms it matches
      let arrWithoutL = paths[0]?.toSVGString().split("L");
      // console.log(paths[0]?.getBounds().x);
      const stringWithoutM = arrWithoutL[0].substring(1);
      arrWithoutL[0] = stringWithoutM;
      const xesArr = [...arrWithoutL].map((p) => {
        const xAndY = p.split(" ");
        const result = +xAndY[0];
        return +result.toFixed(0);
      });
      const yesArr = [...arrWithoutL].map((p) => {
        const xAndY = p.split(" ");
        const result = +xAndY[1];
        return +result.toFixed(0);
      });

      // console.log(xesArr, yesArr);
      shapeDetector(
        xesArr,
        yesArr,
        paths[0]?.getBounds().width,
        paths[0]?.getBounds().x
      );
    });

  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateX.value }],
    };
  });
  return (
    <Animated.View
      style={[StyleSheet.absoluteFillObject, rStyle]}
      exiting={FadeOut}
    >
      {shapes.map((s, i) => {
        return (
          <CloseIcon
            key={i}
            shape={s}
            index={i}
            deleteShape={(i: number) => {
              // console.log(shapes);
              shapes.splice(i, 1);
              setShapes([...shapes]);
            }}
          />
        );
      })}
      <GestureDetector gesture={pan}>
        <Animated.View style={{ flex: 1 }}>
          <Canvas style={{ flex: 1 }}>
            <Rect x={0} y={0} width={width} height={height}>
              <LinearGradient
                start={vec(0, 0)}
                end={vec(width, height)}
                colors={[AppColors.blue, AppColors.lightBlue]}
              />
            </Rect>

            {paths.map((p) => (
              <Path
                key={p.toSVGString()}
                path={p}
                strokeWidth={PATH_STROKE_WIDTH}
                style="stroke"
                strokeJoin={"round"}
                strokeCap={"round"}
                color={AppColors.ds_bc}
              >
                <Shadow dx={2} dy={2} blur={6} color="rgba(255,255,255,0.5)" />
                <Shadow
                  dx={-2}
                  dy={-2}
                  blur={6}
                  color="rgba(255,255,255,0.5)"
                />
              </Path>
            ))}
            {shapes && (
              <UserShapes
                wordsLength={testedWord.length}
                shapes={shapes}
                strokeWidth={PATH_STROKE_WIDTH}
                size={LETTER_BOX_SIZE}
              />
            )}
          </Canvas>
          <View
            style={{
              position: "absolute",
              width: width,
              height: height,
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            {testedWord.word.split("").map((l, i) => {
              return (
                <LetterBox
                  letter={l}
                  key={`${l}_${i}`}
                  index={i}
                  size={LETTER_BOX_SIZE}
                />
              );
            })}
          </View>
        </Animated.View>
      </GestureDetector>
      <Animated.View
        style={{
          position: "absolute",
          width: BUTTON_CHECK_SIZE,
          height: BUTTON_CHECK_SIZE / 3,
          justifyContent: "center",
          alignItems: "center",
          bottom: 30,
          left: width / 4 - BUTTON_CHECK_SIZE / 2,
        }}
      >
        <Animated.Text
          style={{
            color:
              count > 0 ? AppColors.ds_classic_suff : AppColors.ds_classic_root,
            fontSize: BUTTON_CHECK_SIZE / 4,
            fontFamily: "Nunito_800ExtraBold",
          }}
        >
          {count}
        </Animated.Text>
      </Animated.View>
      {checkedRight && (
        <LottieView
          autoPlay
          key='right'
          loop={false}
          onAnimationFinish={() => {
            // console.log(`from lottie right`);
            setCheckedRight(false);
            fadeOut(index);
          }}
          duration={1000}
          style={{
            width: LETTER_BOX_SIZE * 3,
            height: LETTER_BOX_SIZE * 3,
            backgroundColor: "transparent",
            position: "absolute",
            left: width / 2 - (LETTER_BOX_SIZE * 3) / 2,
            top: height / 2 - (LETTER_BOX_SIZE * 3) / 2,
          }}
          source={require("../assets/images/rightAnswer.json")}
        />
      )}
      {checkedWrong && (
        <LottieView
          autoPlay
         key='wrong'
          onAnimationFinish={() => {
            // console.log(`from lottie wrong`);
            setCheckedWrong(false);
            setShapes([]);
          }}
          duration={1000}
          loop={false}
          style={{
            width: LETTER_BOX_SIZE * 3,
            height: LETTER_BOX_SIZE * 3,
            backgroundColor: "transparent",
            position: "absolute",
            left: width / 2 - (LETTER_BOX_SIZE * 3) / 2,
            top: height / 2 - (LETTER_BOX_SIZE * 3) / 2,
          }}
          source={require("../assets/images/wrongAnswer.json")}
        />
      )}
      {!checkedRight && shapes.length !== 0 && (
        <TouchableOpacity
          onPress={() => {
            const answer = checkAnswer([...shapes], testedWord);

            if (answer) {
              setCount((e) => {
                const newCount = e + 1;
                return newCount;
              });
              setShapes([]);
              setCheckedRight(true);
              Haptics.notificationAsync(
                Haptics.NotificationFeedbackType.Success
              );
            } else {
              setCount((e) => {
                const newCount = e - 1;
                return newCount;
              });
              setShapes([]);
              setCheckedWrong(true);
              Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
            }
          }}
          style={{
            position: "absolute",
            width: BUTTON_CHECK_SIZE,
            height: BUTTON_CHECK_SIZE / 3,
            justifyContent: "center",
            alignItems: "center",
            bottom: 30,
            left: width / 2 + width / 4 - BUTTON_CHECK_SIZE / 2,
            backgroundColor: AppColors.ds_classic_suff,
            borderRadius: 6,
          }}
        >
          <Text
            style={{
              color: AppColors.blue,
              fontSize: BUTTON_CHECK_SIZE / 8,
              fontFamily: "Nunito_800ExtraBold",
            }}
          >
            ПРОВЕРИТЬ
          </Text>
        </TouchableOpacity>
      )}
    </Animated.View>
  );
});

export default Word;

const styles = StyleSheet.create({});
