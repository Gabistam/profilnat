import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Speech from 'expo-speech';


export default function About() {
    useEffect(() => {
      Speech.getAvailableVoicesAsync().then(voices => {
        console.log(voices);
      })
    }, [])

   
  return (
    <View style={styles.container}>
      <Text style={styles.name}>Gabi Stam</Text>
      <Text style={styles.desc}>Je suis developpeur Frontend</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#423C3B",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
    },
    name: { 
        color: "white",
        fontSize: 23,
        marginBottom: 15,
        fontFamily: "Lobster",
    },
    desc: {
        color: "white",
        fontSize: 15,
        fontFamily: "Lato",
    }
});
        