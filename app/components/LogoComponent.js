import React from "react";
import { StyleSheet, Image, Text, View } from "react-native";

export const LogoComponent = ({ logoContainerStyle }) => {
  return (
    <View style={logoContainerStyle}>
      <Image
        source={require("../../assets/logo-red.png")}
        style={styles.logo}
      />
      <Text>Sell What You Don't Need</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 80,
    height: 80,
  },
});
