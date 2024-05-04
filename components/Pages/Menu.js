import React from "react";
import { View, Text, StyleSheet } from "react-native";
const logo = require("../assets/logo.png");
const Menu = () => {
  return (
    <View style={styles.container}>
      <Text>my First Project Mobile App</Text>
      <Image source={logo} style={{ width: 305, height: 159 }} />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    });

export default Menu;