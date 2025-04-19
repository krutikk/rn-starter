import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import ImageDetail from './ImageDetail';

const ImageScreen = () => {
    return (
        <View>
            <Text>Image Screen</Text>
            <ImageDetail title = "Forest" imagesrc = {require('../../assets/forest.jpg')}/>
            <ImageDetail title = "beach" imagesrc ={require("../../assets/beach.jpg")} />
            <ImageDetail title = "montain" imagesrc ={require("../../assets/mountain.jpg")}/>
        </View>
    );
};

const styles = StyleSheet.create({
    image: {
        width: 300,
        height: 200,
        marginVertical: 10,
    },
});

export default ImageScreen;