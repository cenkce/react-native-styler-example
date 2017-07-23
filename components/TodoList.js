import React from "react";
import { StyleSheet, Text, View } from 'react-native';

export default class TodoList extends React.Component {
  static propTypes = {
  }

  render(){
    return this.props.items.map(item => <TodoItem text={item}></TodoItem>)
  }
}

function TodoItem(props){
  return <Button>{props.text}</Button>
}

TodoItem.contextTypes = {
  styler: React.PropTypes.function
}
