import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Animated, { FadeIn } from "react-native-reanimated";

const ProAppLink = () => {
  return (
    <Animated.View
      entering={FadeIn}
      style={{
        ...StyleSheet.absoluteFill,
        backgroundColor: "red",
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <View style={styles.box}></View>
      <View style={styles.box}></View>
    </Animated.View>
  );
};

export default ProAppLink;

const styles = StyleSheet.create({
  box: {
    width: 200,
    height: 200,
    backgroundColor: "green",
    borderRadius: 20,
  },
});
