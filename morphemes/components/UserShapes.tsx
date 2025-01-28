import { StyleSheet, useWindowDimensions } from "react-native";
import React from "react";
import { Group, Path, Shadow } from "@shopify/react-native-skia";
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
  const { height } = useWindowDimensions();
  const letter_x_coords = getLetterCoords(wordsLength);

  return (
    <Group>
      {shapes.map((sh, i) => {
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

        if (correctStartPoint >= 0) {
          if (sh.pathName === "root") {
            pathColor = AppColors.ds_classic_root;
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
            pathColor = AppColors.ds_classic_preroot;
            actualPath = `M${sh.startPoint - correctStartPoint + size / 2} ${
              height / 2 - size / 2
            }h${actualWidth}v${size / 4}`;
          } else if (sh.pathName === "suff") {
            pathColor = AppColors.ds_classic_suff;
            actualPath = `M ${sh.startPoint - correctStartPoint + size / 2} ${
              height / 2 - size / 2
            } L ${
              sh.startPoint - correctStartPoint + size / 2 + actualWidth / 2
            } ${height / 2 - size / 2 - 40} 
  L ${sh.startPoint - correctStartPoint + size / 2 + actualWidth} ${
              height / 2 - size / 2
            }`;
          } else {
            pathColor = AppColors.ds_classic_ending;
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
            pathColor = AppColors.ds_classic_root;
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
            pathColor = AppColors.ds_classic_preroot;
            actualPath = `M${
              sh.startPoint + Math.abs(correctStartPoint) - size / 2
            } ${height / 2 - size / 2}h${actualWidth}v${size / 4}`;
          } else if (sh.pathName === "suff") {
            pathColor = AppColors.ds_classic_suff;
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
            pathColor = AppColors.ds_classic_ending;
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
          >
            <Shadow dx={5} dy={0} blur={3} color="rgba(0,0,0,0.5)" />
          </Path>
        );
      })}
    </Group>
  );
};

export default UserShapes;

const styles = StyleSheet.create({});
