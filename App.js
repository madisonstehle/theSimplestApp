import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet,  View, Alert } from 'react-native';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import Button from './components/Button';
import Background from './components/Background';
import Rect from './components/Rect';


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

  return ( 
    <View style={styles.container}>
    <Background />
    <Rect />   
    <Button />
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
