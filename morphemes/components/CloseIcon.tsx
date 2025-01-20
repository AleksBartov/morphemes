import {
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";
import React from "react";
import Animated, { FadeInUp, SlideInUp } from "react-native-reanimated";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { ShapeProps } from "./UserShapes";

type CloseIconProps = {
  shape: ShapeProps;
  index: number;
  deleteShape: (index: number) => void;
};

const CloseIcon = ({ shape, index, deleteShape }: CloseIconProps) => {
  const { height } = useWindowDimensions();
  const iconColor =
    shape.pathName === "root"
      ? "red"
      : shape.pathName === "preroot"
      ? "green"
      : shape.pathName === "suff"
      ? "blue"
      : "orange";
  return (
    <Animated.View
      entering={FadeInUp.duration(1000)}
      style={{
        position: "absolute",
        left: shape.startPoint + shape.shapeWidth / 2,
        top: height / 5,
        zIndex: 2000,
      }}
    >
      <TouchableOpacity onPress={() => deleteShape(index)}>
        <MaterialCommunityIcons
          name="close-circle"
          size={34}
          color={iconColor}
        />
      </TouchableOpacity>
    </Animated.View>
  );
};

export default CloseIcon;

const styles = StyleSheet.create({});
