import React from "react";
import { Text, StyleSheet, Button, View } from "react-native";


const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Button
        title="Go to Components Demo"
        onPress={() => navigation.navigate('Component')} />
      <Button
        title="Go to List Demo"
        onPress={() => navigation.navigate('Component1')} />
      <Button
        title="Go to Image Demo"
        onPress={() => navigation.navigate('Component2')} />
      <Button
        title="Go to Counter Demo"
        onPress={() => navigation.navigate('Component3')} />
      <Button
        title="Go to Color Demo"
        onPress={() => navigation.navigate('Component4')} />
      <Button
        title="Go to Color Adjuster Demo"
        onPress={() => navigation.navigate('Component5')} />
      <Button
        title="Go to Counter Demo Reducer"
        onPress={() => navigation.navigate('Component6')} />
         <Button
        title="Go to Text input Demo Reducer"
        onPress={() => navigation.navigate('Component7')} />
    </View>);


};


const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
