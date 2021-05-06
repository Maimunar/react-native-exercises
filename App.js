import "react-native-gesture-handler";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "./app/screens/HomeScreen";
import { TimerScreen } from "./app/screens/TimerScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Pali Kafeto"
          component={HomeScreen}
          options={navBarOptions}
        />
        <Stack.Screen
          name="Timer"
          component={TimerScreen}
          options={navBarOptions}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  navBar: {
    backgroundColor: "teal",
  },
});

const navBarOptions = {
  headerStyle: styles.navBar,
  headerTintColor: "#231f20",
};
