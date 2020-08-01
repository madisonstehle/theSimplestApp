import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text, Alert } from "react-native";


function CupertinoButtonPurple(props) {
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
        },
        {
          author: 'Zig Ziglar',
          text: 'What you get by achieving your goals is not as important as what you become by achieving your goals.'
        },
        {
          author: 'Theodore Roosevelt',
          text: 'Believe you can and you\'re halfway there.'
        },
        {
          author: 'Carol Burnett',
          text: 'When you have a dream, you\'ve got to grab it and never let go.'
        },
        {
          author: 'Jimmy Dean',
          text: 'I can\'t change the direction of the wind, but I can adjust my sails to always reach my destination.'
        },
        {
          author: 'Demi Lovato',
          text: 'No matter what you\'re going through, there\'s a light at the end of the tunnel.'
        },
        {
          author: 'Albert Einstein',
          text: 'Life is like riding a bicycle. To keep your balance, you must keep moving.'
        },
        {
          author: 'Ella Fitzgerald',
          text: 'Just don\'t give up trying to do what you really want to do. Where there is love and inspiration, I don\'t think you can go wrong.'
        }
      ];
    
      const randomizer = (arr) => {
        return Math.floor(Math.random() * (quotes.length-1));
      }
    
      const createTwoButtonAlert = () => { 
        let idx = randomizer(quotes);
        
        Alert.alert(
          `${quotes[idx].author} says:`,
          quotes[idx].text,
          [
            { text: "I feel so much better!!", onPress: () => console.log("OK Pressed") }
          ],
          { cancelable: false }
        );
      }


  return (
    <TouchableOpacity onPress={createTwoButtonAlert} style={[styles.container, props.style]}>
      <Text style={styles.button}>Look no further!!</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#5856D6",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 5,
    paddingLeft: 16,
    paddingRight: 16
  },
  button: {
    color: "#fff",
    fontSize: 17
  }
});

export default CupertinoButtonPurple;