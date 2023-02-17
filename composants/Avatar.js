import React from "react";
import { StyleSheet, Image, TouchableOpacity, View } from "react-native";

export default function Avatar() {
    return (
        <View style={styles.container}>
            <TouchableOpacity>
            <Image style={styles.avatar} source={require("../assets/icon2.png")}  />

        </TouchableOpacity>  
        </View>      
        );
    }

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    avatar: {
        width: 150,
        height: 150,
        alignSelf: "center",
    }
});