import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet,  View, Alert } from 'react-native';
import { Button, Text, Container, Header, Left, Body, Right, Icon, Title } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';

export default function App() {
  const [ ready, setReady ] = useState(false);
 
  const componentDidMount = async () => {

    let workForTheLoveOfGod = await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    setReady(true);
  }
  useEffect( () => {
    componentDidMount();
  }, []);


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
    <View style={styles.container}>

      <Text>Are you feeling blue? Are things just hard? Do you have a test looming and need to be reminded that everything is going to be ok? Or are you just looking for some words of encouragement while the world’s on fire? 
      </Text>

      <Button block warning onPress={createTwoButtonAlert}>
            <Text>Look no further!!!</Text>
          </Button> 

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    paddingLeft: 10,
    paddingRight: 10,
  }
});
