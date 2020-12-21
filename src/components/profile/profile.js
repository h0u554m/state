import React, { Component } from "react";
import img from "../../img/New Project.png";
class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ishsow: false,
      currentCount: 0,
      fullName: "houssam",
      bio: "deveopler",
      imgSrc: img,
      profession: "developer",
    };
  }
  timer() {
    this.setState({
      currentCount: this.state.currentCount + 1,
    });
    if (this.state.currentCount < 1) {
      clearInterval(this.intervalId);
    }
  }
  componentDidMount() {
    this.intervalId = setInterval(this.timer.bind(this), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.intervalId);
  }
  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.setState({
              ishsow: !this.state.ishsow,
            });
          }}
        >show/hide</button>
        {this.state.ishsow === true ? (
          <div>
            <img src={this.state.imgSrc} alt="" />
            <h1>{this.state.fullName}</h1>
            <h1>{this.state.bio}</h1>
            <h1>{this.state.profession}</h1>
          </div>
        ) : (
          <div></div>
        )}
        {this.state.currentCount}
      </div>
    );
  }
}

export default Clock;
