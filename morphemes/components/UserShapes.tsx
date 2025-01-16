import { StyleSheet, useWindowDimensions } from "react-native";
import React from "react";
import { FitBox, Group, Path, rect } from "@shopify/react-native-skia";
import { AppColors } from "@/Colors";

export type ShapeProps = {
  startPoint: number;
  path: string;
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
        return (
          <FitBox
            key={i}
            src={rect(0, 0, 250, 250)}
            dst={rect(sh.startPoint, height / 2 - size - size / 4, size, size)}
          >
            <Path
              path={sh.path}
              strokeCap="round"
              strokeJoin="round"
              style="stroke"
              color={AppColors.platinum}
              strokeWidth={strokeWidth}
            />
          </FitBox>
        );
      })}
    </Group>
  );
};

export default UserShapes;

const styles = StyleSheet.create({});
