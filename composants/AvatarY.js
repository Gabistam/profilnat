
import React from "react";
import { StyleSheet, Image, TouchableOpacity, View } from "react-native";
import { useState } from "react";
import * as ImagePicker from 'expo-image-picker';


export default function AvatarY() {

    const[image, setImage] = React.useState('');
const pickImage = async () => {
    

    //Demander à l'utilisateur la permission d'accéder à la galerie
    let PermissionResult = await ImagePicker.requestCameraRollPermissionsAsync();


    if (PermissionResult.granted === false) {
        alert("Permission d'accéder à la galerie refusée");
        return;
    }


    //Ouvrir la galerie
    let result = await ImagePicker.launchImageLibraryAsync();
    console.log(result);
    //if (result.cancelled == false) {
       // setImage(result.uri);
   // }


    }
    return (
        <View>
            <TouchableOpacity onPress={pickImage}>
                {image == '' ?
            <Image style={styles.avatar} source={require('../assets/icon2.png')}  />
            :
            <Image style={styles.avatar} source={{uri : image}}  />
            }

        </TouchableOpacity>  
        </View>
        )
    }

    

const styles = StyleSheet.create({

    avatar: {
        width: 100,
        height: 100,
        marginTop: 50,
        marginBottom: 50,
        alignSelf: "center",
        top: 150,
    
    }
});
