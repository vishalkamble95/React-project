import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <div className="about bg-orange-50 min-h-screen flex flex-col items-center py-10">
        <h1 className="text-3xl font-bold text-orange-700 mb-6">About Us</h1>
        <UserClass name="Vishal Kamble" location="Shrirampur" />
      </div>
    );
  }
}

export default About;
