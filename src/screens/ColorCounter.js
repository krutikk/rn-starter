import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ColorCounter = ({ color, onIncrease, onDecrease }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{color}</Text>
            <Button title={`Increase ${color}`} onPress={onIncrease} />
            <Button title={`Decrease ${color}`} onPress={onDecrease} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        margin: 10,
        alignItems: 'center',
    },
    text: {
        fontSize: 18,
        marginBottom: 10,
    },
});

export default ColorCounter;