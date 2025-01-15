import { AppColors } from "@/Colors";
import { shapeDetector } from "@/helpers";
import {
  Canvas,
  Fill,
  LinearGradient,
  Path,
  Rect,
  Shadow,
  Skia,
  SkPath,
  vec,
} from "@shopify/react-native-skia";
import { useState } from "react";
import { StatusBar, Text, useWindowDimensions, View } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated from "react-native-reanimated";

export default function Index() {
  const PATH_STROKE_WIDTH = 14;
  const { width, height } = useWindowDimensions();
  const [paths, setPaths] = useState<SkPath[]>([]);
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
      path.lineTo(g.x, g.y);
      setPaths(newPaths);
    })
    .onEnd(() => {
      // check to what of four forms it matches
      let arrWithoutL = paths[0].toSVGString().split("L");
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
      shapeDetector(xesArr, yesArr);
    });
  return (
    <View style={{ flex: 1 }}>
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
                antiAlias
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
          </Canvas>
          <Text
            style={{
              color: AppColors.platinum,
              fontSize: 140,
              position: "absolute",
              top: 50,
              left: 100,
            }}
          >
            носорог
          </Text>
        </Animated.View>
      </GestureDetector>
    </View>
  );
}
