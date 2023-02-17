import React, {useState} from "react";
import { StyleSheet, Image, TouchableOpacity, View, Text } from "react-native";
import * as ImagePicker from 'expo-image-picker';

export default function Avatarz() {

    const [image, setImage] = useState(null);

    const pickImage = async () => {
      // No permissions request is necessary for launching the image library
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
  
      console.log(result);
  
      if (!result.canceled) {
        setImage(result.assets[0].uri);
      }
    };


    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={pickImage} style={styles.btnAvatar}>
                <Text style={styles.txtbtn}>Inserer image</Text>
                  {image == '' ?
            <Image style={styles.avatar} source={require("../assets/icon2.png")}  />
            :
            <Image source={{ uri: image }} style={{ width: 200, height: 50 }} />}
            

        </TouchableOpacity>  
        </View>
        );
    }
    const bgImage = require("../assets/icon2.png");

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        borderWidth: 0.5,
        borderColor: "whitesmoke",
        borderRadius: 30,
        backgroundColor: "black",

    },
    btnAvatar: {
        width: 200,
        height: 200,
        alignItems: "center",
        justifyContent: "center",

    },
    txtbtn: {   
        color: "white",
        fontSize: 20,
        fontFamily: "Lobster",

    },
    avatar: {
        width: 150,
        height: 150,
        alignSelf: "center",
    }
});