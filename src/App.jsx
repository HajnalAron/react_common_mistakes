import logo from "./logo.svg";
import "./App.css";
import { Comp1 } from "./comp/Comp1";
import Comp2 from "./comp/Comp2";
import { Component } from "react";

class App extends Component {
  /*
  State is the inner data storage of a component
  Props is the data/options a component is getting from it's parent
  React is rerendering the page when there is a change in props and state
  */
  state = { counter: 0, counterTwo: 5 };

  //THIS IS NOT GOING TO WORK BECAUSE NORMAL FUNCTIONS ARE RESCOPING THE this keyword!!!!!!!!!!!!!
  // increaseCounter() {
  //   this.setState({ ...this.state, counter: this.state.counter + 1 });
  // }

  // Use arrow functions instead
  increaseCounter = () => {
    this.setState({ ...this.state, counter: this.state.counter + 1 });
  };

  render() {
    return (
      <div className="App">
        {/* --------------wrapping function call inside a void arrow function -------------- */}
        <button
          onClick={() => {
            this.increaseCounter();
          }}
        >
          increment1
        </button>

        {/* --------------using function reference instead of a function call -------------- */}
        <button onClick={this.increaseCounter}>increment2</button>

        {/* --------------DON'T do this, this is going to cause an infinite loop!!!!!!!!!!!!!! -------------- */}
        <button onClick={this.increaseCounter()}>increment2</button>
        {/* --------------Passing down the STATE as a prop to a child component -------------- */}
        {/* --------------instance one of Comp1 -------------- */}
        <Comp1 counter={this.state.counter} />
        {/* --------------instance two of Comp1, with different props -------------- */}
        <Comp1 counter={this.state.counterTwo} />
        {/* --------------Passing down the STATE SETTER as a prop to a child component -------------- */}
        <Comp2
          functionToSetTheStateOfApp={() => {
            this.setState({ ...this.state, counter: this.state.counter + 1 });
          }}
        />
      </div>
    );
  }
}

export default App;
