import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import ColorCounter from './ColorCounter';

const ColorAdjuster = () => {
    // const [red, setRed] = useState(0);
    // const [green, setGreen] = useState(0);
    // const [blue, setBlue] = useState(0);

    const COLOR_INCREMENT = 15;


    const reducer = (state, action) => {
        switch (action.type) {
            case 'change_red':
                return state.red + action.payload > 255 || state.red + action.payload < 0
                    ? state
                    : { ...state, red: state.red + action.payload };
            case 'change_green':
                return state.green + action.payload > 255 || state.green + action.payload < 0
                    ? state
                    : { ...state, green: state.green + action.payload };
            case 'change_blue':
                return state.blue + action.payload > 255 || state.blue + action.payload < 0
                    ? state
                    : { ...state, blue: state.blue + action.payload };
            default:
                return state;
        }
    };

    const [state, dispatch] = React.useReducer(reducer, { red: 0, green: 0, blue: 0 });
    const { red, green, blue } = state;
    return (
        <View>
            <Text style={styles.text}>Adjust Colors</Text>
            <ColorCounter
                color={'Red'} //type = Color to Change // payload = amount to change
                onIncrease={() => dispatch({ type: 'change_red', payload: COLOR_INCREMENT })}
                onDecrease={() => dispatch({ type: 'change_red', payload: -COLOR_INCREMENT })}
            />
            <ColorCounter
                color={'Green'}
                onIncrease={() => dispatch({ type: 'change_green', payload: COLOR_INCREMENT })}
                onDecrease={() => dispatch({ type: 'change_green', payload: -COLOR_INCREMENT })}
            />
            <ColorCounter
                color={'Blue'}
                onIncrease={() => dispatch({ type: 'change_blue', payload: COLOR_INCREMENT })}
                onDecrease={() => dispatch({ type: 'change_blue', payload: -COLOR_INCREMENT })}
            />
            <Text style={styles.text}>Current RGB: {`rgb(${red}, ${green}, ${blue})`}</Text>
            <View
                style={{
                    height: 150,
                    width: 150,
                    backgroundColor: `rgb(${red}, ${green}, ${blue})`,
                    alignSelf: 'center',
                    marginTop: 20,
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        textAlign: 'center',
        marginVertical: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 5,
    },
});

export default ColorAdjuster;