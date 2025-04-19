import React from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';
const ImageDetail = (props) => {
    return (
        <View>
        <Text>{props.title}</Text>
        <Image
            source={props.imagesrc}
            style={styles.imageStyle}   />
        </View>
    );
    }
const styles = StyleSheet.create({
    imageStyle: {
        width: 300,
        height: 200,
        marginVertical: 10,
    },
});

export default ImageDetail;
