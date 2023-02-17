import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import './assets/icon2.png'
import About from './composants/About';
import CallButton from './composants/CallButton';
import Socials from './composants/Socials';
import {useFonts} from '@use-expo/font';
import {AppLoading} from 'expo';
import Avatar from './composants/Avatar';


export default function App() {



  return (
    
    <View style={styles.container}>
      <Avatar/>
      <About/>
      <Socials/>
      <CallButton/>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#423C3B',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 150,
    paddingBottom: 100,
  }


});


/*
let [fontsLoaded] = useFonts({
  'Lato': require('./assets/fonts/Lato-Regular.ttf'),
  'Lato-Bold': require('./assets/fonts/Lato-Bold.ttf'),
  'Lobster': require('./assets/fonts/Lobster-Regular.ttf'),

});

if (!fontsLoaded) {
  return <AppLoading />;
} else {
  ...
}
*/
