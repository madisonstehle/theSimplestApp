import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

export default function App() {
  let quotes = [
    {
      author: 'William James',
      text: 'Act as if what you do makes a difference. IT DOES.'
    },
    {
      author: 'Winston Churchill',
      text: 'Success is not final, failure is not fatal: it is the COURAGE TO CONTINUE that counts.'
    },
    {
      author: 'Helen Keller',
      text: 'Never bend your head. Always hold it high. Look the world straight in the eye.'
    }
  ];

  const randomizer = (arr) => {
    return Math.floor(Math.random()*3);
  }

  const createTwoButtonAlert = () => { 
    let idx = randomizer(quotes);
    
    Alert.alert(
      `${quotes[idx].author} says:`,
      quotes[idx].text,
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "Oh Thanks!", onPress: () => console.log("OK Pressed") }
      ],
      { cancelable: false }
    );
  }

  return (
    <View style={styles.container}>
      <Text>Are you feeling blue? Are things just hard? Do you have a test looming and need to be reminded that everything is going to be ok? Or are you just looking for some words of encouragement while the world’s on fire? 
      </Text>
      <Button title={"Look no further!!!"} onPress={createTwoButtonAlert} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
