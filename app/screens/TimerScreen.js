import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
} from "react-native";

export const TimerScreen = ({ navigation }) => {
  const [time, setTime] = useState(210);
  var timer;
  const secToMin = (time) => {
    let min = Math.floor(time / 60);
    if (min < 10) min = `0${min}`;
    let sec = time % 60 < 10 ? `0${time % 60}` : time % 60;
    return `${min}:${sec}`;
  };

  const redirectToMain = () => {
    clearTimeout(timer);
    navigation.navigate("Pali Kafeto");
  };

  useEffect(() => {
    if (time <= 0) {
      alert("Vadi Kafeto Pergish");
    } else {
      timer = setTimeout(() => {
        setTime((time) => time - 1);
      }, 1000);
    }
  }, [time]);

  return (
    <View style={styles.container}>
      <Text style={styles.timer}>{secToMin(time)}</Text>
      <TouchableOpacity style={styles.button} onPress={() => redirectToMain()}>
        <Text style={styles.iconText}>Zaebi</Text>
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
  timer: {
    color: "white",
    fontWeight: "bold",
    fontSize: iconW,
    borderBottomColor: "white",
    borderBottomWidth: 1,
    marginBottom: iconH,
  },
  button: {
    backgroundColor: "darkslategrey",
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    padding: iconH * 0.2,
  },
  iconText: {
    color: "white",
    textAlign: "center",
  },
});
