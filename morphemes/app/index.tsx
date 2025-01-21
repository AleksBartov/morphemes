import { AppColors } from "@/Colors";
import LetterBox from "@/components/LetterBox";
import UserShapes, { ShapeProps } from "@/components/UserShapes";
import { LETTER_BOX_SIZE } from "@/helpers";
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
import { useState } from "react";
import {
  Button,
  StatusBar,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated from "react-native-reanimated";
import CloseIcon from "@/components/CloseIcon";

const WORD_FOR_TEST = {
  word: "ПРИБАВОЧКУ",
  length: 10,
};

export default function Index() {
  const PATH_STROKE_WIDTH = 10;
  const { width, height } = useWindowDimensions();

  const [paths, setPaths] = useState<SkPath[]>([]);

  const [shapes, setShapes] = useState<ShapeProps[]>([]);
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
  return (
    <View style={{ flex: 1 }}>
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
      <StatusBar barStyle={"dark-content"} />
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
      {shapes.length !== 0 && (
        <TouchableOpacity
          style={{
            position: "absolute",
            width: 200,
            height: 60,
            justifyContent: "center",
            alignItems: "center",
            bottom: 20,
          }}
        >
          <Button title="проверить" />
        </TouchableOpacity>
      )}
    </View>
  );
}
