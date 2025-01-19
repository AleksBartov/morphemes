import { StyleSheet, useWindowDimensions } from "react-native";
import React from "react";
import { Group, Path } from "@shopify/react-native-skia";
import { AppColors } from "@/Colors";
import { getLetterCoords } from "@/helpers";

export type ShapeProps = {
  startPoint: number;
  absStartPoint: number;
  shapeWidth: number;
  pathName: string;
};

type UserShapesProps = {
  wordsLength: number;
  shapes: ShapeProps[];
  strokeWidth: number;
  size: number;
};

const UserShapes = ({
  wordsLength,
  shapes,
  strokeWidth,
  size,
}: UserShapesProps) => {
  const { width, height } = useWindowDimensions();
  const letter_x_coords = getLetterCoords(wordsLength);

  return (
    <Group>
      {shapes.map((sh, i) => {
        // console.log(sh.absStartPoint);
        let actualPath = "",
          pathColor = AppColors.charcoal;
        const reminder = sh.shapeWidth % size;
        const actualWidth =
          reminder > size / 2
            ? sh.shapeWidth + (size - reminder)
            : sh.shapeWidth - reminder;
        if (sh.pathName === "root") {
          pathColor = "red";
          actualPath = `M ${sh.startPoint} ${height / 2 - size / 2}
           C ${sh.startPoint + size / 3} ${height / 2 - size / 2 - 100} ${
            sh.startPoint + actualWidth - size / 3
          } ${height / 2 - size / 2 - 100} ${sh.startPoint + actualWidth} ${
            height / 2 - size / 2
          }`;
        } else if (sh.pathName === "preroot") {
          pathColor = "green";
          actualPath = `M${sh.startPoint} ${
            height / 2 - size / 2
          }h${actualWidth}v${size / 4}`;
        } else if (sh.pathName === "suff") {
          pathColor = "blue";
          actualPath = `M ${sh.startPoint} ${height / 2 - size / 2} L ${
            sh.startPoint + actualWidth / 2
          } ${height / 2 - size / 2 - 40} 
          L ${sh.startPoint + actualWidth} ${height / 2 - size / 2}`;
        } else {
          pathColor = "orange";
          actualPath = `M ${sh.startPoint} ${height / 2 - size / 2} H ${
            sh.startPoint + actualWidth
          } V${height / 2 - size / 2 + size + strokeWidth} H ${
            sh.startPoint
          } Z `;
        }
        return (
          <Path
            key={i}
            path={actualPath}
            strokeCap="round"
            strokeJoin="round"
            style="stroke"
            color={pathColor}
            strokeWidth={strokeWidth}
          />
        );
      })}
    </Group>
  );
};

export default UserShapes;

const styles = StyleSheet.create({});
