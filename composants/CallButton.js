import React from "react";
import { StyleSheet, Button, Text, TouchableOpacity, Linking } from "react-native";

export default function CallButton() {
    const call = () => {
        Linking.openURL(`tel: 06 12 34 56 78`);
    }
    return (
        <TouchableOpacity style={styles.contactbtn} onPress={call}>
            <Text style={styles.contact}>Contacter</Text>
        </TouchableOpacity>
    );
    }

const styles = StyleSheet.create({
    contactbtn: {
        backgroundColor: "#F2C94C",
        width: 200,
        height: 50,
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 50,

    },
    contact: {
        color: "white",
        fontSize: 20,   
    }
});