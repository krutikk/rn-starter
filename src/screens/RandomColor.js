import React, { useState } from 'react';
import { View, Button, FlatList, StyleSheet } from 'react-native';

const RandomColor = () => {
    const [colors, setColors] = useState([]);

    const generateRandomColor = () => {
        const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
        setColors([...colors, randomColor]);
    };

    return (
        <View style={styles.container}>
            <Button title="Add Random Color" onPress={generateRandomColor} />
            <FlatList
                data={colors}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <View style={[styles.colorBox, { backgroundColor: item }]} />
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    colorBox: {
        height: 100,
        width: '100%',
        marginVertical: 5,
    },
});

export default RandomColor;