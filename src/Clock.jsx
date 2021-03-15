import React, { Component } from "react";
import "./App.css";

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }

  //this is a lifecycle hook
  // will render data before put on screen
  componentWillMount() {
    this.getTimeUntil(this.props.deadline);
  }
  //will run after component has rendered on screen
  // in this app will run every second
  componentDidMount() {
    //the number at the end "1000" is milliseconds and is equal to 1 second
    setInterval(() => this.getTimeUntil(this.props.deadline), 1000);
  }

  //this is a method but in arrow function syntax with a turnery function
  leading0 = (num) => (num < 10 ? "0" + num : num);

  getTimeUntil(deadline) {
    //dead line minus new date
    // new Date() - in default grabs current time and date
    //javascript has pre built date methods
    const time = Date.parse(deadline) - Date.parse(new Date());
    // console.log(time);
    const seconds = Math.floor((time / 1000) % 60);
    const minutes = Math.floor((time / 1000 / 60) % 60);
    const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
    const days = Math.floor(time / (1000 * 60 * 60 * 24));

    this.setState({
      /* new syntax that works if ie days: days, hours: hours*/
      /*it is called - key value short hand syntax*/
      days,
      hours,
      minutes,
      seconds,
    });
  }

  render() {
    return (
      <div>
        <div className="Clock-days">{this.leading0(this.state.days)} Days</div>
        <div className="Clock-hours">
          {this.leading0(this.state.hours)} hours
        </div>
        <div className="Clock-minutes">
          {this.leading0(this.state.minutes)} minutes
        </div>
        <div className="Clock-seconds">
          {this.leading0(this.state.seconds)} seconds
        </div>
      </div>
    );
  }
}

export default Clock;
