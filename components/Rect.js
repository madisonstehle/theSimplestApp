import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";


function Rect(props) {
  return <View style={styles.container}>
      <Text style={styles.loremIpsum}>
        Are you feeling blue?  {"\n"}{"\n"}Do you have a
        test looming and need to be reminded that everything is going to be ok?{" "}{"\n"}{"\n"}Are things just hard?
        {"\n"}
        {"\n"}Or are you just looking for some words of encouragement while the world’s on fire?
      </Text>
  </View>;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E6E6E6",
    opacity: 0.47,
    borderWidth: 6,
    borderColor: "rgba(248,231,28,1)",
    borderStyle: "solid",
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.19,
    shadowRadius: 0,
    width: 269,
    height: 337,
    marginBottom: 25,
  },

loremIpsum: {
    width: 253,
    height: 357,
    marginTop: 20,
    color: "#121212",
    fontSize: 19,
    width: 253,
    textAlign: "center"
  }


});

export default Rect;
