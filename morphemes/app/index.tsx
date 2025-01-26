import { AppColors } from "@/Colors";
import LetterBox from "@/components/LetterBox";
import UserShapes, { ShapeProps } from "@/components/UserShapes";
import { checkAnswer, LETTER_BOX_SIZE } from "@/helpers";
import {
  Canvas,
  LinearGradient,
  makeImageFromView,
  Path,
  Rect,
  Shadow,
  Skia,
  SkImage,
  SkPath,
  vec,
} from "@shopify/react-native-skia";
import { useRef, useState } from "react";
import {
  Text,
  StatusBar,
  TouchableOpacity,
  useWindowDimensions,
  View,
  PixelRatio,
} from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, { useSharedValue } from "react-native-reanimated";
import CloseIcon from "@/components/CloseIcon";
import LottieView from "lottie-react-native";
import * as Haptics from "expo-haptics";

export type RightShape = {
  name: string;
  position: number;
  shapeLength: number;
};

export type TestedWord = {
  word: string;
  rightAnswer: RightShape[];
  length: number;
};

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

const pd = PixelRatio.get();

const wait = async (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export default function Index() {
  const ref = useRef<View>(null);

  const [image, setImage] = useState<SkImage | null>(null);
  const [checked, setChecked] = useState(false);
  const [checkedWrong, setCheckedWrong] = useState(false);
  const [checkedRight, setCheckedRight] = useState(false);

  const PATH_STROKE_WIDTH = 10;
  const { width, height } = useWindowDimensions();
  const imageHeight = useSharedValue(height);

  const [paths, setPaths] = useState<SkPath[]>([]);

  const [shapes, setShapes] = useState<ShapeProps[]>([]);

  const makeSnapshot = async () => {
    // Take the snapshot of the view
    const snapshot = await makeImageFromView(ref);
    setImage(snapshot);
  };
  // console.log(shapes);
  const shapeDetector = (
    xes: number[],
    yes: number[],
    shapeWidth: number,
    startPoint: number
  ) => {
    const xDiffer = Math.abs(xes[0] - xes[xes.length - 1]);
    const yDiffer = Math.abs(yes[0] - yes[yes.length - 1]);
    const procentage = Math.abs(Math.max(...yes) - Math.min(...yes)) / xDiffer;

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
  };

  const pan = Gesture.Pan()
    .runOnJS(true)
    .onBegin((g) => {
      if (!checkedRight) {
        const newPaths = [];
        const path = Skia.Path.Make(); // Initiates a new svg path
        path.moveTo(g.x, g.y); // Starting point
        newPaths.push(path);
        setPaths(newPaths);
        setCheckedWrong(false);
      }
    })
    .onUpdate((g) => {
      if (!checkedRight) {
        const newPaths = [...paths];
        const path = newPaths[newPaths.length - 1];
        path?.lineTo(g.x, g.y);
        setPaths(newPaths);
      }
    })
    .onEnd(() => {
      if (!checkedRight) {
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
      }
    });
  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle={"dark-content"} />
      {!checkedRight &&
        shapes.map((s, i) => {
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
        <Animated.View style={{ flex: 1 }} ref={ref}>
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
                color={"rgba(255,255,255,0.7)"}
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
                wordsLength={WORD_FOR_TEST.length}
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
            {WORD_FOR_TEST.word.split("").map((l, i) => {
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
      {!checkedRight && shapes.length !== 0 && (
        <TouchableOpacity
          onPress={() => {
            const answer = checkAnswer([...shapes], WORD_FOR_TEST);
            /*
            makeSnapshot();
            setTimeout(() => {
              imageHeight.value = withTiming(height / 2);
            }, 120);
            */

            if (answer) {
              Haptics.notificationAsync(
                Haptics.NotificationFeedbackType.Success
              );
              setCheckedWrong(false);
              setChecked(true);
            } else {
              Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
              setCheckedWrong(true);
            }
            // console.log(answer);
          }}
          style={{
            position: "absolute",
            width: 200,
            height: 60,
            justifyContent: "center",
            alignItems: "center",
            bottom: 30,
            left: width / 2 - 100,
            backgroundColor: AppColors.charcoal,
            borderRadius: 6,
          }}
        >
          <Text style={{ color: AppColors.platinum, fontSize: 26 }}>
            ПРОВЕРИТЬ
          </Text>
        </TouchableOpacity>
      )}

      {checked && (
        <LottieView
          autoPlay
          loop={false}
          onAnimationFinish={() => {
            setCheckedRight(true);
            setChecked(false);
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
          onAnimationFinish={() => setCheckedWrong(false)}
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
    </View>
  );
}
