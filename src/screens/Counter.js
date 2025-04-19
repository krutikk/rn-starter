import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const CounterScreen = () => {
    const [counter, setCounter] = useState(0);

    return (
        <View style={ stylesCounter.container}>
                <Text style={stylesCounter.counterText}>Counter App</Text>
                <Text style={stylesCounter.counterText}>Current Count: {counter}</Text>
                <Button title="Increase" onPress={() => setCounter(counter + 1)} />
                <Button title="Decrease" onPress={() => setCounter(counter - 1)} />
            </View>
        );


};

const stylesCounter = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    counterText: {
        fontSize: 24,
        marginBottom: 20,
    },
});

export default CounterScreen;