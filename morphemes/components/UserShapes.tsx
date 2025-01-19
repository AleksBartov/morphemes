import { StyleSheet, useWindowDimensions } from "react-native";
import React from "react";
import { Circle, Group, Path } from "@shopify/react-native-skia";
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
  // console.log(letter_x_coords);

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

        const exactStartArray: number[] = [];
        letter_x_coords.forEach((coord) => {
          exactStartArray.push(Math.floor(sh.startPoint - coord));
        });
        let correctStartPoint = 2000;
        exactStartArray.forEach((c) => {
          if (Math.abs(c) < correctStartPoint) correctStartPoint = c;
        });
        // console.log(exactStartArray, correctStartPoint);
        // console.log(correctStartPoint);

        if (correctStartPoint >= 0) {
          if (sh.pathName === "root") {
            pathColor = "red";
            actualPath = `M ${sh.startPoint - correctStartPoint + size / 2} ${
              height / 2 - size / 2
            }
   C ${sh.startPoint - correctStartPoint + size / 2 + size / 3} ${
              height / 2 - size / 2 - 100
            } ${
              sh.startPoint +
              correctStartPoint -
              size / 2 +
              actualWidth -
              size / 3
            } ${height / 2 - size / 2 - 100} ${
              sh.startPoint - correctStartPoint + size / 2 + actualWidth
            } ${height / 2 - size / 2}`;
          } else if (sh.pathName === "preroot") {
            pathColor = "green";
            actualPath = `M${sh.startPoint - correctStartPoint + size / 2} ${
              height / 2 - size / 2
            }h${actualWidth}v${size / 4}`;
          } else if (sh.pathName === "suff") {
            pathColor = "blue";
            actualPath = `M ${sh.startPoint - correctStartPoint + size / 2} ${
              height / 2 - size / 2
            } L ${
              sh.startPoint - correctStartPoint + size / 2 + actualWidth / 2
            } ${height / 2 - size / 2 - 40} 
  L ${sh.startPoint - correctStartPoint + size / 2 + actualWidth} ${
              height / 2 - size / 2
            }`;
          } else {
            pathColor = "orange";
            actualPath = `M ${sh.startPoint - correctStartPoint + size / 2} ${
              height / 2 - size / 2
            } H ${
              sh.startPoint - correctStartPoint + size / 2 + actualWidth
            } V${height / 2 - size / 2 + size + strokeWidth} H ${
              sh.startPoint - correctStartPoint + size / 2
            } Z `;
          }
        } else {
          if (sh.pathName === "root") {
            pathColor = "red";
            actualPath = `M ${
              sh.startPoint + Math.abs(correctStartPoint) - size / 2
            } ${height / 2 - size / 2}
   C ${sh.startPoint + Math.abs(correctStartPoint) - size / 2 + size / 3} ${
              height / 2 - size / 2 - 100
            } ${
              sh.startPoint +
              Math.abs(correctStartPoint) -
              size / 2 +
              actualWidth -
              size / 3
            } ${height / 2 - size / 2 - 100} ${
              sh.startPoint +
              Math.abs(correctStartPoint) -
              size / 2 +
              actualWidth
            } ${height / 2 - size / 2}`;
          } else if (sh.pathName === "preroot") {
            pathColor = "green";
            actualPath = `M${
              sh.startPoint + Math.abs(correctStartPoint) - size / 2
            } ${height / 2 - size / 2}h${actualWidth}v${size / 4}`;
          } else if (sh.pathName === "suff") {
            pathColor = "blue";
            actualPath = `M ${
              sh.startPoint + Math.abs(correctStartPoint) - size / 2
            } ${height / 2 - size / 2} L ${
              sh.startPoint +
              Math.abs(correctStartPoint) -
              size / 2 +
              actualWidth / 2
            } ${height / 2 - size / 2 - 40} 
  L ${sh.startPoint + Math.abs(correctStartPoint) - size / 2 + actualWidth} ${
              height / 2 - size / 2
            }`;
          } else {
            pathColor = "orange";
            actualPath = `M ${
              sh.startPoint + Math.abs(correctStartPoint) - size / 2
            } ${height / 2 - size / 2} H ${
              sh.startPoint +
              Math.abs(correctStartPoint) -
              size / 2 +
              actualWidth
            } V${height / 2 - size / 2 + size + strokeWidth} H ${
              sh.startPoint + Math.abs(correctStartPoint) - size / 2
            } Z `;
          }
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
