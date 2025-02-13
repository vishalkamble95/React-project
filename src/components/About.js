import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {
    return (
      <div className="about">
        <h1>About Us</h1>
        <UserClass name="First" location="Shrirampur" />
      </div>
    );
  }
}

export default About;