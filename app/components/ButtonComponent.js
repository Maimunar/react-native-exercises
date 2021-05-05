import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

import colors from "../config/colors";

export const ButtonComponent = ({ name }) => {
  let selectedStyles = [styles.button];
  name == "Login"
    ? selectedStyles.push(styles.login)
    : selectedStyles.push(styles.register);
  return (
    <>
      <TouchableOpacity style={[selectedStyles]}>
        <Text style={styles.buttonText}>{name}</Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  button: {
    width: "100%",
    height: 60,
    alignItems: "center",
    justifyContent: "center",
  },
  login: {
    backgroundColor: colors.primary,
  },
  register: {
    backgroundColor: colors.secondary,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
});
