import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy Name",
        location: "Default Location",
      }
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/vishalkamble95");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
  }

  componentDidUpdate() {
    console.log("Component updated");
  }

  componentWillUnmount() {
    console.log("Component will unmount");
  }

  render() {
    const { name, location, avatar_url } = this.state.userInfo;

    return (
      <div className="user-card">
        <img alt="avatar_url" src={avatar_url} width={200} />
        <h2>Name: {name || "Vishal Kamble"}</h2>
        <h3>Location: {location || "India"}</h3>
        <h4>Contact: vishal@test.com</h4>
      </div>
    );
  }
}
export default UserClass;
