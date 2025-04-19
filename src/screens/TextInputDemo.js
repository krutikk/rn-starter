import React, { useReducer } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const reducer = (state, action) => {
    switch (action.type) {
        case 'update_text':
            return { ...state, text: action.payload };
        case 'update_password':
                return { ...state, password: action.payload };
        default:
            return state;
    }
};

const TextInputDemo = () => {
    const [state, dispatch] = useReducer(reducer, { text: '' , password: ''});
    const { text, password } = state;

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Enter Text:</Text>
            <TextInput
                style={styles.input}
                value={state.text}
                onChangeText={(newText) => dispatch({ type: 'update_text', payload: newText })}
            />
               <Text style={styles.label}>Enter Password:</Text>
             <TextInput
                style={styles.input}
                value={state.password}
                onChangeText={(newText) => dispatch({ type: 'update_password', payload: newText })}
            />
            <Text style={styles.output}>You entered: {state.text}</Text>
            <Text style={styles.output}>You entered Password: {state.password}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    label: {
        fontSize: 18,
        marginBottom: 10,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 20,
        borderRadius: 5,
    },
    output: {
        fontSize: 16,
        marginTop: 10,
    },
});

export default TextInputDemo;