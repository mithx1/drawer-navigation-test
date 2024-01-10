import React from "react";
import { View, Text, Button } from "react-native";

const TestScreen = ({ route, navigation }: { navigation: any; route: any }) => {
  const { name } = route.params;
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Hi {name}</Text>
      <Button title="Go To Home" onPress={() => navigation.navigate("Home")} />
    </View>
  );
};

export default TestScreen;
