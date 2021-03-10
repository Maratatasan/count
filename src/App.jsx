import React, { Component } from "react";
import "./App.css";
// this clock is in src folder Clock.jsx
import Clock from "./Clock";
import { Form, FormControl, Button } from "react-bootstrap";

// this is now a component
//it is independent and reusable peace of UI
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deadline: "December 25 , 2021",
      newDeadline: "",
    };
  }

  changeDeadline() {
    // the state has to be changed through  this.setState()
    // WHY?
    // otherwise it will not render
    // pass in entire object referring to the one you would like to update
    this.setState({ deadline: this.state.newDeadline });
  }

  render() {
    return (
      <div className="App">
        <div className="App-title"> Countdown to {this.state.deadline}</div>
        <div>
          {/* deadline is passed to clock as a prop*/}
          <Clock deadline={this.state.deadline} />
        </div>
        <Form inline className="form-div">
          <FormControl
            className="Deadline-input"
            placeholder="new date"
            onChange={(event) =>
              this.setState({ newDeadline: event.target.value })
            }
          />
          {/*the function has to be called through an anonymous function "() =>" or the app will crash*/}
          <Button onClick={() => this.changeDeadline()}>Submit</Button>
        </Form>
      </div>
    );
  }
}

export default App;
//need to make the app recognize the component
// importing and exporting allows to share code between modules and files.
