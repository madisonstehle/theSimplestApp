import React, { Component } from "react";
import { StyleSheet, View, Image } from "react-native";

function Background(props) {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/photo-1579546929518-9e396f3cc809.jpeg")}
        resizeMode="contain"
        style={styles.image}
      ></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      position: 'absolute',
  },
  image: {
    width: 1077,
    height: 1008
  }
});

export default Background;
