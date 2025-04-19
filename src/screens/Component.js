
import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentScreen = function() {

    const name = `Krutik`;
    
    return <View>
                <Text style = {styles.textStyle}> Getting started with React native</Text>
                <Text style ={styles.subheaderStyle}>My name is {name}</Text>
            </View>;
};



const styles = StyleSheet.create({

    textStyle :{
        fontSize: 55

    },
    subheaderStyle :{
        fontSize : 20
    }
    
});

export default ComponentScreen;