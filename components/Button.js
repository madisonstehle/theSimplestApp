import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { Text } from 'native-base';
import CupertinoButtonPurple from "./CupertinoButtonPurple";

function Button(props) {
  return (
    <View style={styles.container}>
      <CupertinoButtonPurple 
        style={styles.cupertinoButtonPurple}
      ></CupertinoButtonPurple>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 269,
    height: 44
  },
  cupertinoButtonPurple: {
    height: 44,
    width: 269,
    backgroundColor: "rgba(224,16,137,1)",
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },

    elevation: 5,
    shadowOpacity: 0.13,
    shadowRadius: 0
  }
});

export default Button;
