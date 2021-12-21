import Counter from "./Counter";
import { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
    };
  }

  showHide = () => {
    this.setState({ show: !this.state.show });
  };
  render() {
    return (
      <>
        <button onClick={this.showHide}>Show/Hide</button>
        {this.state.show ? <Counter /> : <> </>}
      </>
    );
  }
}

export default App;
