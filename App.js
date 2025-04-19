import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentScreen from "./src/screens/Component";
import ListScreen from "./src/screens/ListScreen";
import ImageScreen from "./src/screens/ImageScreen";
import CounterScreen from "./src/screens/Counter";
import RandomColor from "./src/screens/RandomColor";
import ColorAdjuster from "./src/screens/ColorAdjuster";
import { Component } from "react";
import CounterScreenReducer from "./src/screens/CounterReducer";
import TextInputDemo from "./src/screens/TextInputDemo";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Component : ComponentScreen,
    Component1: ListScreen,
    Component2: ImageScreen,
    Component3: CounterScreen,
    Component4: RandomColor,
    Component5: ColorAdjuster,
    Component6: CounterScreenReducer,
    Component7: TextInputDemo,

  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
