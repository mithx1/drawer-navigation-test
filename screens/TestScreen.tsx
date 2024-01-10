import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text, Button, Pressable } from "react-native";
import styles from "../styles/Styles";

const TestScreen = ({ route, navigation }: { navigation: any; route: any }) => {
  const name = route?.params?.name ?? "DefaultName";
  const [isVisible, setIsVisible] = React.useState(false);

  return (
    <View style={styles.container}>
      <View style={[styles.box, styles.lightBlue]}>
        <Text>Date Range Caluculator</Text>
        <Text>Hi, {name}</Text>
      </View>
      <Pressable
        onPress={() => navigation.navigate("Home")}
        style={styles.button}
      >
        <Text>Navigate to home</Text>
      </Pressable>
      <Pressable onPress={() => setIsVisible(!isVisible)} style={styles.button}>
        <Text>Toggle Status Bar</Text>
      </Pressable>

      <StatusBar hidden={isVisible} />
    </View>
  );
};

export default TestScreen;
