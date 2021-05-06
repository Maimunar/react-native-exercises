import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";

export const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Timer")}
      >
        <Image source={require("../../assets/timer.png")} style={styles.icon} />
        <Text style={styles.iconText}>Pushtai</Text>
      </TouchableOpacity>
    </View>
  );
};

const iconW = Dimensions.get("window").width * 0.3;
const iconH = Dimensions.get("window").height * 0.22;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "darkslategrey",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "darkslategrey",
    flex: 0.5,
    borderWidth: 1,
    borderColor: "#231f20",
    borderRadius: 10,
    justifyContent: "center",
    maxHeight: iconH * 1.2,
    marginBottom: iconH,
  },
  icon: {
    resizeMode: "contain",
    maxWidth: iconW,
    maxHeight: iconH,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  iconText: {
    color: "#231f20",
    textAlign: "center",
    marginBottom: 10,
  },
});
