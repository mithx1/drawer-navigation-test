import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text, Button } from "react-native";

const TestScreen = ({ route, navigation }: { navigation: any; route: any }) => {
  const name = route?.params?.name ?? 'DefaultName';
  const [isVisible, setIsVisible] = React.useState(false);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Hi {name}</Text>
      <Button title="Go To Home" onPress={() => navigation.navigate("Home")} />
      <Button
        title="Toggle StatusBar"
        onPress={() => {
          setIsVisible(!isVisible);
        }}
      />
      <StatusBar hidden={isVisible} />
    </View>
  );
};

export default TestScreen;
