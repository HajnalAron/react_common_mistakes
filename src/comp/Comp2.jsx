import React, { Component } from "react";

export default class Comp2 extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.functionToSetTheStateOfApp}>Count</button>
      </div>
    );
  }
}
