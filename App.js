import React from "react";
import { StyleSheet, View } from "react-native";
import { WelcomeScreen } from "./app/screens/WelcomeScreen";
import { ViewImageScreen } from "./app/screens/ViewImageScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <WelcomeScreen />
      {/* <ViewImageScreen /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
