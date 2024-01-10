import React from "react";
import { View, Text, Button } from "react-native";
import styles from "../styles/Styles";

const DetailScreen = ({ navigation }: { navigation: any }) => {
  return (
    <View style={styles.container}>
      <Text>Detail Screen</Text>
      <Button
        title="Go to Test"
        onPress={() => navigation.navigate("Test", { name: "Julius" })}
      />
    </View>
  );
};

export default DetailScreen;
