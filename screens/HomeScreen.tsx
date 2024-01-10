import React from "react";
import { View, Text, StatusBar, Button } from "react-native";
import styles from "../styles/Styles";

const HomeScreen = ({ navigation }: { navigation: any }) => {
  return (
    <View style={styles.container}>
      <Text>Welcome to the Home Screen!</Text>

      <Text>Open up App.tsx to start working on your app!</Text>

      <Button
        title="Navigate to details"
        onPress={() => {
          navigation.navigate("Details");
        }}
      />
    </View>
  );
};

export default HomeScreen;
