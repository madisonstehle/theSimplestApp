import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import CupertinoHeaderWithBackground from "./CupertinoHeaderWithBackground.js";

function Header(props) {
  return (
    <View style={styles.container}>
      <CupertinoHeaderWithBackground
        style={styles.cupertinoHeaderWithBackground}
      ></CupertinoHeaderWithBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    //   position: "absolute",
    //   top: 0,
    width: 375,
    height: 112
  },
  cupertinoHeaderWithBackground: {
    height: 112,
    width: 375
  }
});

export default Header;
