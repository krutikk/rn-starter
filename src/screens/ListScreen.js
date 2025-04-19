import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const ListScreen = function() {
    const friends = [
        { name: 'Friend #1', age: 20, key : '1' },
        { name: 'Friend #2', age: 25, key : '2' },
        { name: 'Friend #3', age: 30, key : '3' },
        { name: 'Friend #4', age: 35, key : '4' },
        { name: 'Friend #5', age: 40, key : '5' },
    ];

    return (
        <View style={styles.container}>
            <FlatList
                keyExtractor={(friend) => friend.key}
                data={friends}
                renderItem={({ item }) => (
                    <Text style={styles.textStyle}>
                        {item.name} - Age {item.age}
                    </Text>
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
    textStyle: {
        fontSize: 18,
        marginVertical: 10,
    },
});

export default ListScreen;