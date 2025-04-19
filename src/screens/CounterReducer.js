
import { View, Text, Button, StyleSheet } from 'react-native';
import React, { useReducer } from 'react';

const CounterScreenReducer = () => {
    const reducer = (state, action) => {
        switch (action.type) {
            case 'increase':
                return { ...state, count: state.count + action.payload };
            case 'decrease':
                return { ...state, count: state.count - action.payload };
            default:
                return state;
        }
    };

    const [state, dispatch] = useReducer(reducer, { count: 0 });
    const { count } = state;

    return (
        <View style={styles.container}>
            <Text style={styles.counterText}>Counter App</Text>
            <Text style={styles.counterText}>Current Count: {count}</Text>
            <Button title="Increase" onPress={() => dispatch({ type: 'increase', payload: 1 })} />
            <Button title="Decrease" onPress={() => dispatch({ type: 'decrease', payload: 1 })} />
        </View>
    );
};


const styles = StyleSheet.create({
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

export default CounterScreenReducer;
