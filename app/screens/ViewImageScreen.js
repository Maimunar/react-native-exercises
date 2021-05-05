import React from "react";
import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";

import colors from "../config/colors";

export const ViewImageScreen = ({}) => {
  return (
    <View style={styles.mainView}>
      <TouchableOpacity style={[styles.button, styles.exit]} />
      <TouchableOpacity style={[styles.button, styles.confirm]} />
      <Image source={require("../../assets/chair.jpg")} style={styles.image} />
    </View>
  );
};

const getImageHeight = () => Dimensions.get("window").height * 0.7;

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: "black",
    flex: 1,
    justifyContent: "center",

    alignItems: "center",
  },
  image: {
    height: getImageHeight(),
    resizeMode: "contain",
  },
  exit: {
    backgroundColor: colors.primary,
    left: 20,
  },
  confirm: {
    backgroundColor: colors.secondary,
    right: 20,
  },
  button: {
    width: 50,
    height: 50,
    position: "absolute",
    top: 10,
  },
});
