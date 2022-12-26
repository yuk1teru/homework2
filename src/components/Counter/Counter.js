import { Component } from 'react';

class Counter extends Component {
  state = {
    value: 0,
  };

  handleIncreace = () => {
    this.setState(prevState => {
      return {
        value: prevState.value + 1,
      };
    });
  };
  handleDecrement = () => {
    this.setState(prevState => {
      return {
        value: prevState.value - 1,
      };
    });
  };

  render() {
    return (
      <div>
        <span>{this.state.value}</span>
        <div>
          <button
            type="button"
            onClick={() => {
              this.setState({
                value: 3,
              });
            }}
          >
            +
          </button>
          <button type="button" onClick={this.handleDecrement}>
            -
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
