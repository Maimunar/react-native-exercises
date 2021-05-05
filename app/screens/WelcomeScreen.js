import React from "react";
import { StyleSheet, ImageBackground, View } from "react-native";

import { ButtonComponent } from "../components/ButtonComponent";
import { LogoComponent } from "../components/LogoComponent";

export const WelcomeScreen = ({}) => {
  return (
    <ImageBackground
      source={require("../../assets/background.jpg")}
      style={styles.image}
    >
      <LogoComponent logoContainerStyle={styles.logoContainer} />
      <View style={styles.main}>
        <ButtonComponent name="Login" />
        <ButtonComponent name="Register" />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 6,
    justifyContent: "flex-end",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
  },
  logoContainer: {
    flex: 4,
    justifyContent: "center",
    alignItems: "center",
  },
});
