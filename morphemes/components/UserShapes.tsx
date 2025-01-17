import { StyleSheet, useWindowDimensions } from "react-native";
import React from "react";
import { Group, Path } from "@shopify/react-native-skia";
import { AppColors } from "@/Colors";

export type ShapeProps = {
  startPoint: number;
  endPoint: number;
  pathName: string;
};

type UserShapesProps = {
  shapes: ShapeProps[];
  strokeWidth: number;
  size: number;
};

const UserShapes = ({ shapes, strokeWidth, size }: UserShapesProps) => {
  const { width, height } = useWindowDimensions();
  return (
    <Group>
      {shapes.map((sh, i) => {
        let actualPath = "";
        if (sh.pathName === "root") {
          actualPath = `M ${sh.startPoint} ${height / 2 - size / 2}
           C ${sh.startPoint + size / 8} ${height / 2 - size / 2 - 40} ${
            sh.startPoint + size - size / 8
          } ${height / 2 - size / 2 - 40} ${sh.startPoint + size} ${
            height / 2 - size / 2
          }`;
        } else if (sh.pathName === "preroot") {
          actualPath = `M${sh.startPoint} ${height / 2 - size / 2}h${size}v${
            size / 4
          }`;
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
