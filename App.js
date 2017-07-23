import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {flatStyler} from "@smartface/styler";
import TodoList from "./components/TodoList";
import withStyles from "./lib/withStyles";

export default class App extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <StylingContaier>
        <View className=".container">
          <Text className=".text">Open up App.js to start working on your app! Changes you make will automatically reload.</Text>
          <Text className=".text">Shake your phone to open the developer menu.</Text>
        </View>
      </StylingContaier>
    );
  }
}

const styles = {
  ".container": {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  ".text": {
    width: 200
  }
};

const styling = flatStyler(styles);
const StylingContaier = withStyles(styling);
