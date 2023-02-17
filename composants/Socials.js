import React from "react";
import { StyleSheet, TouchableOpacity, View, Image, Linking } from "react-native";
import * as WebBrowser from 'expo-web-browser';

export default function Socials() {
    const openLinkedin = () => {
        Linking.openURL(`https://www.linkedin.com/in/st-amand-gabirault-83a64168`);
        //WebBrowser.openBrowserAsync('https://www.linkedin.com/in/st-amand-gabirault-83a64168/');
    }
    const openFacebook = () => {
        //Linking.openURL(`https://www.linkedin.com/in/st-amand-gabirault-83a64168/`);
        WebBrowser.openBrowserAsync('https://www.facebook.com/gabirault.stamand');
    }
    const openInsta = () => {
        //Linking.openURL(`https://www.linkedin.com/in/st-amand-gabirault-83a64168/`);
        WebBrowser.openBrowserAsync('https://www.instagram.com/gabirault.stamand/');
    }

    return (
        <View style={styles.container}>
        <TouchableOpacity onPress={openLinkedin}>
            <Image style={StyleSheet.logo} source={require("../assets/linkedin.png")}  />
        </TouchableOpacity>
        <TouchableOpacity onPress={openFacebook}>
            <Image style={StyleSheet.logo1} source={require("../assets/facebook.png")}  />
        </TouchableOpacity>
        <TouchableOpacity onPress={openInsta}>
            <Image style={StyleSheet.logo} source={require("../assets/insta.png")}  />
        </TouchableOpacity>

        </View>
    );
    }

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginTop: 50,
        marginBottom: 100,
    },
    logo: {
        width: 50,
        height: 50,
    },
    logo1: {
        width: 50,
        height: 50,

        marginTop: 50,
        
    },
    
});