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
import { AppColors } from "@/Colors";

type CloseIconProps = {
  shape: ShapeProps;
  index: number;
  deleteShape: (index: number) => void;
};

const CloseIcon = ({ shape, index, deleteShape }: CloseIconProps) => {
  const { height } = useWindowDimensions();
  const iconColor =
    shape.pathName === "root"
      ? AppColors.ds_classic_root
      : shape.pathName === "preroot"
      ? AppColors.ds_classic_preroot
      : shape.pathName === "suff"
      ? AppColors.ds_classic_suff
      : AppColors.ds_classic_ending;
  return (
    <Animated.View
      entering={FadeInUp.duration(1000)}
      style={{
        position: "absolute",
        left: shape.startPoint + shape.shapeWidth / 2,
        top: height / 12,
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
