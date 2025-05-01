import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy Name",
        location: "Default",
        contact: "email",
        avatar_url: "https://avatar_url.com",
      },
    };
    console.log(this.props.name + "Child constructor");
  }

  async componentDidMount() {
    console.log(this.props.name + "Child Component Did Mount");
    const data = await fetch("https://api.github.com/users/Ajaybazilissac");
    const json = await data.json();
    console.log(json);
    this.setState({
      userInfo: json,
    });
  }

  componentDidUpdate() {
    console.log("Component Did Update");
  }
  componentWillUnmount() {
    console.log("COmponent Will Unmount");
  }
  render() {
    console.log("Child Render.");

    const { name, location, email, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card m-4 p-4 bg-gray-100 rounded-lg">
        <img
          className="git-image h-100 w-100 rounded-full"
          src={avatar_url}
        ></img>
        <h2>Name:{name} </h2>
        <h3>Location: {location}</h3>
        <h3>Contact : {email}</h3>
      </div>
    );
  }
}

export default UserClass;

/**
 * ------MOUNTING-----
 *
 * Constructor (dummy)
 * Render (dummy)
 *      <HTML Dummy>
 * ComponentDidMount
 *       <API Call>
 *        <this.setState> -> State variable is updated
 *
 * -----UPDATE------
 *
 * render(API data)
 * <HTML (new API data>)
 *
 * ComponentDIdUpdate
 */
