import React from "react";

React.createFactory();

export default function withStyler(styler){
  return class StylerProvider extends React.Component {
    childContextTypes = {
      styler: React.PropTypes.string
    }

    getChildContext() {
      return styler;
    }

    render(){
      return React.Children.only(children);
    }
  }
}
