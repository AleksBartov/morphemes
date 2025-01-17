import { StyleSheet, useWindowDimensions } from "react-native";
import React from "react";
import { Group, Path } from "@shopify/react-native-skia";
import { AppColors } from "@/Colors";

export type ShapeProps = {
  startPoint: number;
  absStartPoint: number;
  shapeWidth: number;
  pathName: string;
};

type UserShapesProps = {
  shapes: ShapeProps[];
  strokeWidth: number;
  size: number;
};

const UserShapes = ({ shapes, strokeWidth, size }: UserShapesProps) => {
  const { width, height } = useWindowDimensions();
  const word_length = 7;
  const letter_points = [
    width / 2 - (word_length / 2) * size,
    width / 2 - (word_length / 2) * size + size,
    width / 2 - (word_length / 2) * size + size * 2,
  ];
  const nearLetter = letter_points[1];
  return (
    <Group>
      {shapes.map((sh, i) => {
        // console.log(sh.absStartPoint);
        let actualPath = "";
        if (sh.pathName === "root") {
          actualPath = `M ${sh.startPoint} ${height / 2 - size / 2}
           C ${sh.startPoint + size / 3} ${height / 2 - size / 2 - 100} ${
            sh.startPoint + sh.shapeWidth - size / 3
          } ${height / 2 - size / 2 - 100} ${sh.startPoint + sh.shapeWidth} ${
            height / 2 - size / 2
          }`;
        } else if (sh.pathName === "preroot") {
          actualPath = `M${sh.startPoint} ${height / 2 - size / 2}h${
            sh.shapeWidth
          }v${size / 4}`;
        }
        return (
          <Path
            key={i}
            path={actualPath}
            strokeCap="round"
            strokeJoin="round"
            style="stroke"
            color={AppColors.platinum}
            strokeWidth={strokeWidth}
          />
        );
      })}
    </Group>
  );
};

export default UserShapes;

const styles = StyleSheet.create({});
