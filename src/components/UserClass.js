import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy Name",
        location: "Default Location",
      },
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
      <div className="user-card p-6 bg-white shadow-lg rounded-xl text-center w-[300px]">
        <img
          className="w-32 h-32 rounded-full mx-auto border-4 border-orange-300 shadow-md"
          alt="avatar_url"
          src={avatar_url}
        />
        <h2 className="text-xl font-semibold text-gray-800 mt-4">
          Name: {name || "Vishal Kamble"}
        </h2>
        <h3 className="text-gray-600">Location: {location || "India"}</h3>
        <h4 className="text-gray-500 font-medium mt-2">
          Contact: vishal@test.com
        </h4>
      </div>
    );
  }
}
export default UserClass;
